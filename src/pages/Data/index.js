import axios from 'axios';


const exchanges = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
    headers: {
        'X-RapidAPI-Key': '631e902c6dmsh8d05b0c07770f0dp1233cdjsn8574c4e9dc26',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    }
};

try{
    const response = await axios.request(exchanges);
    console.log(response.data);
} catch (error) {
    console.error(error);
};