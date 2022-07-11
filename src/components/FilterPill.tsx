import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from 'react-native';
import {hp, wp} from '../constant/responsive-dimension';
// import {wp} from '../constant/responsive-dimension';

interface FilterPillProps {
  title?: string;
  active?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const FilterPill: React.FC<FilterPillProps> = ({title, onPress, active}) => {
  const styles = StyleSheet.create({
    main: {
      borderRadius: wp(20),
      marginLeft: wp(20),
      paddingHorizontal: wp(20),
      paddingVertical: hp(8),
      backgroundColor: active ? '#cccccc' : '#eeeeee',
      // textAlign: 'center',
      // fontSize: wp(16),
      // height: hp(56),
      color: '#000',
    },
  });

  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterPill;
