import { router } from 'expo-router';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from '../firebaseConfig';

export default function InscriptionPrestataire() {
  const [nom, setNom] = useState('');
  const [categorie, setCategorie] = useState('restauration');
  const [quartier, setQuartier] = useState('');
  const [telephone, setTelephone] = useState('');
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  const categories = ['restauration', 'depannage', 'transport'];

  const soumettre = async () => {
    if (!nom || !quartier || !telephone) return;
    setEnvoiEnCours(true);
    try {
      await addDoc(collection(db, 'prestataires'), {
        nom,
        categorie,
        quartier,
        distance: "1km",
        note: 5,
        telephone,
        ouvert: true
      });
      router.back();
    } catch (erreur) {
      console.log('ERREUR:', erreur.message);
    }
    setEnvoiEnCours(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#534AB7', padding: 20, paddingTop: 50 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>Devenir prestataire</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text style={{ marginBottom: 6, color: '#2B2B4A', fontWeight: 'bold' }}>Nom de l'entreprise</Text>
        <TextInput
          placeholder="Ex: Plomberie Express"
          placeholderTextColor="#B0B0B0"
          value={nom}
          onChangeText={setNom}
          style={{ borderWidth: 1, borderColor: '#DDD', borderRadius: 12, padding: 14, fontSize: 16 }}
        />

        <Text style={{ marginTop: 20, marginBottom: 6, color: '#2B2B4A', fontWeight: 'bold' }}>Catégorie de service</Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setCategorie(cat)}
              style={{
                flex: 1,
                padding: 12,
                borderRadius: 20,
                alignItems: 'center',
                backgroundColor: categorie === cat ? '#534AB7' : '#F5F4FB',
                borderWidth: 1,
                borderColor: categorie === cat ? '#534AB7' : '#DDD'
              }}
            >
              <Text style={{ color: categorie === cat ? 'white' : '#534AB7', fontWeight: 'bold', fontSize: 12 }}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={{ marginTop: 20, marginBottom: 6, color: '#2B2B4A', fontWeight: 'bold' }}>Quartier</Text>
        <TextInput
          placeholder="Ex: Cocody, Angré"
          placeholderTextColor="#B0B0B0"
          value={quartier}
          onChangeText={setQuartier}
          style={{ borderWidth: 1, borderColor: '#DDD', borderRadius: 12, padding: 14, fontSize: 16 }}
        />

        <Text style={{ marginTop: 20, marginBottom: 6, color: '#2B2B4A', fontWeight: 'bold' }}>Téléphone</Text>
        <TextInput
          placeholder="0708091011"
          placeholderTextColor="#B0B0B0"
          value={telephone}
          onChangeText={setTelephone}
          keyboardType="phone-pad"
          style={{ borderWidth: 1, borderColor: '#DDD', borderRadius: 12, padding: 14, fontSize: 16 }}
        />

        <TouchableOpacity
          style={{ backgroundColor: '#D85A30', borderRadius: 30, padding: 16, alignItems: 'center', marginTop: 32 }}
          onPress={soumettre}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            {envoiEnCours ? 'Envoi...' : "S'inscrire comme prestataire"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}