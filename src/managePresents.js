export function managePresents(state={numberOfPresents: 0}, action) {
  // your code here
  switch (action.type) {
    case 'presents/increase':
      return {numberOfPresents: state.numberOfPresents + 1};
    default:
      return state;
  }
  
}
