import React from 'react';
import {View, Text, Button} from 'react-native';

const Screen1 = ({navigation}: any) => {
  return (
    <View>
      <Text>Screen1</Text>
      <Button onPress={() => navigation.navigate('Linking')} title="Linking" />
    </View>
  );
};

export default Screen1;
