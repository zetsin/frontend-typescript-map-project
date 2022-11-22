import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import useMap from "hooks/useMap";
import { useDeepCompareEffect } from "react-use";

export type MapProps = HTMLAttributes<HTMLDivElement> & {
  options?: google.maps.MapOptions;
  onIdle?: (map: google.maps.Map) => void;
};

const Map: FC<MapProps> = ({ options, onIdle, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useMap();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: {
            lng: 0,
            lat: 0,
          },
          zoom: 0,
          clickableIcons: false,
        })
      );
    }
  }, [ref, map, setMap]);

  useDeepCompareEffect(() => {
    if (map && options) {
      map.setOptions(options);
    }
  }, [map, options]);

  return <div {...props} ref={ref} />;
};

export default Map;
