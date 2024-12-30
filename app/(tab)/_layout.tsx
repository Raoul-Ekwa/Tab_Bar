// app/tabs/_layout.tsx
import { Text, View, StyleSheet } from 'react-native';
import { Redirect, Slot } from 'expo-router';
import React from 'react';


const tabLayout = () => {
   return (
     <View style={styles.root}>
      <Slot />
       {/* <Text>Tab Layout</Text> */}
     </View>
   )
}

export default tabLayout

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})