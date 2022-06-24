import React from "react";
import { useQuery, gql } from "@apollo/client";

import { Stack, Grid } from "@mui/material";

import AsyncPage from "../../../components/asyncPage/AsyncPage";
import CapsuleCard from "../../../components/cards/CapsuleCard";

import { Capsule } from "../../../types/types";

const summarizedCapsuleQuery = gql`
  {
    capsules {
      id
      landings
      original_launch
      reuse_count
      status
      type
    }
  }
`;

export default function CapsulesPage() {
  const { loading, error, data } = useQuery<{ capsules: Capsule[] }>(
    summarizedCapsuleQuery
  );

  return (
    <AsyncPage data={data} loading={loading} error={error}>
      <Grid container direction="column" gap={2}>
        {data?.capsules.map((capsule, index) => {
          return <CapsuleCard key={index} {...capsule} />;
        })}
      </Grid>
    </AsyncPage>
  );
}
