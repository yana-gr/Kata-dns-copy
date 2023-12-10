import { LatLngTuple } from 'leaflet';

export interface ShopType {
  id: number;
  name: string;
  location: LatLngTuple;
  streetAddress: string;
  inOpen: boolean;
  inNear: boolean;
  description: string;
  // point: boolean;
  shop: boolean;
  isActive: boolean;
}

export type shopFilterType = {
  opened: boolean;
  near: boolean;
  shops: boolean;
  posts: boolean;
};

export interface TooltipType {
  isHovered: boolean;
  content: string;
  // placement: 'top' | 'bottom' | 'left' | 'right';
}
