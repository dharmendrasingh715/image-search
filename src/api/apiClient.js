import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID yY8bIng1N4aCKUgvVqSBn0DMymgLUHOMn8yvNeXaChw"
    }
});