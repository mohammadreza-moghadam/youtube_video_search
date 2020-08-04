import React,{useState} from 'react';
import keys from '../keys';

const api = {
  key: keys.API_KEY,
  baseURL: keys.BASE_URL
}

funtion App() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  }
}