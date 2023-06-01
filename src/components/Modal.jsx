import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ModalContainer } from "./styledComponents/Modal";
import { ModalImages } from "./styledComponents/Modal";

export class ModalImage extends Component {
  render() {
    const { isOpen, onRequestClose, image } = this.props;

    return (
      <ModalContainer
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Modal Image"
      >
        <ModalImages src={image.largeImageURL} alt={image.alt} />
      </ModalContainer>
    );
  }
}

ModalImage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
};