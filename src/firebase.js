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

// Helper function to track challenge interactions
export const trackChallenge = (action, params = {}) => {
  const currentPath = window.location.pathname;
  const lessonName = currentPath.split('/').pop();

  logEvent(analytics, 'challenge_interaction', {
    action: action,
    lesson_page: lessonName,
    lesson_path: currentPath,
    challenge_number: params.challengeNumber || 'unknown',
    challenge_title: params.challengeTitle || 'unknown',
    challenge_section: params.section || 'unknown',
    timestamp: new Date().toISOString(),
    ...params
  });
};

// Helper function to set user properties
export const setAnalyticsUserProperties = (properties) => {
  // This function sets user properties in Firebase Analytics
  // Properties can include user demographics, preferences, or other attributes
  // These properties help segment users for more targeted analytics
  setUserProperties(analytics, properties);
};

export default analytics;