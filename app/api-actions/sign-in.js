import { CALL_API } from 'redux-api-middleware';

const API_ROOT = 'http://localhost:3000'; // Change this

export function login(email,password) {
  return {
    [CALL_API]: {
      endpoint: API_ROOT + '/session/create',
      method: 'POST',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          'data':{
            'email': email,
            'password': password
          }
        }),
      types: [
        "REQUEST",
        //{
        //  type: types.FETCHCOLLECTION_REQUEST,
        //  payload: { collectionId: collectionId }
        //},
        {
          type: "SUCCESS",
          payload: (action, state, res) => {
            const contentType = res.headers.get('Content-Type');
            if (contentType && ~contentType.indexOf('json')) {
              console.log('oi');
              // Just making sure res.json() does not raise an error
              return res.json().then((json) => console.log(json));
            }
          }
        },
        "FAILURE"
      ]
    }
  };
}
