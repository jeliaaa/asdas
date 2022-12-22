import React, {useEffect, useState} from 'react'
import Home from './pages/Home';
import Single from './pages/Single';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Collections from './pages/Collections';
import itemsContext from './contexts/ItemsContext';
import Checkout from './pages/Checkout';


function App() {
  const [checkedItems, setCheckedItems] = useState([])
  useEffect(() => {
    console.log(checkedItems)
  }, [checkedItems])
  return (
    <>
      <itemsContext.Provider value={{checkedItems, setCheckedItems}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
        <Footer />
      </itemsContext.Provider>
    </>
  );
}

export default App;
