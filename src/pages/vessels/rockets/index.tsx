import React from "react";
import { useQuery, gql } from "@apollo/client";

import { Grid } from "@mui/material";

import AsyncPage from "../../../components/asyncPage/AsyncPage";
import RocketCard from "../../../components/cards/RocketCard";

import { Rocket } from "../../../types/types";

const summarizedRocketQuery = gql`
  {
    rockets {
      active
      company
      cost_per_launch
      country
      id
      name
    }
  }
`;

export default function RocketsPage() {
  const { loading, error, data } = useQuery<{ rockets: Rocket[] }>(
    summarizedRocketQuery
  );

  return (
    <AsyncPage data={data} loading={loading} error={error}>
      <Grid container direction="column" gap={2}>
        {data?.rockets.map((rocket, index) => {
          return <RocketCard key={index} {...rocket} />;
        })}
      </Grid>
    </AsyncPage>
  );
}
