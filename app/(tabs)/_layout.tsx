import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#534AB7' }}>
      <Tabs.Screen 
        name="accueil" 
        options={{ 
          title: 'chats',
          tabBarIcon: ({ color, size }) => <Ionicons name="chatbubbles-outline" size={size} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="historique" 
        options={{ 
          title: 'Historique',
          tabBarIcon: ({ color, size }) => <Ionicons name="time-outline" size={size} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="profil" 
        options={{ 
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />
        }} 
      />
    </Tabs>
  );
}