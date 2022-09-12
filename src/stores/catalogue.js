import update from 'immutability-helper';

import { find, filter, isEmpty } from 'lodash';

import { store, slug } from './index';

function readCatalogue(id) {
  store.dispatch({
    type: 'SET_LOADING_CATALOGUE',
    payload: true,
  });

  store.dispatch({
    type: 'RESET_VALIDATION',
    payload: null,
  });

  store.dispatch({
    type: 'SET_ACTION_CATALOGUE',
    payload: '',
  });

  let resStatus = 0;
  fetch('http://localhost:4000/catalogue/detail/' + id)
    .then(function (response) {
      resStatus = response.status;
      return response.json();
    })
    .then(
      (response) => {
        console.log('resStatus', resStatus);
        switch (resStatus) {
          case 200:
            console.log('getDetailCatalogue success', response.data);
            store.dispatch({
              type: 'READ_CATALOGUE',
              payload: response.data,
            });

            store.dispatch({
              type: 'SET_ACTION_CATALOGUE',
              payload: 'READED_CATALOGUE',
            });
            break;
        }
        store.dispatch({
          type: 'SET_LOADING_CATALOGUE',
          payload: false,
        });
      },
      (error) => {
        console.log('getDetailCatalogue error', error);

        store.dispatch({
          type: 'SET_MESSAGE_TAG',
          payload: 'error',
        });

        store.dispatch({
          type: 'SET_ACTION_CATALOGUE',
          payload: 'FAILED_READ_CATALOGUE',
        });

        store.dispatch({
          type: 'SET_LOADING_CATALOGUE',
          payload: false,
        });
      }
    );
}

function updateCatalogue(id, input = {}) {
  store.dispatch({
    type: 'SET_LOADING_CATALOGUE',
    payload: true,
  });

  store.dispatch({
    type: 'RESET_VALIDATION',
    payload: null,
  });

  store.dispatch({
    type: 'SET_ACTION_CATALOGUE',
    payload: '',
  });

  let resStatus = 0;
  fetch('http://localhost:4000/catalogue/' + id, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })
    .then(function (response) {
      resStatus = response.status;
      return response.json();
    })
    .then(
      (response) => {
        console.log('resStatus', resStatus);
        switch (resStatus) {
          case 201:
            console.log('putCatalogue success', response.data);
            store.dispatch({
              type: 'UPDATE_CATALOGUE',
              payload: input,
            });

            store.dispatch({
              type: 'SET_ACTION_CATALOGUE',
              payload: 'UPDATED_CATALOGUE',
            });
            break;
          case 400:
            console.log('putCatalogue error', response.data);
            store.dispatch({
              type: 'SET_MESSAGE_TAG',
              payload: 'error',
            });

            store.dispatch({
              type: 'SET_ACTION_CATALOGUE',
              payload: 'FAILED_UPDATE_CATALOGUE',
            });

            store.dispatch({
              type: 'SET_VALIDATION',
              payload: response.data,
            });

            break;
        }
        store.dispatch({
          type: 'SET_LOADING_CATALOGUE',
          payload: false,
        });
      },
      (error) => {
        console.log('putCatalogue error', error);

        store.dispatch({
          type: 'SET_MESSAGE_TAG',
          payload: 'error',
        });

        store.dispatch({
          type: 'SET_ACTION_CATALOGUE',
          payload: 'FAILED_UPDATE_CATALOGUE',
        });
        store.dispatch({
          type: 'SET_LOADING_CATALOGUE',
          payload: false,
        });
      }
    );
}

function createCatalogue(input, type) {
  store.dispatch({
    type: 'SET_LOADING_CATALOGUE',
    payload: true,
  });

  store.dispatch({
    type: 'RESET_VALIDATION',
    payload: null,
  });

  store.dispatch({
    type: 'SET_ACTION_CATALOGUE',
    payload: '',
  });

  let resStatus = 0;
  fetch('http://localhost:4000/catalogue/' + type, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })
    .then(function (response) {
      resStatus = response.status;
      return response.json();
    })
    .then(
      (response) => {
        console.log('resStatus', resStatus);
        switch (resStatus) {
          case 201:
            console.log('postCatalogue success', response.data);
            store.dispatch({
              type: 'CREATE_CATALOGUE',
              payload: input,
            });

            store.dispatch({
              type: 'SET_ACTION_CATALOGUE',
              payload: 'CREATED_CATALOGUE',
            });
            break;
          case 400:
            console.log('postCatalogue error', response.data);
            store.dispatch({
              type: 'SET_MESSAGE_TAG',
              payload: 'error',
            });

            store.dispatch({
              type: 'SET_ACTION_CATALOGUE',
              payload: 'FAILED_CREATE_CATALOGUE',
            });

            store.dispatch({
              type: 'SET_VALIDATION',
              payload: response.data,
            });

            break;
        }
        store.dispatch({
          type: 'SET_LOADING_CATALOGUE',
          payload: false,
        });
      },
      (error) => {
        console.log('postCatalogue error', error);

        store.dispatch({
          type: 'SET_MESSAGE_TAG',
          payload: 'error',
        });

        store.dispatch({
          type: 'SET_ACTION_CATALOGUE',
          payload: 'FAILED_CREATE_CATALOGUE',
        });

        if (error.response) {
          store.dispatch({
            type: 'SET_VALIDATION',
            payload: error.response,
          });
        }

        store.dispatch({
          type: 'SET_LOADING_CATALOGUE',
          payload: false,
        });
      }
    );
}

