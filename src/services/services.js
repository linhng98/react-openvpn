import axios from 'axios';

function verify(username) {
  return axios
    .post("http://192.168.121.226:8080/check_deny", { "username": username })
    .then((res) => {
      return res.data
    })
}

export const verifyService = {
  verify,
}