import axios from 'axios';

export const searchImages = async (searchTerm, setState, perPage = 20) => {
    try {
      const response = await axios.get('https://pixabay.com/api/', {
        params: {
          q: searchTerm,
          page: 1,
          key: '36787252-5c3b11e3b9a6e8386f9bae3e3', 
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: perPage
        }
      });
      const images = response.data.hits;
      setState({ images }); 
      return images
    } catch (error) {
      console.error(error);
    }
  };