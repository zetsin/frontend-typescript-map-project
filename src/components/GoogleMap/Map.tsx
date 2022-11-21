import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import useMap from "hooks/useMap";

export type MapProps = HTMLAttributes<HTMLDivElement> & {
  options?: google.maps.MapOptions;
  onIdle?: (map: google.maps.Map) => void;
};

const Map: FC<MapProps> = ({
  options,
  onIdle,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useMap();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center: {
          lng: 0,
          lat: 0,
        },
        zoom: 3
      }));
    }
  }, [ref, map]);

  useEffect(() => {
    if (map && options) {
      map.setOptions(options);
    }
  }, [map, options]);

  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );

      if (props.onClick) {
        map.addListener("click", props.onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, props.onClick, onIdle]);

  return <div {...props} ref={ref} />
};

export default Map