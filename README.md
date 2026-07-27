 Chat&Go 💬

Application mobile de commerce conversationnel qui simplifie la recherche de services locaux. Grâce à une interface familière de messagerie et un agent IA intégré, l'utilisateur exprime son besoin en langage naturel et est instantanément mis en relation avec le bon prestataire via un bouton d'appel ou une redirection WhatsApp.

Fonctionnalités

- Authentification réelle (création de compte / connexion) avec Firebase Auth
- Parcours d'onboarding en 3 écrans
- Interface de chat façon WhatsApp
- Agent IA (DeepSeek) qui analyse la demande de l'utilisateur en langage naturel
- Détection automatique du type de service recherché : restauration, dépannage, ou transport
- Affichage progressif des prestataires correspondants (nom, note, localisation, distance)
- Mise en relation directe via appel téléphonique ou WhatsApp
- Fiche prestataire détaillée
- Inscription des prestataires eux-mêmes dans la base de données
- Navigation par onglets (Chats / Historique / Profil)

 Stack technique

- **React Native** + **Expo** (Expo Router)
- **DeepSeek API** pour l'agent IA
- **Firebase Firestore** pour la base de données des prestataires
- **Firebase Authentication** pour la gestion des comptes
- **TypeScript**

Installation

bash
npm install


Créer un fichier \`.env\` à la racine avec :

EXPO_PUBLIC_API_KEY=votre_cle_api_deepseek


Créer un fichier \`firebaseConfig.js\` à la racine avec votre configuration Firebase.

Lancer le projet :
bash
npx expo start


Architecture

L'application suit un flux simple : l'utilisateur s'authentifie, décrit son besoin dans le chat, l'agent IA (DeepSeek) analyse le message et détermine la catégorie de service recherché, puis l'application interroge Firestore pour trouver les prestataires correspondants et les affiche progressivement dans la conversation.

 Auteur

Kibekoun Michaela
