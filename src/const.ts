import {LocationType} from './types/offer.tsx';
import { City } from './types/types.ts';

export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
'../markup/img/pin.svg';

export const URL_MARKER_CURRENT =
'../markup/img/pin-active.svg';

export const DEFAULT_CITY: LocationType = {
  latitude: 52.37454,
  longitude: 4.897976,
  zoom: 13,
};

export const AMSTERDAM_CITY: City = {
  title: 'Amsterdam',
  lat: 52.37454,
  lng: 4.897976,
  zoom: 13,
};
