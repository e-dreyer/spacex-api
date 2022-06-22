import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import AsyncPage from "../../components/asyncPage/AsyncPage";
import RocketCard from "../../components/cards/RocketCard";

import { Rocket } from "../../types/types";

export default function RocketPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery<{ rocket: Rocket }>(
    gql`
    {
        rocket (id: "${id}"){
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
    <>
      <AsyncPage data={data} loading={loading} error={error}>
        <RocketCard rocket={data?.rocket} />
      </AsyncPage>
    </>
  );
}
