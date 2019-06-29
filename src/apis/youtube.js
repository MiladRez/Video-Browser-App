import axios from 'axios';

const KEY = "AIzaSyBocS6DQHpd-1yS7TlP78aizRhcRUWNq7M";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    } 
});