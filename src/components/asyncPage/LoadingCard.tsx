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
        <Card>
          <CardContent>
            <Typography variant="h6" component="div" textAlign="center">
              <CircularProgress color="success" />
            </Typography>
          </CardContent>
        </Card>
      ) : props.error ? (
        <Card>
          <Alert variant="filled" severity="error">
            An unexpected error occurred while loading the data...
          </Alert>
        </Card>
      ) : null}
    </>
  );
}

export default LoadingCard;
