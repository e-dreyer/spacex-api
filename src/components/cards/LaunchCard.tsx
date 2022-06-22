import React from "react";
import Link from "next/link";

import {
  Typography,
  CardMedia,
  CardContent,
  Stack,
  ImageList,
  ImageListItem,
  ListItemIcon,
} from "@mui/material";

import RocketIcon from "@mui/icons-material/Rocket";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import ItemCardWrapper from "./ItemCardWrapper";

import { Launch } from "../../types/types";
import { Maybe } from "graphql/jsutils/Maybe";

type LaunchCardProps = {
  launch?: Launch;
};

export default function LaunchCard(props: LaunchCardProps) {
  if (!props.launch) {
    return null;
  }

  const getRandomImg = (imgs: Maybe<string>[]) => {
    return imgs[Math.floor(Math.random() * imgs.length)];
  };

  const getImage = () => {
    if (props.launch?.links?.flickr_images) {
      return (
        <ImageList cols={props.launch?.links?.flickr_images.length}>
          {props.launch?.links?.flickr_images.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt=""
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
    }
    return null;
  };
  return (
    <>
      <ItemCardWrapper>
        <>
          {getImage()}

          <CardContent>
            <Link href={`/launches/${props.launch.id}`}>
              <Typography variant="h5" component="div">
                {props.launch.mission_name}
              </Typography>
            </Link>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <MyLocationIcon />
              <Link href={`/launchpads/${props.launch.launch_site?.site_id}`}>
                <Typography variant="h6" component="h3">
                  {props.launch.launch_site?.site_name}
                </Typography>
              </Link>
            </Stack>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <RocketIcon />
              <Link
                href={`/rockets/${(props.launch.rocket?.rocket_name ?? "")
                  .toLowerCase()
                  .split(" ")
                  .join("")}`}
              >
                <Typography variant="h6" component="h3">
                  {props.launch.rocket?.rocket_name}
                </Typography>
              </Link>
            </Stack>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <ChatBubbleOutlineIcon />

              {props.launch.details ? (
                <>
                  <Typography variant="body2" component="h3">
                    {props.launch.details}
                  </Typography>
                </>
              ) : (
                <Typography variant="body2" component="h3">
                  No information provided
                </Typography>
              )}
            </Stack>
          </CardContent>
        </>
      </ItemCardWrapper>
    </>
  );
}
