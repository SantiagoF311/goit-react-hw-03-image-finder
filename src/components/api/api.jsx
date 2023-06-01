import axios from 'axios';

export const fetchImages = async () => {
    try {
        const response = await axios.get(
            'https://pixabay.com/api/?q=generic&key=36787252-5c3b11e3b9a6e8386f9bae3e3'
        )
        return response.data.hits;
    } catch (error) {
        console.error(error);
        return [];
    }
}