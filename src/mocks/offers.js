const offers = [
  {
    photos: [`img/room1-1.jpg`, `img/room1-2.jpg`, `img/room1-3.jpg`, `img/room1-4.jpg`, `img/room1-5.jpg`, `img/room1-6.jpg`],
    titel: `Comfortable & luxurious apartments`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    premium: true,
    type: `apartment`,
    rating: 5,
    bedrooms: 2,
    maxAdults: 3,
    price: 200,
    features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    owner: {
      avatar: `img/avatar01.jpg`,
      name: `John`,
      super: true,
    }
  },
  {
    photos: [`img/room2-1.jpg`, `img/room2-2.jpg`, `img/room2-3.jpg`, `img/room2-4.jpg`, `img/room2-5.jpg`, `img/room2-6.jpg`],
    titel: `Excellent & luxurious apartments`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    premium: false,
    type: `hotel`,
    rating: 4.6,
    bedrooms: 3,
    maxAdults: 2,
    price: 150,
    features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    owner: {
      avatar: `img/avatar02.jpg`,
      name: `Nelly`,
      super: true,
    }
  },
];

export default offers;
