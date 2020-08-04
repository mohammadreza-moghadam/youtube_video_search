import React,{useState} from 'react';
import keys from '../keys';

const api = {
  key: keys.API_KEY,
  baseURL: keys.BASE_URL
}

function App() {

  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  }

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = (e) => {
    console.log(e)
  }
}

export default App;