function deleteCatalogue(id) {
  store.dispatch({
    type: 'SET_LOADING_CATALOGUE',
    payload: true,
  });

  store.dispatch({
    type: 'RESET_VALIDATION',
    payload: null,
  });

  store.dispatch({
    type: 'SET_ACTION_CATALOGUE',
    payload: '',
  });

  if (window.confirm('Apakah anda yakin ingin menghapus data?')) {
    const currentData = store.getState().catalogue.Data || [];

    const findData = find(currentData, function (o) {
      return o._id == id;
    });

    if (!isEmpty(findData)) {
      let resStatus = 0;
      fetch('http://localhost:4000/catalogue/' + id, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(function (response) {
          resStatus = response.status;
          return response.json();
        })
        .then(
          (response) => {
            console.log('resStatus', resStatus);
            switch (resStatus) {
              case 201:
                console.log('postCatalogue success', response.data);
                store.dispatch({
                  type: 'DELETE_CATALOGUE',
                  payload: response.data,
                });

                store.dispatch({
                  type: 'SET_ACTION_CATALOGUE',
                  payload: 'DELETED_CATALOGUE',
                });

                let trashData = store.getState().catalogue.Trash || [];

                store.dispatch({
                  type: 'SET_TRASH_CATALOGUE',
                  payload: [...trashData, findData],
                });
                break;
              case 500:
                console.log('postCatalogue error', response.data);
                store.dispatch({
                  type: 'SET_MESSAGE_TAG',
                  payload: 'error',
                });

                store.dispatch({
                  type: 'SET_ACTION_CATALOGUE',
                  payload: 'FAILED_DELETE_CATALOGUE',
                });

                store.dispatch({
                  type: 'SET_MESSAGE',
                  payload: response.message,
                });

                break;
            }
            store.dispatch({
              type: 'SET_LOADING_CATALOGUE',
              payload: false,
            });
          },
          (error) => {
            console.log('postCatalogue error', error);

            store.dispatch({
              type: 'SET_MESSAGE_TAG',
              payload: 'error',
            });

            store.dispatch({
              type: 'SET_ACTION_CATALOGUE',
              payload: 'FAILED_DELETE_CATALOGUE',
            });

            if (error.response) {
              store.dispatch({
                type: 'SET_VALIDATION',
                payload: error.response,
              });
            }

            store.dispatch({
              type: 'SET_LOADING_CATALOGUE',
              payload: false,
            });
          }
        );
    }
  }
}

function getCatalogue(type) {
  store.dispatch({
    type: 'SET_LOADING_CATALOGUE',
    payload: true,
  });

  store.dispatch({
    type: 'RESET_VALIDATION',
    payload: null,
  });

  store.dispatch({
    type: 'SET_ACTION_CATALOGUE',
    payload: '',
  });

  console.log('getCatalogue request');

  store.dispatch({
    type: 'SET_ACTION_CATALOGUE',
    payload: 'LOADED_CATALOGUE',
  });

  fetch('http://localhost:4000/catalogue/' + type)
    .then((res) => res.json())
    .then(
      (response) => {
        console.log('getCatalogue success', response.data);
        store.dispatch({
          type: 'SET_CATALOGUE',
          payload: response.data,
        });

        store.dispatch({
          type: 'SET_ACTION_CATALOGUE',
          payload: 'CATALOGUE',
        });

        store.dispatch({
          type: 'SET_LOADING_CATALOGUE',
          payload: false,
        });
      },
      (error) => {
        console.log('getCatalogue error', error.response);

        store.dispatch({
          type: 'SET_MESSAGE_TAG',
          payload: 'error',
        });

        store.dispatch({
          type: 'SET_ACTION_CATALOGUE',
          payload: 'FAILED_CATALOGUE',
        });

        if (error.response) {
          store.dispatch({
            type: 'SET_VALIDATION',
            payload: error.response,
          });
        }

        store.dispatch({
          type: 'SET_LOADING_CATALOGUE',
          payload: false,
        });
      }
    );
}

function catalogue(
  state = {
    Data: [],
    Trash: [],
    Created: {},
    Deleted: {},
    Updated: {},
    Readed: {},
    Loading: false,
    Action: '',
    StatusCode: null,
  },
  action
) {
  switch (action.type) {
    case 'SET_STATUS_CODE_CATALOGUE':
      return update(state, {
        StatusCode: {
          $set: action.payload,
        },
      });

    case 'SET_LOADING_CATALOGUE':
      return update(state, {
        Loading: {
          $set: action.payload,
        },
      });

    case 'SET_ACTION_CATALOGUE':
      return update(state, {
        Action: {
          $set: action.payload,
        },
      });

    case 'SET_CATALOGUE':
      return update(state, {
        Data: {
          $set: action.payload,
        },
      });

    case 'SET_TRASH_CATALOGUE':
      return update(state, {
        Trash: {
          $set: action.payload,
        },
      });

    case 'CREATE_CATALOGUE':
      return update(state, {
        Created: {
          $set: action.payload,
        },
      });

    case 'UPDATE_CATALOGUE':
      return update(state, {
        Updated: {
          $set: action.payload,
        },
      });

    case 'READ_CATALOGUE':
      return update(state, {
        Readed: {
          $set: action.payload,
        },
      });

    case 'DELETE_CATALOGUE':
      return update(state, {
        Deleted: {
          $set: action.payload,
        },
      });

    default:
      return state || null;
  }
}

export { catalogue, getCatalogue, createCatalogue, readCatalogue, updateCatalogue, deleteCatalogue };
