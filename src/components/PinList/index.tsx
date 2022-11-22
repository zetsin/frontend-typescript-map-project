import { FC, useEffect, useMemo, useState } from "react";
import { renderToString } from "react-dom/server";
import Pin from "components/Pin";
import useMap from "hooks/useMap";
import DetailCard from "components/DetailCard";

export type PinListProps = {
  properties?: Property[];
};

const PinList: FC<PinListProps> = ({ properties }) => {
  const [map] = useMap();
  const infoWindow = useMemo(() => new google.maps.InfoWindow(), []);
  const [selection, setSelection] = useState<number>();

  useEffect(() => {
    const listener = infoWindow?.addListener("closeclick", () => {
      setSelection(undefined);
    });

    return () => {
      listener.remove();
    };
  }, [infoWindow]);

  return (
    <>
      {properties?.map((property, index) => (
        <Pin
          key={index}
          position={property.position}
          selected={selection === index}
          onSelect={(marker) => {
            setSelection(index);
            infoWindow?.setContent(
              renderToString(<DetailCard property={property} />)
            );
            infoWindow?.open({
              anchor: marker,
              map,
            });
          }}
        />
      ))}
    </>
  );
};

export default PinList;
