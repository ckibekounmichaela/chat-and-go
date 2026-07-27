import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Onboarding4() {
  return (
    <View style={{ flex: 1, backgroundColor: '#C4C4C4' }}>

      <TouchableOpacity 
        style={{ position: 'absolute', top: 50, right: 20, zIndex: 1 }}
        onPress={() => router.replace('/inscription')}
      >
        <Text style={{ color: '#534AB7', fontWeight: 'bold' }}>PASSER</Text>
      </TouchableOpacity>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 180, height: 180, borderRadius: 90, backgroundColor: '#E8E6FA', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 50 }}>🤖⏰</Text>
        </View>
      </View>

      <View style={{ backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 24, paddingBottom: 40 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#2B2B4A' }}>
          L'IA à votre service 24h/24
        </Text>
        <Text style={{ fontSize: 14, color: '#7F77DD', textAlign: 'center', marginTop: 16, lineHeight: 20 }}>
          Notre assistant est toujours disponible,{'\n'}de jour comme de nuit.
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 6, marginTop: 24 }}>
          <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#D0D0D0' }} />
          <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#D0D0D0' }} />
          <View style={{ width: 24, height: 8, borderRadius: 4, backgroundColor: '#D85A30' }} />
        </View>

        <TouchableOpacity
          style={{ backgroundColor: '#D85A30', borderRadius: 30, padding: 16, alignItems: 'center', marginTop: 24 }}
          onPress={() => router.replace('/inscription')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Commencer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}