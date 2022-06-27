import React from "react";
import Link from "next/link";

import {
  Typography,
  CardContent,
  Stack,
  ImageList,
  ImageListItem,
  Chip,
} from "@mui/material";

import RocketIcon from "@mui/icons-material/Rocket";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { Launch } from "../../types/types";
import { Maybe } from "graphql/jsutils/Maybe";
import CardWrapper from "./CardWrapper";
import CardHeading from "./Cardheading";
import ChipGroup from "../chips/ChipGroup";
import StatusChip from "../chips/StatusChip";

type LaunchCardProps = {
  launch?: Launch;
};

export default function LaunchCard(props: LaunchCardProps) {
  if (!props.launch) {
    return null;
  }

  return (
    <CardWrapper>
      <CardHeading
        href={`/launches/${props.launch.id}`}
        linkTitle={props.launch.id}
        heading={props.launch.mission_name}
      />

      <ChipGroup>
        <StatusChip
          label={`upcoming: ${props.launch.upcoming}`}
          status={props.launch.upcoming ? "true" : "false"}
        />
        <StatusChip
          label={`upcoming: ${props.launch.upcoming}`}
          status={props.launch.upcoming ? "true" : "false"}
        />
      </ChipGroup>
    </CardWrapper>
  );
}
