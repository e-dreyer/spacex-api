import React from "react";
import { useQuery, gql } from "@apollo/client";

import { Stack } from "@mui/material";

import AsyncPage from "../../components/asyncPage/AsyncPage";
import LaunchpadCard from "../../components/cards/LaunchpadCard";

import { Launchpad } from "../../types/types";

export default function LaunchpadsPage() {
  const { loading, error, data } = useQuery<{ launchpads: Launchpad[] }>(
    gql`
      {
        launchpads {
          name
          id
          details
          location {
            latitude
            longitude
            name
            region
          }
          status
          successful_launches
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
        {data?.launchpads.map((launchpad, index) => {
          return <LaunchpadCard launchpad={launchpad} key={index} />;
        })}
      </Stack>
    </AsyncPage>
  );
}
