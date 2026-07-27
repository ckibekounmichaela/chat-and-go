const { initializeApp } = require('firebase-admin/app');
const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./firebase-key.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const prestataires = [
  { nom: "Plomberie Sarah", categorie: "depannage", note: 4, quartier: "Cocody, 2 Plateaux", distance: "10km", telephone: "0708091011", ouvert: true },
  { nom: "Pizza Chez Tino", categorie: "restauration", note: 4.8, quartier: "Cocody, Angré", distance: "2km", telephone: "0708091011", ouvert: true },
  { nom: "Chez Aya", categorie: "restauration", note: 4.5, quartier: "Cocody, 2 Plateaux", distance: "3km", telephone: "0708091012", ouvert: true },
  { nom: "Taxi Rapide CI", categorie: "transport", note: 4.6, quartier: "Cocody", distance: "1km", telephone: "0708091013", ouvert: true }
];

async function ajouterPrestataires() {
  for (const prestataire of prestataires) {
    await db.collection('prestataires').add(prestataire);
    console.log('Ajouté:', prestataire.nom);
  }
  console.log('Terminé !');
  process.exit(0);
}

ajouterPrestataires();