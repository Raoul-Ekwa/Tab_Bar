import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.root}>
      <Text>index du dossier userConnexion</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
   root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
})