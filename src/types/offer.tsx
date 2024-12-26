export type OfferType = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: CityType;
    location: LocationType;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
};

type CityType = {
  name: string;
  location: LocationType;
};

export type LocationType = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type ReviewType = {
  'id': string;
  'comment': string;
  'date': string;
  'rating': number;
  'user': User;
};

type User = {
  'name': string;
  'avatarUrl': string;
  'isPro': boolean;
}


