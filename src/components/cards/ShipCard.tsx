import React from "react";

import { CardContent, Stack, Typography, Chip, Box } from "@mui/material";

import { Ship } from "../../types/types";

import CardWrapper from "../cards/CardWrapper";
import StatusChip from "../chips/StatusChip";
import CardHeading from "./Cardheading";

import RocketIcon from "@mui/icons-material/Rocket";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Link from "next/link";
import ChipGroup from "../chips/ChipGroup";

type ShipCardProps = Pick<
  Ship,
  "active" | "class" | "home_port" | "id" | "name" | "type" | "year_built"
>;

export default function ShipCard(props: ShipCardProps) {
  return (
    <CardWrapper>
      <CardHeading href={`/vessels/ships/${props.id}`} linkTitle={props.name} />

      <ChipGroup>
        <StatusChip
          label={`status: ${props.active ? "active" : "inactive"}`}
          status={props.active ? "active" : "inactive"}
        />
        {props.class ? (
          <Chip
            size="small"
            icon={<RocketIcon />}
            label={`class: ${props.class}`}
          />
        ) : (
          <></>
        )}

        {props.type ? (
          <Chip
            size="small"
            icon={<RocketIcon />}
            label={`type: ${props.type}`}
          />
        ) : (
          <></>
        )}
      </ChipGroup>
    </CardWrapper>
  );
}
