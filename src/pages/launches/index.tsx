import React from "react";
import { useQuery, gql } from "@apollo/client";

import { Stack } from "@mui/material";

import AsyncPage from "../../components/asyncPage/AsyncPage";
import LaunchCard from "../../components/cards/LaunchCard";

import { Launch } from "../../types/types";

export default function LaunchesPage() {
  const { loading, error, data } = useQuery<{ launches: Launch[] }>(
    gql`
      {
        launches {
          id
          mission_name
          launch_site {
            site_id
            site_name
            site_name_long
          }
          rocket {
            rocket_type
            rocket_name
          }
          details
          links {
            flickr_images
          }
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
        {data?.launches.map((launch, index) => {
          return <LaunchCard launch={launch} key={index} />;
        })}
      </Stack>
    </AsyncPage>
  );
}
