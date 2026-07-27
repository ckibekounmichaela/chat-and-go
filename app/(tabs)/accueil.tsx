import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const conversations = [
  { nom: "Plomberie Koffi", dernierMessage: "J'ai trouvé 3 plombiers.", heure: "10:30" },
  { nom: "Pizza Chez Tino", dernierMessage: "Je cherche le meilleur restaurant...", heure: "Hier" },
];

export default function Accueil() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#534AB7', padding: 20, paddingTop: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>Chat&Go</Text>
        <Text style={{ fontSize: 20 }}>☰</Text>
      </View>
      

      <ScrollView contentContainerStyle={{ padding: 16, gap: 8 }}>
        {conversations.map((conv, index) => (
          <TouchableOpacity
            key={index}
            style={{ flexDirection: 'row', padding: 16, backgroundColor: '#F5F4FB', borderRadius: 12, alignItems: 'center', gap: 12 }}
            onPress={() => router.push('/chat')}
          >
            <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20 }}>👤</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', color: '#2B2B4A' }}>{conv.nom}</Text>
              <Text style={{ color: '#888', marginTop: 2 }} numberOfLines={1}>{conv.dernierMessage}</Text>
            </View>
            <Text style={{ color: '#888', fontSize: 12 }}>{conv.heure}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={() => router.push('/inscription-prestataire')} style={{ padding: 12 }}>
  <Text style={{ color: '#534AB7', textAlign: 'center' }}>Devenir prestataire</Text>
</TouchableOpacity>

      <TouchableOpacity
        style={{ position: 'absolute', bottom: 30, right: 24, width: 56, height: 56, borderRadius: 28, backgroundColor: '#D85A30', justifyContent: 'center', alignItems: 'center' }}
        onPress={() => router.push('/chat')}
      >
        <Text style={{ color: 'white', fontSize: 24 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}