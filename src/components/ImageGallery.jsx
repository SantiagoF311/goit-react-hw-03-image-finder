import React, { Component } from "react";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { ImageGalleryStyled } from "./styledComponents/ImageGallery";
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
        
        <ImageGalleryStyled className="gallery">
            {images.map(image => (
                <ImageGalleryItem key={image.id} image={image}/>
            ))}
        </ImageGalleryStyled>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired
};

