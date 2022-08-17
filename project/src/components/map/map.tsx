import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Offer} from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
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

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });

      map.flyTo([city.location.latitude, city.location.longitude]);
    }
  }, [map, offers, selectedOffer, city]);

  return (
    <div style={{height: '100%'}} ref={mapRef} data-city={city.name}/>
  );
}

export default Map;
