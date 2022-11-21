import { FC, useEffect, useState } from "react";
import useMap from "hooks/useMap";
import Building from "./building.png"
import BuildingSelected from "./building-selected.png"

const Pin: FC<google.maps.MarkerOptions> = (options) => {
  const [map] = useMap()
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker({
        map,
        icon: Building.src,
      }));
    }
    const markerListener = marker?.addListener("click", () => {
      marker?.setIcon(BuildingSelected.src);
    })
    const mapListener = map?.addListener('click', () => {
      marker?.setIcon(Building.src);
    });

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
      markerListener?.remove()
      mapListener?.remove()
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions({
        ...options,
        map
      });
    }
  }, [marker, options]);

  return null;
};

export default Pin