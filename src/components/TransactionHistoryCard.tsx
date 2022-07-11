import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {hp, wp} from '../constant/responsive-dimension';
// import {wp} from '../constant/responsive-dimension';

interface TransactionHistoryCardProps {
  name?: string;
  dateTime?: string;
  status: 'Success' | 'Failed' | 'Pending';
  type: 'debit' | 'credit';
  marginTop?: string | number;
}

const TransactionHistoryCard: React.FC<TransactionHistoryCardProps> = ({
  name,
  dateTime,
  status,
  type,
  marginTop,
}) => {
  const getStatusColor = (historyStatus: string) => {
    if (historyStatus === 'Success') {
      return '#ACEB06';
    }

    if (historyStatus === 'Failed') {
      return '#F28797';
    }

    if (historyStatus === 'Pending') {
      return '#656565';
    }
  };

  return (
    <View style={[styles.main, {marginTop}]}>
      <View style={styles.iconContainer} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subTexts}>{dateTime}</Text>
      </View>
      <View style={styles.otherInfo}>
        <Text style={styles.subTexts}>{type}</Text>
        <Text style={[styles.subTexts, {color: getStatusColor(status)}]}>
          {status}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    color: '#000',
  },
  iconContainer: {
    width: wp(48),
    height: wp(48),
    backgroundColor: '#ECECEC',
    borderRadius: wp(4),
  },
  textContainer: {
    flex: 1,
    marginLeft: wp(16),
  },
  name: {
    fontSize: wp(14),
    fontWeight: 'bold',
  },
  subTexts: {
    fontSize: wp(10),
    color: '#656565',
    marginTop: hp(4),
  },
  otherInfo: {
    alignItems: 'flex-end',
  },
});

export default TransactionHistoryCard;
