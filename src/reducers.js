import { ADD_TASK } from './actions';

const initialState = { list: ['первое', 'второе'] };
export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      const list = [...state.list, action.payload];
      return { ...state, list };
      // return Object.assign({}, state, { list });
    }
    default:
      return state;
  }
}
