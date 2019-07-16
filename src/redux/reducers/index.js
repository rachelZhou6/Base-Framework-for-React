
export default (state, action) => {
  switch (action.type) {
    case 'TEST':
      return Object.assign({...state}, { num: state.num + action.num });
    default:
      return state
  }
}
