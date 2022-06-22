import React from "react";
import { ApolloError } from "@apollo/client";

import LoadingCard from "./LoadingCard";

type AsyncPageProps = {
  children?: JSX.Element;
  data: any | undefined;
  loading: boolean;
  error: ApolloError | undefined;
};

function AsyncPage(props: AsyncPageProps) {
  return (
    <>
      <LoadingCard loading={props.loading} error={props.error} />
      {props.children}
    </>
  );
}

export default AsyncPage;
