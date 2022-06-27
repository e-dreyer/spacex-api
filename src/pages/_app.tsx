import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import CssBaseline from "@mui/material/CssBaseline";

import resolvers from "../schema/resolvers";
import typedefs from "../schema/typeDefs";

import Layout from "../components/layout";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createTheme, ThemeProvider } from "@mui/material";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
  typeDefs: typedefs,
  resolvers: resolvers,
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6868c7",
      dark: "#4b4b94",
    },
    secondary: {
      main: "#ea246c",
    },
  },
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <ApolloProvider client={client}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
