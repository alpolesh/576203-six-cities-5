import offers from "./mocks/offers";

const getOffersAccToCity = (city, hotels) => {
  const offersAccToCity = hotels.filter((item) => item.city.name === city);
  return offersAccToCity;
};

export default getOffersAccToCity;
