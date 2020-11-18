import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  hotels: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return extend(state, {
        hotels: action.payload
      });
    default:
      return state;
  }
};

export {appData};
