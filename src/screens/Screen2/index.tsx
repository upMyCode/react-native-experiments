import React from 'react';
import {View, Text, Button, Linking} from 'react-native';

const Screen2 = () => {
  const Url_A = 'myapp://app/a';

  return (
    <View>
      <Text>Screen2</Text>
      <Button onPress={() => Linking.openURL(Url_A)} title="Go to Screen1" />
    </View>
  );
};

export default Screen2;
