const like = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      return [...state, {id: state.length + 1, likes: 0}];
    case 'LIKE':
      return state.map(like => {
        if (like.id != action.id) {
          return like;
        }

        return {id: action.id, likes: like.likes + 1}
      });
    default:
      return state;
  }
}

export default like
