import { FC } from "react";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import SWRProvider from "providers/SWRProvider";
import GoogleMapsProvider from "providers/GoogleMapsProvider";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <SWRProvider>
        <GoogleMapsProvider>
          <Component {...pageProps} />
        </GoogleMapsProvider>
      </SWRProvider>
    </NextUIProvider>
  );
};

export default App;
