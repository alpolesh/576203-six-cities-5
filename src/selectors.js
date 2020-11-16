import {NameSpace} from "./store/reducers/root-reducer";
import {createSelector} from "reselect";

export const getCity = (state) => {
  return state[NameSpace.PROCESS].city;
};

export const getHotels = (state) => {
  return state[NameSpace.DATA].hotels;
};

export const getOffersFromHotels = createSelector(
    getCity,
    getHotels,
    (city, hotels) => {
      return hotels.filter((item) => item.city.name === city);
    }
);
