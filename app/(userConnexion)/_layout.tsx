import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const UserConnexionLayout = () => {
  return (
    <View style={styles.container}>
      <Link href="/createAccount" style={{color: 'blue', fontWeight:'bold', marginBottom:20}}>
        <Text style={styles.linkText}>Créer un compte</Text>
      </Link>

      <Text>_layout du dossier userConnexion</Text>
    </View>
  )
}

export default UserConnexionLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  linkText: {
    textDecorationLine: "underline"
  },
})