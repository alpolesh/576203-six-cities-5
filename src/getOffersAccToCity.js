import offers from "./mocks/offers";

const getOffersAccToCity = (city) => {
  const offersAccToCity = offers.filter((item) => item.city === city);
  return offersAccToCity;
};

export default getOffersAccToCity;
