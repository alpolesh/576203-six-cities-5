import {extend} from "../utils";
import {ActionType} from "./action";

const initialState = {
  city: `Amsterdam`,
  offers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
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
export {reducer};
