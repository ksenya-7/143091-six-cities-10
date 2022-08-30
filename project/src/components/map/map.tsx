import {useRef, useEffect, useMemo} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Offer} from '../../types/offer';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer?: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: '../../../img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: '../../../img/pin-active.svg',
  iconSize: [27, 39 ],
  iconAnchor: [13, 39]
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, selectedOffer} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const markersLayerGroup = useMemo(layerGroup, []);

  useEffect(() => {
    markersLayerGroup.clearLayers();
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markersLayerGroup);
      });
      markersLayerGroup.addTo(map);
      map.flyTo([city.location.latitude, city.location.longitude]);
    }
  }, [map, offers, selectedOffer, city, markersLayerGroup]);

  return (
    <div style={{height: '100%'}} ref={mapRef}/>
  );
}

export default Map;
