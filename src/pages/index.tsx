import { Grid } from "@nextui-org/react";
import useProperties from "hooks/useProperties";
import Map from "components/Map";
import PinList from "components/PinList";

const Home = () => {
  const center: google.maps.LatLngLiteral = {
    lat: -33.91722,
    lng: 151.23064,
  };
  const { data: properties } = useProperties(center);

  return (
    <Grid.Container
      css={{
        display: "flex",
        minHeight: "100vh",
        p: 0,
      }}
    >
      <Map
        options={{
          center,
          zoom: 14,
        }}
        style={{
          flex: 1,
        }}
      >
        <PinList properties={properties} />
      </Map>
    </Grid.Container>
  );
};

export default Home;
