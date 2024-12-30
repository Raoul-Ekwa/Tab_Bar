import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Colors } from '@/constants/Colors';
import { APP_DIMENSIONS } from '@/constants/dimensions';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const Index = () => {
  // État pour gérer la visibilité du mot de passe
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Fonction pour basculer la visibilité du mot de passe
  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  const routeVersConnexion = () => {
     <Link href="/(auth)/Login"/>
  };

  return (
    <SafeAreaView style={styles.root}>

      <View style={styles.emoticone}>
        <MaterialIcons name="emoji-emotions" size={80} color={Colors.rose} />
      </View>
      {/* Image wrapper avec un peu de marge */}
      <View style={styles.imageWrapper}>
        <Image source={require("../../assets/images/logo santa lucia.png")} style={styles.image} />
      </View>

      {/* Champ de texte pour le Nom */}
      <View style={styles.inputWrapper}>
        <Ionicons name='person' size={24} color={'gray'} />
        <TextInput placeholder='Nom' style={styles.input} />
      </View>

      {/* Champ de texte pour l'Email */}
      <View style={styles.inputWrapper}>
        <Ionicons name='mail' size={24} color={'gray'} />
        <TextInput placeholder='Email' style={styles.input} />
      </View>

      {/* Champ de texte pour le Téléphone */}
      <View style={styles.inputWrapper}>
        <Ionicons name='call' size={24} color={'gray'} />
        <TextInput placeholder='Téléphone' style={styles.input} />
      </View>

      {/* Champ de texte pour le Mot de Passe */}
      <View style={styles.inputWrapper}>
        <FontAwesome6 name="unlock-keyhole" size={24} color={'gray'} />
        <TextInput
          placeholder='Mot de passe'
          secureTextEntry={!isPasswordVisible}  // Masquer le mot de passe si nécessaire
          style={styles.input}
        />
        {/* Bouton pour basculer la visibilité du mot de passe */}
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={24} color="gray" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Section pour rediriger vers la page de login */}
      <View style={{ flexDirection: 'row', marginLeft: 90, gap: 1, alignItems:'center' }}>
        <Text style={{ color: 'gray', fontSize: 12 }}>Vous avez déjà un compte?</Text>
        <Link href="/(auth)/Login"> {/* Utilisation de Link pour la redirection vers la page de login */}
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>Connectez-vous</Text>
        </Link>
      </View>

      <TouchableOpacity style={styles.button} >
        <Text style={{color: Colors.white, fontWeight:'bold', fontSize:15}}>Creer un Compte</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginBottom:200,
    justifyContent: 'center', // Centrer verticalement
    alignItems: 'center', // Centrer horizontalement
    padding: 20, // Espacement autour des bords
  },
  emoticone: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 30,
    //width: 100,
  },
  imageWrapper: {
    marginBottom: 30, // Marge pour espacer l'image du reste des champs
  },
  image: {
    width: APP_DIMENSIONS.LOGO_WIDTH,
    height: APP_DIMENSIONS.LOGO_HEIGHT,
    resizeMode: 'contain',
    marginTop: 20,
  },
  input: {
    flex: 1,
    paddingLeft: 10, // Ajout d'un padding pour décaler le texte du bord
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginLeft: 10, // Espacement entre l'icône et le champ de texte
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%', // Utilisation de toute la largeur disponible
    paddingHorizontal: 20, // Espacement interne
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: 20, // Espacement entre les champs de texte
  },
  icon: {
    marginLeft: 10, // Espacement pour l'icône
  },
  button:{
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    width: 300, 
    paddingHorizontal: 20, // Espacement interne
    backgroundColor: Colors.rose,
    marginBottom: 20, 
  }
});
