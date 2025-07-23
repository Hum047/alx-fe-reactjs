import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Alice", age: "25", bio: "Loves hiking and photography" };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <UserProfile />
        <MainContent />
        <Counter />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
