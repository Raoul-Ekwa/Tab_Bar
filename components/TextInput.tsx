import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import {Colors} from '../constants/Colors';
import Fontisto from '@expo/vector-icons/Fontisto';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Le monde </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  
});
