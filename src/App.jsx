import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard';
import { useState } from 'react';
function App() {
  const [category ,setCategory]=useState("top");
  const [selectedCountry, setSelectedCountry] = useState('in');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedQuery, setSelectedQuery] = useState('');
  return (
    <>
      <Navbar setSelectedCountry={setSelectedCountry} setSelectedLanguage={setSelectedLanguage} setCategory={setCategory} setSelectedQuery={setSelectedQuery}/>
      <NewsBoard selectedCountry={selectedCountry} selectedLanguage={selectedLanguage} category={category} selectedQuery={selectedQuery}/>
    </>
  )
}

export default App
