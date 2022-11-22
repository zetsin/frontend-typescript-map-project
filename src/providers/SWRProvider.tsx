import { FC, PropsWithChildren } from "react";
import { SWRConfig } from "swr";

const SWRProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
