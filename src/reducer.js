export const initialState = {
  basket: [],

}


function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TOO_BASKET':
      //logic foradding item to basket
      break;
    case 'REMOVE_FROM_BASKET':
      //logic for removig item from basket
      break;
    default:
      return state;
  }
}

export default reducer;
