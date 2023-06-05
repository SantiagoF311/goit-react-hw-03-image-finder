import axios from 'axios';

export const searchImages = async (searchTerm, setState, pageNumber, replace = true) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        q: searchTerm,
        page: pageNumber,
        key: '36787252-5c3b11e3b9a6e8386f9bae3e3', 
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 20
      }
    });
    const images = response.data.hits;
    if (replace) {
      setState({ images }); 
    } else {
      setState(prevState => ({ images: prevState.images.concat(images) })); 
    }
    return images;
  } catch (error) {
    console.error(error);
  }
};
