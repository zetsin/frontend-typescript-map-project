import { stringify } from "querystring";
import useSWR from "swr";

const useProperties = (center?: google.maps.LatLngLiteral) => {
  return useSWR<Property[]>(
    `/api/properties?${stringify({
      lat: center?.lat,
      lng: center?.lng,
    })}`
  );
};

export default useProperties;
