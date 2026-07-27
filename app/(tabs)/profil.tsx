import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Profil() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#534AB7', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Mon profil</Text>
      </View>

      <View style={{ padding: 24, alignItems: 'center' }}>
        <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: '#F5F4FB', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 36 }}>👤</Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2B2B4A', marginTop: 16 }}>
          Utilisateur Chat&Go
        </Text>
        <Text style={{ color: '#888', marginTop: 4 }}>+225 01 00 00 00 00</Text>
      </View>

      <View style={{ paddingHorizontal: 24, gap: 4 }}>
        <TouchableOpacity 
          style={{ paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' }}
          onPress={() => router.push('/inscription-prestataire')}
        >
          <Text style={{ color: '#2B2B4A', fontSize: 16 }}>Devenir prestataire</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' }}>
          <Text style={{ color: '#2B2B4A', fontSize: 16 }}>Langue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' }}>
          <Text style={{ color: '#2B2B4A', fontSize: 16 }}>À propos de Chat&Go</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{ paddingVertical: 16 }}
          onPress={() => router.replace('/connexion')}
        >
          <Text style={{ color: '#D85A30', fontSize: 16, fontWeight: 'bold' }}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}