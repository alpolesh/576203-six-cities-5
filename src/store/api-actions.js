import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadHotels(data)))
);
