import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import FilterPill from '../components/FilterPill';
import Input from '../components/Input';
import TransactionHistoryCard from '../components/TransactionHistoryCard';
import {hp, wp} from '../constant/responsive-dimension';
import moment from 'moment';
import {useQuery} from '@apollo/client';
import {FETCH_TRANSACTION_HISTORY} from '../graphQL/query';
import _ from 'lodash';

interface histroy {
  id: string;
  date: string;
  status: 'success' | 'failed' | 'pending';
  type: 'debit' | 'credit';
}

interface historyItem extends Array<histroy> {}

function TransactionHistroy() {
  const [groupedHistroy, setGroupedHistory] = useState<object | any>({});
  const [allHistroy, setAllHistory] = useState<string[] | any>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleGrouping = (data: historyItem) => {
    const grouped = _.groupBy(data, history =>
      moment(history.date).format('ddd D MMMM, yyyy'),
    );

    setGroupedHistory(grouped);
  };

  const {loading} = useQuery(FETCH_TRANSACTION_HISTORY, {
    onCompleted(data) {
      setAllHistory(data.allTransactionHistory);
      handleGrouping(data.allTransactionHistory);
    },
    onError: error => {
      console.log(error);
    },
  });

  const handleSearch = (text: string) => {
    if (text.length === 0) {
      handleGrouping(allHistroy);
    }

    let newList = allHistroy.filter((data: any) => {
      return data.name.toLowerCase().includes(text.toLowerCase());
    });

    if (!newList) {
      handleGrouping(allHistroy);
    } else {
      handleGrouping(newList);
    }
  };

  const handleFilter = (key: string, value: string) => {
    if (activeFilter === value) {
      handleGrouping(allHistroy);
      setActiveFilter(null);
      return;
    }

    let newList = allHistroy.filter((data: any) => {
      return data[key].toLowerCase().includes(value.toLowerCase());
    });

    if (!newList) {
      handleGrouping(allHistroy);
      setActiveFilter(null);
    } else {
      setActiveFilter(value);
      handleGrouping(newList);
    }
  };

  const getIsActive = (value: string) => {
    let isActive = activeFilter === value ? true : false;
    return isActive;
  };

  if (loading) {
    <View>
      <ActivityIndicator size={'small'} />
    </View>;
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={[styles.textContainer]}>
        <Text style={styles.text}>Transaction History</Text>
      </View>
      <View style={styles.topContainer}>
        <Input
          placeholder={'Search'}
          onChangeText={text => handleSearch(text)}
        />
        <ScrollView
          style={styles.filterContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <FilterPill
            active={getIsActive('success')}
            title={'Success'}
            onPress={() => handleFilter('status', 'success')}
          />
          <FilterPill
            active={getIsActive('failed')}
            title={'Failed'}
            onPress={() => handleFilter('status', 'failed')}
          />
          <FilterPill
            active={getIsActive('pending')}
            title={'Pending'}
            onPress={() => handleFilter('status', 'pending')}
          />
          <FilterPill
            active={getIsActive('credit')}
            title={'Credit'}
            onPress={() => handleFilter('type', 'credit')}
          />
          <FilterPill
            active={getIsActive('debit')}
            title={'Debit'}
            onPress={() => handleFilter('type', 'debit')}
          />
        </ScrollView>
      </View>
      <ScrollView style={styles.historyContent}>
        <>
          {Object.entries(groupedHistroy).map(([key, value]: any) => (
            <View style={styles.section} key={key}>
              <Text style={styles.historyDate}>{key}</Text>
              <View style={styles.historyContainer}>
                {value.map((item: any, index: number) => (
                  <TransactionHistoryCard
                    key={item.id}
                    name={item.name}
                    dateTime={moment(item.date).format('ddd D MMMM, yyyy')}
                    type={item.type}
                    status={item.status}
                    marginTop={index === 0 ? 0 : wp(20)}
                  />
                ))}
              </View>
            </View>
          ))}
        </>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  textContainer: {
    paddingVertical: hp(5),
    marginHorizontal: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: wp(16),
    fontWeight: 'bold',
  },
  topContainer: {
    marginTop: hp(26),
  },
  filterContainer: {
    marginTop: hp(20),
  },
  historyContent: {
    flex: 1,
    marginTop: hp(20),
    // marginBottom: hp(20),
    paddingHorizontal: wp(20),
  },
  section: {
    marginTop: wp(30),
  },
  historyDate: {
    fontSize: wp(14),
    fontWeight: 'bold',
  },
  historyContainer: {
    paddingHorizontal: wp(25),
    paddingTop: hp(26),
    marginTop: hp(15),
    paddingBottom: hp(22),
    backgroundColor: '#F6F6F6',
    borderRadius: wp(20),
  },
});

export default TransactionHistroy;
