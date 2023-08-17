import React from 'react';
import {View, Button, Linking} from 'react-native';

const LinkingTo = () => {
  const Url_B = 'myapp://app/b/1589842744264';
  return (
    <View>
      <Button onPress={() => Linking.openURL(Url_B)} title="Go to Screen1" />
    </View>
  );
};

export default LinkingTo;
