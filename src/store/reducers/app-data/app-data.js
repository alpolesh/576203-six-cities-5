import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.LOAD_HOTELS:
      return extend(state, {
        hotels: action.payload
      });
    default:
      return state;
  }
};

export {appData};
