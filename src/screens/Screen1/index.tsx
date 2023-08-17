import React from 'react';
import {View, Text, Button} from 'react-native';

const Screen1 = ({navigation}: any) => {
  return (
    <View>
      <Text>Screen1</Text>
      <Button
        onPress={() => navigation.navigate('Screen2')}
        title="Go to Screen2"
      />
    </View>
  );
};

export default Screen1;
