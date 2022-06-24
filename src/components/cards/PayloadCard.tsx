import React from "react";

import { CardContent, Stack, Typography, Chip, Box } from "@mui/material";

import { Payload } from "../../types/types";

import CardWrapper from "../cards/CardWrapper";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlagIcon from "@mui/icons-material/Flag";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import Link from "next/link";

type PayloadCardProps = Pick<
  Payload,
  "id" | "manufacturer" | "nationality" | "payload_type" | "reused"
>;

export default function PayloadCard(props: PayloadCardProps) {
  return (
    <CardWrapper>
      <CardContent>
        <Box sx={{ mb: 1 }}>
          <Typography variant="body1" component="div">
            <Link href={`/vessels/payloads/${props.id}`}>{props.id}</Link>
          </Typography>
        </Box>
        <Box sx={{}}>
          <Stack direction="row" spacing={2}>
            {/* Nationality */}
            <Chip
              size="small"
              icon={<FlagIcon />}
              label={`nationality: ${props.nationality}`}
            />
            {/* Manufacturer */}
            <Chip
              size="small"
              icon={<BusinessCenterIcon />}
              label={`manufacturer: ${props.manufacturer}`}
            />
            {/* Reused */}
            {props.reused ? (
              <Chip
                size="small"
                icon={<AutorenewIcon />}
                label="reused"
                color="success"
              />
            ) : null}
          </Stack>
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
