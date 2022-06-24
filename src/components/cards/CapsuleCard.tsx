import React from "react";

import { CardContent, Stack, Typography, Chip, Box } from "@mui/material";

import { Capsule } from "../../types/types";

import CardWrapper from "../cards/CardWrapper";
import StatusChip from "../chips/StatusChip";

import RocketIcon from "@mui/icons-material/Rocket";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Link from "next/link";

type CapsuleCardProps = Pick<
  Capsule,
  "id" | "landings" | "original_launch" | "reuse_count" | "status" | "type"
>;

export default function CapsuleCard(props: CapsuleCardProps) {
  return (
    <CardWrapper>
      <CardContent>
        <Box sx={{ mb: 1 }}>
          <Typography variant="body1" component="div">
            <Link href={`/vessels/capsules/${props.id}`}>{props.id}</Link> -{" "}
            {props.type}
          </Typography>
        </Box>
        <Box sx={{}}>
          <Stack direction="row" spacing={2}>
            <StatusChip
              size="small"
              label={`status: ${props.status}`}
              status={props.status}
            />
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
          </Stack>
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
