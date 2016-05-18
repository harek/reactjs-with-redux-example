import { connect } from 'react-redux'
import { addLike, like } from '../actions/actions'
import LikeButton from '../components/LikeButton'

const mapStateToProps = (state) => {
  return {
    likes: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddLikeClick: () => dispatch(addLike()),
    onLikeClick: (id) => dispatch(like(id))
  }
}

const VisibleLikeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton)

export default VisibleLikeButton
