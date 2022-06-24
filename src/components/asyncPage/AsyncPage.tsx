import React from "react";
import { ApolloError } from "@apollo/client";

import LoadingCard from "./LoadingCard";
import { Box } from "@mui/material";

type AsyncPageProps = {
  children?: JSX.Element;
  data: any | undefined;
  loading: boolean;
  error: ApolloError | undefined;
};

function AsyncPage(props: AsyncPageProps) {
  return (
    <>
      {props.loading || props.error ? (
        <LoadingCard loading={props.loading} error={props.error} />
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}

export default AsyncPage;
