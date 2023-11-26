import axios from "axios"
const baseUrl = 'https://tools.betabotz.org'

async function spotifydl(url) {
  try {
    const { data } = await axios.get(`${baseUrl}/tools/spotifydl?url=${url}`, {
      headers: {
        'accept': 'application/json',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    return 'Internal Server Error!';
  }
}
export default spotifydl;
