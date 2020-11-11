import getOffersAccToCity from "../getOffersAccToCity";

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_HOTELS: `LOAD_HOTELS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (city, hotels) => ({
    type: ActionType.GET_OFFERS,
    payload: getOffersAccToCity(city, hotels)
  }),
  loadHotels: (hotels) => ({
    type: ActionType.LOAD_HOTELS,
    payload: hotels,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};

