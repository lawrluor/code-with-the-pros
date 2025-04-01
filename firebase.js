// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, setUserProperties } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr8AZJeFXtOxVn128YEm3Cp-LctKNLkIk",
  authDomain: "codewiththepros.firebaseapp.com",
  projectId: "codewiththepros",
  storageBucket: "codewiththepros.firebasestorage.app",
  messagingSenderId: "289880295481",
  appId: "1:289880295481:web:6098982e8474ae96f625e8",
  measurementId: "G-T3YNW9SWS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Helper function to track page views
export const trackPageView = (pageName) => {
  logEvent(analytics, 'page_view', {
    page_name: pageName,
    page_location: window.location.href
  });
};

// Helper function to track user interactions
export const trackEvent = (eventName, eventParams = {}) => {
  logEvent(analytics, eventName, eventParams);
};

// Helper function to set user properties
export const setAnalyticsUserProperties = (properties) => {
  setUserProperties(analytics, properties);
};

export default analytics;