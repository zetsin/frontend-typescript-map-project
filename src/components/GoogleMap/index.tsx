import { FC, useCallback } from 'react';
import { Loading } from '@nextui-org/react'
import { Wrapper, Status, WrapperProps } from "@googlemaps/react-wrapper";
import Map, { MapProps } from './Map';

const GoogleMap: FC<MapProps & {
  WrapperProps?: WrapperProps;
}> = ({
  WrapperProps,
  ...props
}) => {

  const onRender = useCallback((status: Status) => {
    if(status === Status.LOADING) {
      return <Loading />
    }

    return <></>
  }, [])

  return (
    <Wrapper render={onRender} {...WrapperProps} apiKey={WrapperProps?.apiKey ?? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <Map {...props}></Map>
    </Wrapper>
  )
}

export default GoogleMap
