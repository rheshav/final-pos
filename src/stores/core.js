import update from "immutability-helper";

import { store, slug } from "./index";

function core(
  state = {
    Message: "",
    MessageTitle: "",
    MessageTag: "",
    MessageImage: null,
    MessagePayload: {},
    Validation: {},
    Input: {},
    Parameter: {},
    Filter: {},
    Modal: {},
    OnConfirm: null,
    TextConfirm: "",
  },
  action
) {
  let { key, value } = action.payload || {};
  let new_selected = {};
  let newval = {};
  let is_object = false;
  let v = null;
  let res = [];
  let m = [];

  key = slug(String(key), "_");

  switch (action.type) {
    case "SET_MULTI_FILTER":
      newval = {
        ...state.Filter,
        ...action.payload,
      };
      return update(state, {
        Filter: {
          $set: newval,
        },
      });
      break;
    case "SET_FILTER":
      try {
        res = key.split("[");
        v = state.Filter[res[0]];
        if (v) {
          is_object = true;
        }
      } catch (e) {}

      try {
        m = key.match(/\[(\S+)\]/);

        if (is_object) {
          return update(state, {
            Filter: {
              [res[0]]: {
                [String(m[1])]: {
                  $set: value,
                },
              },
            },
          });
        } else {
          v = {
            [String(m[1])]: value,
          };
          return update(state, {
            Filter: {
              [res[0]]: {
                $set: v,
              },
            },
          });
        }
      } catch (e) {
        return update(state, {
          Filter: {
            [key]: {
              $set: value,
            },
          },
        });
      }
      break;

    case "SET_MULTI_PARAMETER":
      newval = {
        ...state.Parameter,
        ...action.payload,
      };
      return update(state, {
        Parameter: {
          $set: newval,
        },
      });
      break;

    case "SET_PARAMETER":
      is_object = false;
      try {
        res = key.split("[");
        v = state.Parameter[res[0]];
        if (v) {
          is_object = true;
        }
      } catch (e) {}

      try {
        m = key.match(/\[(\S+)\]/);

        if (is_object) {
          return update(state, {
            Parameter: {
              [res[0]]: {
                [String(m[1])]: {
                  $set: value,
                },
              },
            },
          });
        } else {
          v = {
            [String(m[1])]: value,
          };
          return update(state, {
            Parameter: {
              [res[0]]: {
                $set: v,
              },
            },
          });
        }
      } catch (e) {
        return update(state, {
          Parameter: {
            [key]: {
              $set: value,
            },
          },
        });
      }
      break;
    case "SET_MULTI_INPUT":
      newval = {
        ...state.Input,
        ...action.payload,
      };
      return update(state, {
        Input: {
          $set: newval,
        },
      });
      break;
    case "SET_INPUT":
      is_object = false;
      v = {};
      try {
        res = key.split("[");
        v = state.Input[res[0]];

        if (v) {
          is_object = true;
        }
      } catch (e) {}

      try {
        m = key.match(/\[(\S+)\]/);
        if (is_object) {
          return update(state, {
            Input: {
              [res[0]]: {
                [String(m[1])]: {
                  $set: value,
                },
              },
            },
          });
        } else {
          v = {
            [String(m[1])]: value,
          };
          return update(state, {
            Input: {
              [res[0]]: {
                $set: v,
              },
            },
          });
        }
      } catch (e) {
        return update(state, {
          Input: {
            [key]: {
              $set: value,
            },
          },
        });
      }
      break;
    case "SET_MESSAGE":
      return update(state, {
        Message: {
          $set: action.payload,
        },
      });
    case "SET_MESSAGE_TITLE":
      return update(state, {
        MessageTitle: {
          $set: action.payload,
        },
      });
    case "SET_MESSAGE_TAG":
      return update(state, {
        MessageTag: {
          $set: action.payload,
        },
      });
    case "SET_MESSAGE_PAYLOAD":
      return update(state, {
        MessagePayload: {
          $set: action.payload,
        },
      });
    case "SET_MODAL":
      return update(state, {
        Modal: {
          [key]: {
            $set: value,
          },
        },
      });

    case "RESET_VALIDATION":
      return update(state, {
        Loading: {
          $set: false,
        },
        Validation: {
          $set: {},
        },
      });
    case "RESET_INPUT":
      return update(state, {
        Input: {
          $set: {},
        },
      });

    case "RESET_PARAMETER":
      return update(state, {
        Parameter: {
          $set: {},
        },
      });
      break;
    case "RESET_FILTER":
      return update(state, {
        Filter: {
          $set: {},
        },
      });
      break;

    case "SET_VALIDATION":
      return update(state, {
        Validation: {
          $set: action.payload,
        },
      });

    case "SET_ON_CONFIRM":
      return update(state, {
        OnConfirm: {
          $set: action.payload,
        },
      });

    case "SET_MESSAGE_IMAGE":
      return update(state, {
        MessageImage: {
          $set: action.payload,
        },
      });

    case "SET_TEXT_CONFIRM":
      return update(state, {
        TextConfirm: {
          $set: action.payload,
        },
      });
    default:
      return state || null;
  }
}
export { core };
