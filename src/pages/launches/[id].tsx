import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import AsyncPage from "../../components/asyncPage/AsyncPage";
import LaunchCard from "../../components/cards/LaunchCard";

import { Launch } from "../../types/types";
import { Box } from "@mui/material";

export default function LaunchPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery<{ launch: Launch }>(
    gql`
      {
        launch (id: "${id}") {
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
    <>
      <AsyncPage data={data} loading={loading} error={error}>
        <LaunchCard launch={data?.launch} />
      </AsyncPage>
    </>
  );
}
