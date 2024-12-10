import { OfferType } from './types/offer';

type OfferGroups = Record<string, OfferType[]>;

export function getOfferGroups(offers: OfferType[]) : OfferGroups {
  const result: OfferGroups = {};

  offers.forEach((offer) => {
    const name: string = offer.city.name;

    if (result[name]) {
      result[name].push(offer);
    } else {
      result[name] = [offer];
    }
  });

  return result;
}
