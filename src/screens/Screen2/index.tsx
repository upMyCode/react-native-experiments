import React from 'react';
import {View, Text, Button} from 'react-native';

const Screen2 = ({navigation, route}: any) => {
  const {
    params: {date},
  } = route;

  return (
    <View>
      <Text>{date && <Text>{date.toString()}</Text>}</Text>

      <Button
        onPress={() => navigation.navigate('Linking')}
        title="Go to Linking"
      />
    </View>
  );
};

export default Screen2;
