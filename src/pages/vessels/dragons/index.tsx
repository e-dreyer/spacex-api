import React from "react";
import { useQuery, gql } from "@apollo/client";

import { Grid } from "@mui/material";

import AsyncPage from "../../../components/asyncPage/AsyncPage";
import DragonCard from "../../../components/cards/DragonCard";

import { Dragon } from "../../../types/types";

const summarizedDragonQuery = gql`
  {
    dragons {
      active
      id
      name
      type
      first_flight
      crew_capacity
    }
  }
`;

export default function DragonsPage() {
  const { loading, error, data } = useQuery<{ dragons: Dragon[] }>(
    summarizedDragonQuery
  );

  return (
    <AsyncPage data={data} loading={loading} error={error}>
      <Grid container direction="column" gap={2}>
        {data?.dragons.map((dragon, index) => {
          return <DragonCard key={index} {...dragon} />;
        })}
      </Grid>
    </AsyncPage>
  );
}
