import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebaseConfig';

export default function Inscription() {
  const [telephone, setTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [erreur, setErreur] = useState('');
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  const creerCompte = async () => {
    if (!telephone || !motDePasse) {
      setErreur('Remplis tous les champs');
      return;
    }
    setErreur('');
    setEnvoiEnCours(true);
    try {
      const emailFictif = `${telephone}@chatgo.app`;
      await createUserWithEmailAndPassword(auth, emailFictif, motDePasse);
      router.push('/verification');
    } catch (e) {
      setErreur("Erreur : ce numéro est peut-être déjà utilisé, ou le mot de passe est trop court (6 caractères min)");
    }
    setEnvoiEnCours(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#534AB7', padding: 20, paddingTop: 50 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>Chat&Go</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2B2B4A', marginTop: 20 }}>
          Créer un compte
        </Text>
        <Text style={{ color: '#888', marginTop: 8 }}>
          Renseignez vos informations pour continuer
        </Text>

        <Text style={{ marginTop: 24, marginBottom: 6, color: '#2B2B4A', fontWeight: 'bold' }}>Téléphone</Text>
        <TextInput
          placeholder="0700000000"
          placeholderTextColor="#B0B0B0"
          value={telephone}
          onChangeText={setTelephone}
          keyboardType="phone-pad"
          style={{ borderWidth: 1, borderColor: '#DDD', borderRadius: 12, padding: 14, fontSize: 16 }}
        />

        <Text style={{ marginTop: 20, marginBottom: 6, color: '#2B2B4A', fontWeight: 'bold' }}>Mot de passe</Text>
        <TextInput
          placeholder="6 caractères minimum"
          placeholderTextColor="#B0B0B0"
          value={motDePasse}
          onChangeText={setMotDePasse}
          secureTextEntry
          style={{ borderWidth: 1, borderColor: '#DDD', borderRadius: 12, padding: 14, fontSize: 16 }}
        />

        {erreur ? <Text style={{ color: '#D85A30', marginTop: 12 }}>{erreur}</Text> : null}

        <TouchableOpacity
          style={{ backgroundColor: '#D85A30', borderRadius: 30, padding: 16, alignItems: 'center', marginTop: 32 }}
          onPress={creerCompte}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            {envoiEnCours ? 'Création...' : 'Créer mon compte'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{ marginTop: 20, alignItems: 'center' }}
          onPress={() => router.push('/connexion')}
        >
          <Text style={{ color: '#7F77DD' }}>
            J'ai déjà un compte ? <Text style={{ fontWeight: 'bold' }}>Se connecter</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}