// import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Storedetail from './Components/Storedetail';
import { StoreDataProvider } from './context/StoreDataContext';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar />
      <StoreDataProvider>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/Store" element={<Storedetail />} />
        </Routes>
      </StoreDataProvider>
    </div>
  );
}

export default App;
