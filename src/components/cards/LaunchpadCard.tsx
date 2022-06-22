import React from "react";
import Link from "next/link";

import { Typography, Card, CardContent, Stack } from "@mui/material";

import MyLocationIcon from "@mui/icons-material/MyLocation";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

import ItemCardWrapper from "./ItemCardWrapper";

import { Launchpad } from "../../types/types";

type LaunchPadCardProps = {
  launchpad?: Launchpad;
};

export default function LaunchCard(props: LaunchPadCardProps) {
  if (!props.launchpad) {
    return null;
  }

  return (
    <>
      <ItemCardWrapper>
        <CardContent>
          <Link href={`/launchpads/${props.launchpad.id}`}>
            <Typography variant="h5" component="div">
              {props.launchpad.name}
            </Typography>
          </Link>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <MyLocationIcon />
            <Typography variant="h6" component="h3">
              {props.launchpad.location?.region} -{" "}
              {props.launchpad.location?.name}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <QuestionMarkIcon />
            <Typography variant="h6" component="h3">
              {props.launchpad.status}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <ChatBubbleOutlineIcon />

            {props.launchpad.details ? (
              <>
                <Typography variant="body2" component="h3">
                  {props.launchpad.details}
                </Typography>
              </>
            ) : (
              <Typography variant="body2" component="h3">
                No information provided
              </Typography>
            )}
          </Stack>
        </CardContent>
      </ItemCardWrapper>
    </>
  );
}
