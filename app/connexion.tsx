import { router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebaseConfig';

export default function Connexion() {
  const [telephone, setTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [erreur, setErreur] = useState('');
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  const seConnecter = async () => {
    if (!telephone || !motDePasse) {
      setErreur('Remplis tous les champs');
      return;
    }
    setErreur('');
    setEnvoiEnCours(true);
    try {
      const emailFictif = `${telephone}@chatgo.app`;
      await signInWithEmailAndPassword(auth, emailFictif, motDePasse);
      router.replace('/(tabs)/accueil');
    } catch (e) {
      setErreur("Numéro ou mot de passe incorrect");
    }
    setEnvoiEnCours(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#534AB7', padding: 20, paddingTop: 50 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>Chat&Go</Text>
      </View>

      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2B2B4A', marginTop: 20 }}>
          Se connecter
        </Text>
        <Text style={{ color: '#888', marginTop: 8 }}>
          Entrez vos identifiants pour continuer
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
          placeholder="********"
          placeholderTextColor="#B0B0B0"
          value={motDePasse}
          onChangeText={setMotDePasse}
          secureTextEntry
          style={{ borderWidth: 1, borderColor: '#DDD', borderRadius: 12, padding: 14, fontSize: 16 }}
        />

        {erreur ? <Text style={{ color: '#D85A30', marginTop: 12 }}>{erreur}</Text> : null}

        <TouchableOpacity
          style={{ backgroundColor: '#D85A30', borderRadius: 30, padding: 16, alignItems: 'center', marginTop: 32 }}
          onPress={seConnecter}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            {envoiEnCours ? 'Connexion...' : 'Se connecter'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{ marginTop: 20, alignItems: 'center' }}
          onPress={() => router.push('/inscription')}
        >
          <Text style={{ color: '#7F77DD' }}>
            Pas encore de compte ? <Text style={{ fontWeight: 'bold' }}>Créer un compte</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}