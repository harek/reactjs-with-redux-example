import React, { PropTypes }  from 'react';

const LikeButton = ({likes, onLikeClick, onAddLikeClick}) => (
    <div>
      {likes.map(like => <div key={like.id}>{like.likes} <button onClick={() => onLikeClick(like.id)}>{'+1'}</button></div>)}
      <button onClick={() => onAddLikeClick()}>{'+1'}</button>
    </div>
)

LikeButton.propTypes = {
  likes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onAddLikeClick: PropTypes.func.isRequired,
  onLikeClick: PropTypes.func.isRequired,
}

module.exports = LikeButton
