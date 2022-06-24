import React from "react";
import { ApolloError } from "@apollo/client";

import {
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Alert,
} from "@mui/material";

import CardWrapper from "../cards/CardWrapper";

type LoadingCardProps = {
  loading: boolean;
  error: ApolloError | undefined;
};

function LoadingCard(props: LoadingCardProps) {
  return (
    <>
      {props.loading ? (
        <CardWrapper>
          <CardContent>
            <Typography variant="h6" component="div" textAlign="center">
              <CircularProgress color="primary" />
            </Typography>
          </CardContent>
        </CardWrapper>
      ) : props.error ? (
        <CardWrapper>
          <CardContent>
            <Alert variant="filled" severity="error">
              An unexpected error occurred while loading the data...
            </Alert>
          </CardContent>
        </CardWrapper>
      ) : null}
    </>
  );
}

export default LoadingCard;
