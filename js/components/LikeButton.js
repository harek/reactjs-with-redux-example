import React, { PropTypes }  from 'react';

const LikeButton = ({likes, onLikeClick}) => (
    <div>
      {likes}
      <button onClick={() => onLikeClick()}>{'+1'}</button>
    </div>
)

LikeButton.propTypes = {
  likes: PropTypes.number.isRequired,
  onLikeClick: PropTypes.func.isRequired
}

module.exports = LikeButton
