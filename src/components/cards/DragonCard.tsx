import React from "react";

import { CardContent, Stack, Typography, Card, Chip, Box } from "@mui/material";

import { Dragon } from "../../types/types";

import CardWrapper from "../cards/CardWrapper";
import StatusChip from "../chips/StatusChip";

import RocketIcon from "@mui/icons-material/Rocket";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import Link from "next/link";
import ChipGroup from "../chips/ChipGroup";
import CardHeading from "./Cardheading";

type DragonCardProps = Pick<
  Dragon,
  "id" | "active" | "name" | "type" | "first_flight" | "crew_capacity"
>;

export default function DragonCard(props: DragonCardProps) {
  return (
    <CardWrapper>
      <CardHeading
        href={`/vessels/dragons/${props.id}`}
        linkTitle={props.name}
      />

      <ChipGroup>
        <StatusChip
          size="small"
          label={`status: ${props.active ? "active" : "unknown"}`}
          status={props.active ? "active" : "unknown"}
        />
        <Chip
          size="small"
          icon={<RocketIcon />}
          label={`type: ${props.type}`}
        />
        <Chip
          size="small"
          icon={<CalendarMonthIcon />}
          label={`first flight: ${props.first_flight}`}
        />
        <Chip
          size="small"
          icon={<PeopleIcon />}
          label={`capacity: ${props.crew_capacity}`}
        />
      </ChipGroup>
    </CardWrapper>
  );
}
