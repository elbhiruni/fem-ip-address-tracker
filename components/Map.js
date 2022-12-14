import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ position }) {
  const locationIcon = L.icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [46, 56], // size of the icon
    iconAnchor: [23, 56], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -56], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "80vh", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={locationIcon}></Marker>
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}
