import { actionTypes } from '../actions/verify_user'

const initialState = {
  verifyIng: false,
  verifySuccess: false,
  verifyError: null
}

const verify = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VERIFY_REQUEST: {
      return {
        verifyIng: true,
        verifySuccess: false,
        verifyError: null
      }
    }
    case actionTypes.VERIFY_SUCCESS: {
      return {
        verifyIng: false,
        verifySuccess: true,
        verifyError: null,
        msg: action.payload
      }
    }
    case actionTypes.VERIFY_ERROR: {
      return {
        verifyIng: false,
        verifySuccess: false,
        verifyError: action.payload
      }
    }
    default:
      return state;
  }
}

export default verify