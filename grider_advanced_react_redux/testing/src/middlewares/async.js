export default ({ dispatch }) => next => action => {
  // Check the payload for a promise
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(function(response) {
    // get all the properties the action had and add the response
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
}