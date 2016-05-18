export const addLike = () => {
  return {
    type: 'ADD_LIKE'
  }
}

export const like = (id) => {
  return {
    type: 'LIKE',
    id: id
  }
}
