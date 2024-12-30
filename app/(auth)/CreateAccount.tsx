// app/auth/CreateAccount.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleCreateAccount = async () => {
    // Implémentez la logique pour créer un compte ici
    const success = await createUserAccount(email, password); // Implémentez cette fonction selon votre méthode d'inscription
    if (success) {
      // Rediriger vers la page de connexion après la création du compte
      router.push('/auth/Login');
    } else {
      // Gérer l'échec de la création du compte
      alert('Erreur lors de la création du compte');
    }
  };

  return (
    <View>
      <Text>Créer un compte</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Créer un compte" onPress={handleCreateAccount} />
    </View>
  );
};

export default CreateAccount;
