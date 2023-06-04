import React, { Component } from "react";
import { Vortex } from "react-loader-spinner";
import PropTypes from 'prop-types';

export class Load extends Component {
  render() {
    const { onLoader } = this.props;
    const { loadingMore } = this.props; 
  
    return (
      <div>
        {onLoader && onLoader(
          loadingMore ? ( 
            <Vortex
              color="#00BFFF"
              height={100}
              width={100}
            />
          ) : null
        )}
      </div>
    );
  }
}  

Load.propTypes = {
  onLoader: PropTypes.func.isRequired,
  loadingMore: PropTypes.bool.isRequired
};