import { Text, View } from 'react-native';

export default function Historique() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#534AB7', padding: 20, paddingTop: 50 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>Historique</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#888' }}>Aucune recherche récente</Text>
      </View>
    </View>
  );
}