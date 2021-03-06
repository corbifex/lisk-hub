import actionTypes from '../../constants/actions';

const transaction = (state = [], action) => {
  switch (action.type) {
    case actionTypes.transactionLoaded:
      return { success: action.data.success, ...action.data.transaction };
    case actionTypes.transactionLoadFailed:
      return action.data.error;
    default:
      return state;
  }
};

export default transaction;
