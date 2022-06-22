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
      <Box
        mt={5}
        p={1}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          maxWidth: "800px",
        }}
      >
        <LoadingCard loading={props.loading} error={props.error} />
        {props.children}
      </Box>
    </>
  );
}

export default AsyncPage;
