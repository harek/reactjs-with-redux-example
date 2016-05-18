import { connect } from 'react-redux'
import { like } from '../actions/actions'
import LikeButton from '../components/LikeButton'

const mapStateToProps = (state) => {
  return {
    likes: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLikeClick: () => dispatch(like())
  }
}

const VisibleLikeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton)

export default VisibleLikeButton
