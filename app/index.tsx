import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';



export default function ecranchat()  {
  useEffect(() => {
  setTimeout(() => {
  router.replace('/ecran2');
}, 3000);
}, [])
  return (
    <View style={{ backgroundColor: '#534AB7', flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Image
         source={require('@/assets/images/logo.png')}
         style={{ width: 150, height: 150 }}
        />
        <Text style={{ color: '#F6F6F6', fontSize: 18 ,marginTop: 20}}>Votre assistant local</Text>
        <Text style={{ color: '#D0D0D0', fontSize: 14, textAlign: 'center' ,maxWidth: 250,marginTop: 12}}>Toujours là pour vous connecter au bon prestataire.</Text>
      </View>
      
      <View style={{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#FF6B1A', marginHorizontal: 4 }} />
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#D0D0D0', marginHorizontal: 4 }} />
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#D0D0D0', marginHorizontal: 4 }} />
      </View>
       
    </View>
  )
}
