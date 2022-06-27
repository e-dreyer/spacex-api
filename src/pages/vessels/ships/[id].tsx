import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import AsyncPage from "../../../components/asyncPage/AsyncPage";

import {
  CardContent,
  Box,
  Typography,
  Stack,
  Chip,
  List,
  ListItem,
} from "@mui/material";

import CardWrapper from "../../../components/cards/CardWrapper";
import StatusChip from "../../../components/chips/StatusChip";

import { Ship } from "../../../types/types";

import FlagIcon from "@mui/icons-material/Flag";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Link from "next/link";
import CardHeading from "../../../components/cards/Cardheading";
import RocketIcon from "@mui/icons-material/Rocket";
import ChipGroup from "../../../components/chips/ChipGroup";

export default function ShipPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery<{ ship: Ship }>(
    gql`
     {
  ship(id: "${id}") {
    class
    course_deg
    home_port
    id
    imo
    missions {
      flight
      name
    }
    mmsi
    model
    name
    position {
      latitude
      longitude
    }
    roles
    speed_kn
    successful_landings
    type
    url
    weight_kg
    weight_lbs
    year_built
    attempted_landings
    active
    abs
  }
}
    `
  );

  return (
    <>
      <AsyncPage data={data} loading={loading} error={error}>
        <CardWrapper>
          <CardHeading
            href={`/vessels/ships/${data?.ship?.id}`}
            linkTitle={data?.ship?.name}
          />

          <ChipGroup>
            <StatusChip
              label={`status: ${data?.ship?.active ? "active" : "inactive"}`}
              status={data?.ship?.active ? "active" : "inactive"}
            />
            {data?.ship?.class ? (
              <Chip
                size="small"
                icon={<RocketIcon />}
                label={`class: ${data?.ship?.class}`}
              />
            ) : (
              <></>
            )}

            {data?.ship?.type ? (
              <Chip
                size="small"
                icon={<RocketIcon />}
                label={`type: ${data?.ship?.type}`}
              />
            ) : (
              <></>
            )}
          </ChipGroup>
        </CardWrapper>
      </AsyncPage>
    </>
  );
}
