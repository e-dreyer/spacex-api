import React from "react";

import { CardContent, Stack, Typography, Chip, Box } from "@mui/material";

import { Rocket } from "../../types/types";

import CardWrapper from "../cards/CardWrapper";
import StatusChip from "../chips/StatusChip";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlagIcon from "@mui/icons-material/Flag";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import Link from "next/link";

type RocketCardProps = Pick<
  Rocket,
  "id" | "name" | "active" | "company" | "country" | "cost_per_launch"
>;

export default function RocketCard(props: RocketCardProps) {
  return (
    <CardWrapper>
      <CardContent>
        <Box sx={{ mb: 1 }}>
          <Typography variant="body1" component="div">
            <Link href={`/vessels/rockets/${props.id}`}>{props.name}</Link>
          </Typography>
        </Box>
        <Box sx={{}}>
          <Stack direction="row" spacing={2}>
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
          </Stack>
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
