import React from "react";
import { ApolloError } from "@apollo/client";

import {
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Alert,
} from "@mui/material";

type LoadingCardProps = {
  loading: boolean;
  error: ApolloError | undefined;
};

function LoadingCard(props: LoadingCardProps) {
  return (
    <>
      {props.loading ? (
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Typography variant="h6" component="div" textAlign="center">
              <CircularProgress color="success" />
            </Typography>
          </CardContent>
        </Card>
      ) : props.error ? (
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Alert variant="filled" severity="error">
              An unexpected error occurred while loading the data...
            </Alert>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
}

export default LoadingCard;
