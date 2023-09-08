import { Icon } from 'leaflet';
import Link from 'next/link';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = () => {
  const ICON = new Icon({
    iconUrl: './assets/marker.png',
    iconSize: [26, 40],
  });
  if (window) {
    return (
      <div className="w-full h-[205px] bg-black my-8 rounded-[25px] xl:w-[60%] xl:h-auto">
        <MapContainer
          center={[50.2725839, 18.9636333]}
          scrollWheelZoom={true}
          zoom={15}
          zoomControl={false}
          className="w-full h-full rounded-[25px] z-0 xl:z-[10]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker icon={ICON} position={[50.2725839, 18.9636333]}>
            <Popup>
              <Link
                target="_blank"
                className="underline"
                href="https://goo.gl/maps/yWYk23UtegvaAeiq6"
              >
                Społeczna Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w
                Katowicach
              </Link>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }

  return <div />;
};

export default Map;
