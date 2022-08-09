import React, {useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const mapRef = useRef(null);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
