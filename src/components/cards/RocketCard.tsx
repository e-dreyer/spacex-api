import React from "react";

import { CardContent, Stack, Typography, Chip, Box } from "@mui/material";

import { Rocket } from "../../types/types";

import CardWrapper from "../cards/CardWrapper";
import StatusChip from "../chips/StatusChip";
import CardHeading from "./Cardheading";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlagIcon from "@mui/icons-material/Flag";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import Link from "next/link";
import ChipGroup from "../chips/ChipGroup";

type RocketCardProps = Pick<
  Rocket,
  "id" | "name" | "active" | "company" | "country" | "cost_per_launch"
>;

export default function RocketCard(props: RocketCardProps) {
  return (
    <CardWrapper>
      <CardHeading
        href={`/vessels/rockets/${props.id}`}
        linkTitle={props.name}
      />

      <ChipGroup>
        {/* Status */}
        <StatusChip
          size="small"
          label={`status: ${props.active ? "active" : "unknown"}`}
          status={props.active ? "active" : "unknown"}
        />
        {/* Nationality */}
        <Chip
          size="small"
          icon={<FlagIcon />}
          label={`country: ${props.country}`}
        />
        {/* Manufacturer */}
        <Chip
          size="small"
          icon={<BusinessCenterIcon />}
          label={`company: ${props.company}`}
        />
      </ChipGroup>
    </CardWrapper>
  );
}
