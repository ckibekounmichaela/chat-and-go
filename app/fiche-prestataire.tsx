import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function FichePrestataire() {
  const { nom, note, quartier, distance, telephone } = useLocalSearchParams();

  const appeler = () => Linking.openURL(`tel:${telephone}`);
  const ouvrirWhatsApp = () => Linking.openURL(`https://wa.me/225${telephone}`);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#534AB7', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Fiche prestataire</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: '#F5F4FB', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
          <Text style={{ fontSize: 36 }}>🔧</Text>
        </View>

        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#2B2B4A', textAlign: 'center', marginTop: 16 }}>
          {nom}
        </Text>
        <Text style={{ color: '#F5A623', textAlign: 'center', marginTop: 4 }}>⭐ {note}</Text>

        <View style={{ marginTop: 24, gap: 12 }}>
          <Text style={{ color: '#666' }}>📍 {quartier} · {distance}</Text>
          <Text style={{ color: '#666' }}>📞 {telephone}</Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 12, marginTop: 32 }}>
          <TouchableOpacity
            style={{ flex: 1, borderWidth: 1, borderColor: '#25D366', borderRadius: 20, padding: 14, alignItems: 'center' }}
            onPress={appeler}
          >
            <Text style={{ color: '#25D366', fontWeight: 'bold' }}>📞 Appeler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: '#25D366', borderRadius: 20, padding: 14, alignItems: 'center' }}
            onPress={ouvrirWhatsApp}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}