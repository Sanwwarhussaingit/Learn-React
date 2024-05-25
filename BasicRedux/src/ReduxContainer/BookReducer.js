import { buy_book } from "./BookType";
const initalState = {
  numberOfBook: 20,
};
const BookReducer = (state = initalState, action) => {
  switch (action.type) {
    
      case buy_book: {
        
      return {
          ...state,
         
        numberOfBook: state.numberOfBook - 1,
      };
    }
    default:
      return state;
  }
};
export default BookReducer;
