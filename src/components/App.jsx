import React, { Component } from 'react';
import { Searcher } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { searchImages } from './api/SearchImages';
import { ButtonLoadMore } from './Button';
import { Load } from './Loader';
import { Modal } from './Modal';
export class App extends Component {
  state = {
    images: [],
    loading: true,
    error: null,
    imageName: '',
    pageNumber: 1,
    loadingMore: false,
    showModal: false,
    selectedImage: null,
  };

  async componentDidMount() {
    this.setState({ loading: false });
  }

  handleChangeImageName = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ imageName: value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { imageName, pageNumber } = this.state;

    console.log(imageName);

    await searchImages(imageName, this.setState.bind(this), pageNumber, true);
  };

  LoadMorePics = async e => {
    e.preventDefault();
    const { imageName, pageNumber } = this.state;
    const nextPageNumber = pageNumber + 1;
  
    this.setState({ loadingMore: true });
  
    await searchImages(imageName, this.setState.bind(this), nextPageNumber, false);
  
    this.setState(prevState => ({
      loadingMore: false,
      pageNumber: nextPageNumber
    }));
  };
  

  loader = spinner => {
    const { loading, error } = this.state;

    if (loading) {
      return spinner;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return null;
  };
  handleImageClick = image => {
    this.setState({ selectedImage: image, showModal: true });
    document.body.style.overflow = 'hidden';
  };

  handleModalClose = () => {
    this.setState({ selectedImage: null, showModal: false });
    document.body.style.overflow = 'auto';
  };

  render() {
    const { images, imageName, showModal, selectedImage } = this.state;
    return (
      <div>
        <Searcher
          imageName={imageName}
          onChangeImageName={this.handleChangeImageName}
          onSubmit={this.onSubmit}
        />

        <ImageGallery images={images} onItemClick={this.handleImageClick} />

        <ButtonLoadMore onLoadPics={this.LoadMorePics} />

        <Load onLoader={this.loader} loadingMore={this.state.loadingMore} />
        {showModal && (
          <Modal image={selectedImage} onRequestClose={this.handleModalClose} />
        )}
      </div>
    );
  }
}