import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';
import { KeyboardAvoidingView, Linking, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from '../firebaseConfig';

export default function chat() {
  const [messages, setMessages] = useState([
  { texte: "Bonjour 👋 Que recherchez-vous ?", expediteur: "assistant" },
  { texte: "Je veux manger une pizza", expediteur: "utilisateur" },
  { texte: "Je cherche le meilleur restaurant pour vous...", expediteur: "assistant" }
]);
  const [texteSaisi, setTexteSaisi] = useState('');
  

  
const envoyerMessage = async () => {
const nouveauMessage = { texte: texteSaisi, expediteur: 'utilisateur' };
setMessages([...messages, nouveauMessage]);
setTexteSaisi('');

  

  try {
    const reponse = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-v4-flash',
      messages: [
        { role: 'system', content: `Tu es l'assistant de Chat&Go. Analyse la demande de l'utilisateur et réponds UNIQUEMENT avec un objet JSON (rien d'autre, pas de texte avant ou après), au format exact suivant :
        {"categorie": "restauration" ou "depannage" ou "transport" ou "inconnu", "message": "un court message confirmant sa demande et disant que tu cherches le bon prestataire"}` },
      { role: 'user', content: texteSaisi }
      ]
      })
    });


    const data = await reponse.json();

    const texteReponse = data.choices[0].message.content;

    const reponseJSON = JSON.parse(texteReponse);
    const q = query(collection(db, 'prestataires'), where('categorie', '==', reponseJSON.categorie));
const snapshot = await getDocs(q);
const prestatairesTrouves = snapshot.docs.map(doc => doc.data());

setMessages(prev => {
  let nouvelle = [...prev, { texte: reponseJSON.message, expediteur: 'assistant' }];
  if (prestatairesTrouves.length > 0) {
    nouvelle = [...nouvelle, { type: 'prestataires', data: prestatairesTrouves, visibles: 1 }];
  }
  return nouvelle;
});
    
  } catch (erreur) {
    console.log('ERREUR:', erreur.message);
  }
};

const appeler = (telephone) => {
  Linking.openURL(`tel:${telephone}`);
};

const ouvrirWhatsApp = (telephone) => {
  Linking.openURL(`https://wa.me/225${telephone}`);
};
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding"> 
      <View style={{ backgroundColor: '#534AB7', padding: 16 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30}}>Chat&Go</Text>
        
      </View>
      <ScrollView 
  style={{ flex: 1, backgroundColor: 'white' }}
  contentContainerStyle={{ padding: 16, gap: 12 }}>
         {messages.map((message, index) => {
  if (message.type === 'prestataires') {
    return (
      <View key={index} style={{ gap: 8 }}>
        {message.data.slice(0, message.visibles).map((prestataire, i) => (
  <TouchableOpacity 
    key={i} 
    style={{ padding: 16, backgroundColor: '#F5F4FB', borderRadius: 12, borderWidth: 1, borderColor: '#E0E0E0' }}
    onPress={() => router.push({
      pathname: '/fiche-prestataire',
      params: { nom: prestataire.nom, note: prestataire.note, quartier: prestataire.quartier, distance: prestataire.distance, telephone: prestataire.telephone }
    })}
  >
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{prestataire.nom}</Text>
      <Text style={{ color: '#F5A623' }}>⭐ {prestataire.note}</Text>
    </View>
    <Text style={{ color: '#666', marginTop: 4 }}>📍 {prestataire.quartier} · {prestataire.distance}</Text>
    <Text style={{ marginTop: 8 }}>📞 {prestataire.telephone}</Text>
    <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
      <TouchableOpacity 
        style={{ flex: 1, borderWidth: 1, borderColor: '#25D366', borderRadius: 20, padding: 10, alignItems: 'center' }}
        onPress={() => appeler(prestataire.telephone)}
      >
        <Text style={{ color: '#25D366', fontWeight: 'bold' }}>📞 Appeler</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{ flex: 1, backgroundColor: '#25D366', borderRadius: 20, padding: 10, alignItems: 'center' }}
        onPress={() => ouvrirWhatsApp(prestataire.telephone)}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>WhatsApp</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
))}

{message.visibles < message.data.length && (
  <TouchableOpacity
    style={{ padding: 12, alignItems: 'center' }}
    onPress={() => {
      setMessages(prev => prev.map((m, idx) => 
        idx === index ? { ...m, visibles: m.visibles + 1 } : m
      ));
    }}
  >
    <Text style={{ color: '#534AB7', fontWeight: 'bold' }}>Voir un autre prestataire</Text>
  </TouchableOpacity>
)}
      </View>
    );
  }

  return (
    <View 
       key={index} 
       style={{ 
       backgroundColor: message.expediteur === 'utilisateur' ? '#534AB7' : '#E0E0E0',
       alignSelf: message.expediteur === 'utilisateur' ? 'flex-end' : 'flex-start',
       borderRadius: 20, 
       padding: 12, 
       maxWidth: '75%' }}>
      <Text style={{ color: message.expediteur === 'utilisateur' ? 'white' : 'black' }}>
         {message.texte}
      </Text>
    </View>
  );
})}

</ScrollView>
      <View style={{ backgroundColor: '#FFFFFF', padding: 20, borderTopWidth: 1, borderTopColor: '#E0E0E0' }}>
     


             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <TextInput 
                   placeholder="Tapez votre message..."
                   placeholderTextColor="#7F77DD"
                   value={texteSaisi}
                   onChangeText={setTexteSaisi}
                style={{ backgroundColor: '#F5F4FB', borderWidth: 1, borderColor: '#7F77DD', borderRadius: 20, padding: 12, flex: 1  }} /> 
                <TouchableOpacity 
                   style={{ backgroundColor: '#D85A30', width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}
                   onPress={envoyerMessage}
>
                  <Ionicons name="send" size={20} color="white" />
                </TouchableOpacity>
            </View>
       </View>
    </KeyboardAvoidingView>
  );
}