import React, { Component } from 'react';
import { Overlay, ModalDiv } from './styledComponents/Modal';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onRequestClose();
    }
  };

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onRequestClose();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <Overlay onClick={this.handleClick}>
        <ModalDiv>
          <img src={image.largeImageURL} alt={image.tags} />
        </ModalDiv>
      </Overlay>
    );
  }
}
