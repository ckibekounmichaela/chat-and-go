import { router } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Verification() {
  const [code, setCode] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#534AB7', padding: 20, paddingTop: 50 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>Chat&Go</Text>
      </View>

      <View style={{ padding: 24, alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2B2B4A', marginTop: 20 }}>
          Code de vérification
        </Text>
        <Text style={{ color: '#888', marginTop: 8, textAlign: 'center' }}>
          Entrez le code à 4 chiffres envoyé par SMS
        </Text>

        <TextInput
          value={code}
          onChangeText={setCode}
          keyboardType="number-pad"
          maxLength={4}
          style={{
            borderWidth: 1,
            borderColor: '#DDD',
            borderRadius: 12,
            padding: 16,
            fontSize: 24,
            textAlign: 'center',
            letterSpacing: 12,
            width: '80%',
            marginTop: 32
          }}
        />

        <TouchableOpacity
          style={{ backgroundColor: '#D85A30', borderRadius: 30, padding: 16, alignItems: 'center', marginTop: 32, width: '100%' }}
          onPress={() => router.replace('/(tabs)/accueil')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Vérifier</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ color: '#7F77DD' }}>Renvoyer le code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}