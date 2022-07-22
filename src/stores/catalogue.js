import update from "immutability-helper";

import { find, filter, isEmpty } from "lodash";

import { store, slug } from "./index";

function readCatalogue(id) {
  store.dispatch({
    type: "SET_LOADING_CATALOGUE",
    payload: true,
  });

  store.dispatch({
    type: "RESET_VALIDATION",
    payload: null,
  });

  store.dispatch({
    type: "SET_ACTION_CATALOGUE",
    payload: "",
  });

  const currentData = store.getState().catalogue.Data || [];

  const findData = find(currentData, function (o) {
    return o.id == id;
  });

  if (!isEmpty(findData)) {
    store.dispatch({
      type: "READ_CATALOGUE",
      payload: findData,
    });

    store.dispatch({
      type: "SET_ACTION_CATALOGUE",
      payload: "READED_CATALOGUE",
    });
  } else {
    store.dispatch({
      type: "SET_ACTION_CATALOGUE",
      payload: "FAILED_READ_CATALOGUE",
    });

    store.dispatch({
      type: "SET_MESSAGE",
      payload: "Gagal lihat katalog id " + id,
    });
  }

  store.dispatch({
    type: "SET_LOADING_CATALOGUE",
    payload: false,
  });
}

function updateCatalogue(id, input = {}) {
  store.dispatch({
    type: "SET_LOADING_CATALOGUE",
    payload: true,
  });

  store.dispatch({
    type: "RESET_VALIDATION",
    payload: null,
  });

  store.dispatch({
    type: "SET_ACTION_CATALOGUE",
    payload: "",
  });

  let currentData = store.getState().Data || [];

  const filterData = filter(currentData, function (o) {
    return o.id != id;
  });

  currentData = [...currentData, input];

  store.dispatch({
    type: "UPDATED_CATALOGUE",
    payload: input,
  });

  store.dispatch({
    type: "SET_ACTION_CATALOGUE",
    payload: "UPDATED_CATALOGUE",
  });

  store.dispatch({
    type: "SET_LOADING_CATALOGUE",
    payload: false,
  });
}

function createCatalogue(input) {
  store.dispatch({
    type: "SET_LOADING_CATALOGUE",
    payload: true,
  });

  store.dispatch({
    type: "RESET_VALIDATION",
    payload: null,
  });

  store.dispatch({
    type: "SET_ACTION_CATALOGUE",
    payload: "",
  });

  const currentData = store.getState().catalogue.Data || [];

  console.log("currentData", currentData);

  const newInput = { ...input, id: currentData.length + 1 };

  currentData.push(newInput);

  console.log("newInput", newInput);

  console.log("currentData", currentData);

  setTimeout(() => {
    store.dispatch({
      type: "CREATE_CATALOGUE",
      payload: newInput,
    });

    store.dispatch({
      type: "SET_CATALOGUE",
      payload: currentData,
    });

    store.dispatch({
      type: "SET_LOADING_CATALOGUE",
      payload: false,
    });

    store.dispatch({
      type: "SET_ACTION_CATALOGUE",
      payload: "CREATED_CATALOGUE",
    });

    store.dispatch({
      type: "SET_LOADING_CATALOGUE",
      payload: false,
    });
  }, 3000);
}

