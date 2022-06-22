import React from "react";
import { useQuery, gql } from "@apollo/client";

import { Stack } from "@mui/material";

import AsyncPage from "../../components/asyncPage/AsyncPage";
import RocketCard from "../../components/cards/RocketCard";

import { Rocket } from "../../types/types";

export default function RocketsPage() {
  const { loading, error, data } = useQuery<{ rockets: Rocket[] }>(
    gql`
      {
        rockets {
          boosters
          company
          cost_per_launch
          country
          description
          diameter {
            meters
          }
          first_flight
          height {
            meters
          }
          id
          mass {
            kg
          }
          name
          payload_weights {
            kg
            name
          }
          stages
          success_rate_pct
          type
          wikipedia
          
        }
      }
    `
  );

  return (
    <AsyncPage data={data} loading={loading} error={error}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        {data?.rockets.map((rocket, index) => {
          return <RocketCard rocket={rocket} key={index} />;
        })}
      </Stack>
    </AsyncPage>
  );
}
