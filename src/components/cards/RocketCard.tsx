import React from "react";
import Link from "next/link";

import { Typography, Card, CardContent, Stack } from "@mui/material";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import ScaleIcon from "@mui/icons-material/Scale";
import HeightIcon from "@mui/icons-material/Height";
import BusinessIcon from "@mui/icons-material/Business";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { Rocket } from "../../types/types";
import ItemCardWrapper from "./ItemCardWrapper";

type RocketCardProps = {
  rocket?: Rocket;
};

export default function RocketCard(props: RocketCardProps) {
  if (!props.rocket) {
    return null;
  }
  console.log(props.rocket);

  return (
    <>
      <ItemCardWrapper>
        <CardContent>
          <Link href={`/rockets/${props.rocket.id}`}>
            <Typography variant="h5" component="div">
              {props.rocket.name}
            </Typography>
          </Link>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <ScaleIcon />
            <Typography variant="h6" component="h3">
              {props.rocket.mass?.kg} kg
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <HeightIcon />
            <Typography variant="h6" component="h3">
              {props.rocket.height?.meters} m
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <BusinessIcon />
            <Typography variant="h6" component="h3">
              {props.rocket.company}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <AttachMoneyIcon />
            <Typography variant="h6" component="h3">
              USD {props.rocket.cost_per_launch}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <ChatBubbleOutlineIcon />

            {props.rocket.description ? (
              <>
                <Typography variant="body2" component="h3">
                  {props.rocket.description}
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
