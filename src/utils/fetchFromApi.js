import axios from "axios";
const URL = 'https://youtube-v3-alternative.p.rapidapi.com';

const options = {
    headers: {
        'X-RapidAPI-Key': 'eb35268998msh039488beb4b7b47p17e85fjsnb3a0393a02d2',
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
};

export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${URL}/${url}`, options);
    return data;
}