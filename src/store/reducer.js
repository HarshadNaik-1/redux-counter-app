import * as actionType from "./actions";
const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case actionType.ADD:
      return {
        ...state,
        count: state.count + action.payload.value,
      };
    case actionType.SUBTRACT:
      return {
        ...state,
        count: state.count - action.payload.value,
      };

    default:
      return state;
  }
};

export default reducer;
