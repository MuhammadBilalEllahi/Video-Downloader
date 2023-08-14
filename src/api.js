// api.js
import axios from 'axios';

const fetchTikTokData = async (url) => {
    const options = {
        method: 'GET',
        url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
        params: {
            url: url,
            hd: '1'
        },
        headers: {
            'X-RapidAPI-Key': 'YOUR API KEY HERE', <UPDATE THIS (README)
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        alert("E1"+response);
        alert("E2"+options);
        return response.data;
    } catch (error) {
        console.error("Error Fetching Data:",error);
        throw error;
    }
};

export default fetchTikTokData;