function deleteCatalogue(id) {
  store.dispatch({
    type: "SET_LOADING_CATALOGUE",
    payload: true,
  });

  store.dispatch({
    type: "RESET_VALIDATION",
    payload: null,
  });

  store.dispatch({
    type: "SET_ACTION_CATALOGUE",
    payload: "",
  });

  const currentData = store.getState().Data || [];

  const findData = find(currentData, function (o) {
    return o.id == id;
  });

  if (!isEmpty(findData)) {
    const filterData = filter(currentData, function (o) {
      return o.id != id;
    });

    if (filterData) {
      store.dispatch({
        type: "DELETE_CATALOGUE",
        payload: findData,
      });

      store.dispatch({
        type: "SET_LOADING_CATALOGUE",
        payload: false,
      });

      store.dispatch({
        type: "SET_ACTION_CATALOGUE",
        payload: "DELETED_CATALOGUE",
      });
    } else {
      store.dispatch({
        type: "SET_ACTION_CATALOGUE",
        payload: "FAILED_READ_CATALOGUE",
      });

      store.dispatch({
        type: "SET_MESSAGE",
        payload: "Gagal hapus katalog id " + id,
      });
    }
  } else {
    store.dispatch({
      type: "SET_MESSAGE",
      payload: "Data tidak ditemukan id " + id,
    });

    store.dispatch({
      type: "SET_ACTION_CATALOGUE",
      payload: "FAILED_READ_CATALOGUE",
    });
  }

  store.dispatch({
    type: "SET_ACTION_CATALOGUE",
    payload: "FAILED_READ_CATALOGUE",
  });

  store.dispatch({
    type: "SET_LOADING_CATALOGUE",
    payload: false,
  });
}

function getCatalogue(type) {
  store.dispatch({
    type: "SET_LOADING_CATALOGUE",
    payload: true,
  });

  store.dispatch({
    type: "RESET_VALIDATION",
    payload: null,
  });

  store.dispatch({
    type: "SET_ACTION_CATALOGUE",
    payload: "",
  });

  console.log("getCatalogue request");

  store.dispatch({
    type: "SET_LOADING_CATALOGUE",
    payload: false,
  });

  store.dispatch({
    type: "SET_ACTION_CATALOGUE",
    payload: "LOADED_CATALOGUE",
  });

  /*

  fetch(
    type === "food"
      ? "https://jsonplaceholder.typicode.com/photos"
      : "https://jsonplaceholder.typicode.com/posts"
  )
    .then((res) => res.json())
    .then(
      (response) => {
        console.log("getCatalogue success", response);
        store.dispatch({
          type: "SET_CATALOGUE",
          payload: response,
        });

        store.dispatch({
          type: "SET_ACTION_CATALOGUE",
          payload: "CATALOGUE",
        });

        store.dispatch({
          type: "SET_LOADING_CATALOGUE",
          payload: false,
        });
      },
      (error) => {
        console.log("getCatalogue error", error.response);

        store.dispatch({
          type: "SET_MESSAGE_TAG",
          payload: "error",
        });

        store.dispatch({
          type: "SET_ACTION_CATALOGUE",
          payload: "FAILED_CATALOGUE",
        });

        if (error.response.status === 400) {
          store.dispatch({
            type: "SET_VALIDATION",
            payload: error.response.data,
          });
        }

        store.dispatch({
          type: "SET_LOADING_CATALOGUE",
          payload: false,
        });
      }
    );

    */
}

function catalogue(
  state = {
    Data: [],
    Created: {},
    Deleted: {},
    Readed: {},
    Loading: false,
    Action: "",
    StatusCode: null,
  },
  action
) {
  switch (action.type) {
    case "SET_STATUS_CODE_CATALOGUE":
      return update(state, {
        StatusCode: {
          $set: action.payload,
        },
      });

    case "SET_LOADING_CATALOGUE":
      return update(state, {
        Loading: {
          $set: action.payload,
        },
      });

    case "SET_ACTION_CATALOGUE":
      return update(state, {
        Action: {
          $set: action.payload,
        },
      });

    case "SET_CATALOGUE":
      return update(state, {
        Data: {
          $set: action.payload,
        },
      });

    case "CREATE_CATALOGUE":
      return update(state, {
        Created: {
          $set: action.payload,
        },
      });

    case "UPDATE_CATALOGUE":
      return update(state, {
        Updated: {
          $set: action.payload,
        },
      });

    case "READ_CATALOGUE":
      return update(state, {
        Readed: {
          $set: action.payload,
        },
      });

    case "DELETE_CATALOGUE":
      return update(state, {
        Deleted: {
          $set: action.payload,
        },
      });

    default:
      return state || null;
  }
}

export {
  catalogue,
  getCatalogue,
  createCatalogue,
  readCatalogue,
  updateCatalogue,
  deleteCatalogue,
};
