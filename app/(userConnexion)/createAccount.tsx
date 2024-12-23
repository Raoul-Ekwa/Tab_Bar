import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const createAccount = () => {
  return (
    <View style={styles.container}>
      <Text>createAccount</Text>
    </View>
  )
}

export default createAccount

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})