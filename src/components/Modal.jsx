import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ModalContainer } from "./styledComponents/Modal";
import { ModalImages } from "./styledComponents/Modal";

export class ModalImage extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, onRequestClose, image } = this.props;

    return (
      <ModalContainer
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Modal Image"
        onClick={this.handleClick}
        ref={(node) => (this.modalOverlay = node)}
      >
        <ModalImages src={image.largeImageURL} alt={image.tags} />
      </ModalContainer>
    );
  }
}

ModalImage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired
};