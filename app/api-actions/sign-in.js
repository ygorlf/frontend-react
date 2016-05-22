import { CALL_API } from 'redux-api-middleware';
const API_ROOT = 'http://localhost:3000'; // Change this

export function login(email,password) {
  return dispatch => {
    dispatch({
    [CALL_API]: {
      endpoint: API_ROOT + '/session/create',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          'data':{
            'email': email,
            'password': password
          }
        }),
      types: [
        "REQUEST_LOGIN",
        {
          type: "SUCCESS_LOGIN",
          payload: (action, state, res) => {
            const contentType = res.headers.get('Content-Type');
            if (contentType && ~contentType.indexOf('json')) {
              res.json().then((json) => {
                let obj = json.data.attributes;
                if (obj.status === "success"){
                  //dispatch autenticar, com jwt
                }else{
                  //dispatch falha de login
                }
              });
            }
          }
        },
        "FAILURE_LOGIN"
      ]
    }
  });
  }
}
