import { Grid } from '@nextui-org/react'
import GoogleMap from 'components/GoogleMap';
import Pin from 'components/Pin';
import useData from 'hooks/useData';

const Home = () => {
  const {data} = useData()

  console.log(data)

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
        {data?.map((item, index) => (
          <Pin key={index} {...item} />
        ))}
      </GoogleMap>
    </Grid.Container>
  )
}

export default Home
