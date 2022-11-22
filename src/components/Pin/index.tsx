import { FC, useEffect, useState } from "react";
import useMap from "hooks/useMap";

export type PinProps = google.maps.MarkerOptions & {
  selected?: boolean;
  onSelect?: (marker: google.maps.Marker) => void;
};

const Pin: FC<PinProps> = ({ selected, onSelect, ...options }) => {
  const [map] = useMap();
  const [marker, setMarker] = useState<google.maps.Marker>();

  const icon = "http://maps.google.com/mapfiles/kml/pal3/icon48.png";
  const selectedIcon = "https://maps.google.com/mapfiles/ms/micons/red-dot.png";

  useEffect(() => {
    if (!marker) {
      setMarker(
        new google.maps.Marker({
          map,
          icon,
        })
      );
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [map, marker]);

  useEffect(() => {
    const listener = marker?.addListener("click", () => {
      onSelect?.(marker);
    });

    return () => {
      listener?.remove();
    };
  }, [marker, onSelect]);

  useEffect(() => {
    marker?.setIcon(selected ? selectedIcon : icon);
  }, [marker, selected]);

  useEffect(() => {
    if (marker) {
      marker.setOptions({
        ...options,
        map,
      });
    }
  }, [map, marker, options]);

  return null;
};

export default Pin;
