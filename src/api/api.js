// I was thinking of having all of them in a separent folder
// one for axios create and then all of the other ones

import axios from 'axios';

export const coinRankingAPI = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'cca8a610e8msh3412e54e4496bf1p1c57f2jsna0d7515e9c32',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
});