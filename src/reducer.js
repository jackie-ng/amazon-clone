export const initialState = {
  basket: [],
  user: null
}


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TOO_BASKET':
      //logic foradding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item]
       }
    case 'REMOVE_FROM_BASKET':
      //logic for removig item from basket
      return { state }
    default:
      return state;
  }
}

export default reducer;
