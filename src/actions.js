export const ADD_TASK = Symbol();

export default function addTask(item) {
  return ({
    type: ADD_TASK,
    payload: item,
  });
}
