importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:"AIzaSyBCXrMZeXXYAVSraGnGXqrgtCNjzTuWAww",authDomain:"apdp-news-90907.firebaseapp.com",databaseURL:"https://apdp-news-90907-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"apdp-news-90907",storageBucket:"apdp-news-90907.firebasestorage.app",messagingSenderId:"517761140105",appId:"1:517761140105:web:00becfb312d63395244d58"});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(p=>{self.registration.showNotification(p.notification.title,{body:p.notification.body,icon:'icon-192.png'});});const firebaseConfig={apiKey:"AIzaSyAALM9F3-QdvB4Expgsq0GUtq0XyrscaP4",authDomain:"apdp-news-ff2eb.firebaseapp.com",databaseURL:"https://apdp-news-90907-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"apdp-news-ff2eb",storageBucket:"apdp-news-ff2eb.firebasestorage.app",messagingSenderId:"130872764078",appId:"1:130872764078:web:0d4de9e277b2537a042f3f"};mportScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:"PASTE_HERE",authDomain:"PASTE_HERE",databaseURL:"PASTE_HERE",projectId:"PASTE_HERE",storageBucket:"PASTE_HERE",messagingSenderId:"PASTE_HERE",appId:"PASTE_HERE"});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(p=>{self.registration.showNotification(p.notification.title,{body:p.notification.body,icon:'icon-192.png'});});
