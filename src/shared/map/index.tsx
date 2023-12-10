import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Spinner from 'shared/spinner';

import 'leaflet/dist/leaflet.css';
import classes from './map.module.scss';
import L from 'leaflet';
import MarkerClasterGroup from 'react-leaflet-cluster';
import { useAppSelector } from 'shared/store/hooks';
import Shop from '../../entities/shop';

import { ShopType } from 'shared/types';

type ShopProps = {
  shop: ShopType | null;
};

export default function Map({ shop }: ShopProps) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const centerStart: L.LatLngExpression = [60.001913, 30.929441];

  const isLoading = useAppSelector((state) => state.shopsReducer.isLoading);
  const isError = useAppSelector((state) => state.shopsReducer.isError);

  const filteredShops = useAppSelector((state) => state.shopsReducer.filteredShops);

  const customIcon = new L.Icon({
    iconUrl: 'https://ordinalnews.io/wp-content/uploads/2023/03/logo2x2trans.png',
    iconSize: [33, 33],
  });

  const createCustomClasterIcon = (cluster: any) => {
    const countShops = cluster.getChildCount();
    if (countShops < 30) {
      return L.divIcon({
        html: `<div class=${classes.marker_cluster_small}>${countShops}</div>`,
        className: 'custom-marker-cluster',
        iconSize: L.point(33, 33, true),
      });
    } else if (countShops > 60) {
      return L.divIcon({
        html: `<div class=${classes.marker_cluster_large}>${countShops}</div>`,
        className: 'custom-marker-cluster',
        iconSize: L.point(33, 33, true),
      });
    } else {
      return L.divIcon({
        html: `<div class=${classes.marker_cluster_medium}>${countShops}</div>`,
        className: 'custom-marker-cluster',
        iconSize: L.point(33, 33, true),
      });
    }
  };

  useEffect(() => {
    if (filteredShops && !shop) {
      const bounds = L.latLngBounds(filteredShops.map((shop: ShopType) => shop.location));

      const map: any = mapRef.current;

      if (map && bounds.isValid()) {
        map.fitBounds(bounds, { padding: [10, 10] }, { zoom: 15 });
      }
    }

    if (shop) {
      const map: any = mapRef.current;

      if (!map) {
        return;
      }
      map.flyTo(shop.location, 15);
    }
  }, [shop, filteredShops]);

  return (
    <>
      {isLoading && (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
      {isError && <h1>Error. Try again later</h1>}
      {filteredShops && (
        <MapContainer
          ref={mapRef}
          className={classes.map}
          zoom={15}
          scrollWheelZoom={true}
          center={centerStart}
          inertia={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <MarkerClasterGroup
            chunkedLoading
            iconCreateFunction={createCustomClasterIcon}
            maxClusterRadius={30}
            spiderfyOnMaxZoom={true}
            showCoverageOnHover={true}
          >
            {filteredShops.map((shopFiltered: ShopType) => (
              <Marker key={shopFiltered.id} position={shopFiltered.location} icon={customIcon} ref={markerRef}>
                <Popup>
                  <Shop shop={shopFiltered} />
                  <div className={classes.route}>Построить маршрут</div>
                </Popup>
              </Marker>
            ))}
          </MarkerClasterGroup>
        </MapContainer>
      )}
    </>
  );
}
