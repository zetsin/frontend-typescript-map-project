import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { Loading } from "@nextui-org/react";
import { FC, PropsWithChildren, useCallback } from "react";

const GoogleMapsProvider: FC<PropsWithChildren> = ({ children }) => {
  const onRender = useCallback((status: Status) => {
    if (status === Status.LOADING) {
      return <Loading />;
    }

    return <></>;
  }, []);

  return (
    <Wrapper
      render={onRender}
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
    >
      {children}
    </Wrapper>
  );
};

export default GoogleMapsProvider;
