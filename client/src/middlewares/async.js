function async(dispatch) {
  return next => async action => {
    // check if action is asynchronous
    if (action.payload && action.payload.then) {
      const res = await action.payload;
      const newAction = { ...action, payload: res };
      dispatch(newAction);
    } else {
      next(action);
    }
  };
}
