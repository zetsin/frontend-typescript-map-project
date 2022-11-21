import { Grid } from '@nextui-org/react'
import GoogleMap from 'components/GoogleMap';

const Home = () => {

  return (
    <Grid.Container css={{
      display: "flex",
      minHeight: "100vh",
      p: 0,
    }}>
      <GoogleMap options={{
        center: {
          lat: -33.91722, 
          lng: 151.23064
        },
        zoom: 16
      }} style={{
        flex: 1
      }}>
      </GoogleMap>
    </Grid.Container>
  )
}

export default Home
