import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; 

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <MainContent />
      
      {/* Add Counter Component Below MainContent */}
      <Counter />
      
      <Footer />
    </div>
  );
}

export default App;
