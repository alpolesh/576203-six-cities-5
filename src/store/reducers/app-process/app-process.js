import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  city: `Amsterdam`,
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    default:
      return state;
  }
};
export {appProcess};
