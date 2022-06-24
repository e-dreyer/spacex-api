import React, { JSXElementConstructor, ReactElement } from "react";

import { Chip } from "@mui/material";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { Maybe } from "../../types/types";

type StatusChipProps = {
  status: Maybe<string> | undefined;
  size: "small" | "medium" | undefined;
  label: Maybe<string> | undefined;
};

type ChipColors =
  | "default"
  | "primary"
  | "error"
  | "warning"
  | "success"
  | "secondary"
  | "info"
  | undefined;

export default function StatusChip(props: StatusChipProps) {
  const colors: { [key: string]: ChipColors } = {
    unknown: "primary",
    destroyed: "error",
    retired: "warning",
    active: "success",
  };

  return (
    <Chip
      {...props}
      color={
        props.status && colors[props.status] ? colors[props.status] : "default"
      }
      size={props.size ?? "medium"}
      icon={<HelpOutlineIcon />}
    />
  );
}
