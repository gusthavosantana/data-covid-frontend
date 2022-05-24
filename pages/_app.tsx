import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';

import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp;