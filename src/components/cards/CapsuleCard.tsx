import React from "react";

import { CardContent, Stack, Typography, Chip, Box } from "@mui/material";

import { Capsule } from "../../types/types";

import CardWrapper from "../cards/CardWrapper";
import StatusChip from "../chips/StatusChip";
import CardHeading from "./Cardheading";

import RocketIcon from "@mui/icons-material/Rocket";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Link from "next/link";
import ChipGroup from "../chips/ChipGroup";

type CapsuleCardProps = Pick<
  Capsule,
  "id" | "landings" | "original_launch" | "reuse_count" | "status" | "type"
>;

export default function CapsuleCard(props: CapsuleCardProps) {
  return (
    <CardWrapper>
      <CardHeading
        href={`/vessels/capsules/${props.id}`}
        linkTitle={props.id}
        heading={props.type}
      />

      <ChipGroup>
        <StatusChip label={`status: ${props.status}`} status={props.status} />
        <Chip
          size="small"
          icon={<RocketIcon />}
          label={`landings: ${props.landings}`}
        />
        <Chip
          size="small"
          icon={<AutorenewIcon />}
          label={`reuse: ${props.reuse_count}`}
        />
      </ChipGroup>
    </CardWrapper>
  );
}
