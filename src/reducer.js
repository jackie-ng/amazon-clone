export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

export const initialState = {
  basket: [{
    id: "3",
    title: "My Evil Mother: A Short Story",
    price: 11.96,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41HBwv6A1ML.jpg"
  }],
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
      //logic for removing item from basket

      //1. Clone the basket
      let newBasket = [...state.basket];

      //2. Check to see if the product exists
      const index = state.basket.findIndex((basketItem => basketItem.id === action.id));

      if (index >= 0) {
        // item exists in basket, remove it.apply..
        newBasket.splice(index, 1)
      } else {
        console.warn(`Can't remove product (id: ${action.id})`)
      }

      return {
        ...state,
        basket: newBasket /*return new state*/
      }
    default:
      return state;
  }
}

export default reducer;
