import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadHotels(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/favorites`)))
);
