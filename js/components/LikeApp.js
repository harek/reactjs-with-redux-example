import React, { Component } from 'react';
import VisibleLikeButton from '../containers/VisibleLikeButton'
class LikeApp extends Component {
  render() {
    return <div>
      <VisibleLikeButton/>
      <hr/>
      <VisibleLikeButton/>
    </div>;
  }
}

export default LikeApp
