import React from "react";

import { CardContent, Stack, Typography, Chip, Box } from "@mui/material";

import { Payload } from "../../types/types";

import CardWrapper from "../cards/CardWrapper";
import CardHeading from "./Cardheading";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlagIcon from "@mui/icons-material/Flag";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import Link from "next/link";
import ChipGroup from "../chips/ChipGroup";

type PayloadCardProps = Pick<
  Payload,
  "id" | "manufacturer" | "nationality" | "payload_type" | "reused"
>;

export default function PayloadCard(props: PayloadCardProps) {
  return (
    <CardWrapper>
      <CardHeading
        href={`/vessels/payloads/${props.id}`}
        linkTitle={props.id}
      />

      <ChipGroup>
        {props.reused ? (
          <Chip
            size="small"
            icon={<AutorenewIcon />}
            label="reused"
            color="success"
          />
        ) : (
          <></>
        )}

        <Chip
          size="small"
          icon={<FlagIcon />}
          label={`nationality: ${props.nationality}`}
        />

        <Chip
          size="small"
          icon={<BusinessCenterIcon />}
          label={`manufacturer: ${props.manufacturer}`}
        />
      </ChipGroup>
    </CardWrapper>
  );
}
