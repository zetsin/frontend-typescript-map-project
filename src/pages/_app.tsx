import { FC } from 'react';
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { SWRConfig } from 'swr'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <SWRConfig
        value={{
          fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </NextUIProvider>
  )
}

export default App
