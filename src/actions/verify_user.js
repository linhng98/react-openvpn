import { verifyService } from '../services/services'

export const actionTypes = {
  VERIFY_REQUEST: "VERIFY_REQUEST",
  VERIFY_SUCCESS: "VERIFY_SUCCESS",
  VERIFY_ERROR: "VERIFY_ERROR",
}

function verify(username) {

  function request() {
    return { type: actionTypes.VERIFY_REQUEST }
  }

  function success(res) {
    return { type: actionTypes.VERIFY_SUCCESS, payload: res }
  }

  function error(err) {
    return { type: actionTypes.VERIFY_ERROR, payload: err }
  }

  return function (dispatch) {
    dispatch(request())
    verifyService.verify(username)
      .then(res => { dispatch(success(res)) })
      .catch(err => { dispatch(error(err)) })
  }
}


export const verifyActions = {
  verify
}