import React from "react";
ShipsPage;
import { useQuery, gql } from "@apollo/client";

import { Grid } from "@mui/material";

import AsyncPage from "../../../components/asyncPage/AsyncPage";
import ShipCard from "../../../components/cards/ShipCard";

import { Ship } from "../../../types/types";

const summarizedShipQuery = gql`
  {
    ships {
      active
      class
      home_port
      id
      name
      type
      year_built
    }
  }
`;

export default function ShipsPage() {
  const { loading, error, data } = useQuery<{ ships: Ship[] }>(
    summarizedShipQuery
  );

  return (
    <AsyncPage data={data} loading={loading} error={error}>
      <Grid container direction="column" gap={2}>
        {data?.ships.map((ship, index) => {
          return <ShipCard key={index} {...ship} />;
        })}
      </Grid>
    </AsyncPage>
  );
}
