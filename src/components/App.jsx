import React, { Component } from "react";
import { fetchImages } from "./api/api";
import { Searcher } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { searchImages } from "./api/SearchImages";
import { ButtonLoadMore } from "./Button";
import { Load } from "./Loader";

export class App extends Component {
  state = {
    images: [],
    loading: true,
    error: null,
    imageName: '',
    pageNumber: 1,
    loadingMore: false,
  }

  async componentDidMount() {
    try {
      const images = await fetchImages();
      this.setState({ images, loading: false });
    } catch (error) {
      this.setState({ error, loading: false })
    }
  }

  handleChangeImageName = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ imageName: value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { imageName } = this.state;

    console.log(imageName);

    await searchImages(imageName, this.setState.bind(this));
  }

  LoadMorePics = async (e) => {
    e.preventDefault();
    const { imageName, pageNumber } = this.state;
    const nextPageNumber = pageNumber + 1;
    
    this.setState({ loadingMore: true });
  
    await searchImages(imageName, this.setState.bind(this), nextPageNumber);
    
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
      loadingMore: false 
    }));
  };

  loader = (spinner) => {
    const { loading, error } = this.state;
  
    if (loading) {
      return spinner;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return null; 
  }
  
  

  render() {
    const { images, imageName } = this.state;
    return (
      <div>
        <Searcher
          imageName={imageName}
          onChangeImageName={this.handleChangeImageName}
          onSubmit={this.onSubmit}
        />

        <ImageGallery
          images={images}
        />

        <ButtonLoadMore
          onLoadPics={this.LoadMorePics}
        />

        <Load
          onLoader={this.loader}
          loadingMore={this.state.loadingMore}
        />
      </div>
    );
  }
}
