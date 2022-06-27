import React from "react";
import { CardContent, Stack, Typography, Chip, Box } from "@mui/material";
import Link from "next/link";
import { Maybe } from "../../types/types";

type CardHeadingProps = {
  heading?: Maybe<string> | undefined;
  linkTitle: Maybe<string> | undefined;
  href: string;
};

export default function CardHeading(props: CardHeadingProps) {
  return (
    <Box sx={{ m: 1 }}>
      <Typography variant="body1" component="div">
        <Link href={props.href}>{props.linkTitle}</Link>
        {props.heading ? ` - ${props.heading}` : null}
      </Typography>
    </Box>
  );
}
