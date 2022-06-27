import React from "react";

import { Stack, Box } from "@mui/material";

type ChipGroupProps = {
  children: JSX.Element[] | JSX.Element;
};

export default function ChipGroup(props: ChipGroupProps) {
  return (
    <Box>
      <Stack direction="row" flexWrap={"wrap"} gap={1}>
        {props.children}
      </Stack>
    </Box>
  );
}
