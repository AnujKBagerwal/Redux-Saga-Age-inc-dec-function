import { AGE_DOWN_ASYNC, AGE_UP_ASYNC } from './action';
const initialState = {
  age: 20,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AGE_UP_ASYNC:
      return {
        ...state,
        age: state.age + payload,
      };

    case AGE_DOWN_ASYNC: {
      return {
        ...state,
        age: state.age - payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
