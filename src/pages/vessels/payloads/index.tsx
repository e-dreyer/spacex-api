import React from "react";
import { useQuery, gql } from "@apollo/client";

import { Grid } from "@mui/material";

import AsyncPage from "../../../components/asyncPage/AsyncPage";
import PayloadCard from "../../../components/cards/PayloadCard";

import { Payload } from "../../../types/types";

const summarizedPayloadQuery = gql`
  {
    payloads {
      id
      manufacturer
      nationality
      payload_type
      reused
    }
  }
`;

export default function PayloadsPage() {
  const { loading, error, data } = useQuery<{ payloads: Payload[] }>(
    summarizedPayloadQuery
  );

  return (
    <AsyncPage data={data} loading={loading} error={error}>
      <Grid container direction="column" gap={2}>
        {data?.payloads.map((payload, index) => {
          return <PayloadCard key={index} {...payload} />;
        })}
      </Grid>
    </AsyncPage>
  );
}
