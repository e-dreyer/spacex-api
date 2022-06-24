import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import AsyncPage from "../../../components/asyncPage/AsyncPage";

import {
  Card,
  CardContent,
  Box,
  Typography,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import StatusChip from "../../../components/chips/StatusChip";
import CardWrapper from "../../../components/cards/CardWrapper";

import { Capsule } from "../../../types/types";

import RocketIcon from "@mui/icons-material/Rocket";

export default function CapsulePage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery<{ capsule: Capsule }>(
    gql`
    {
        capsule (id: "${id}"){
            id
            landings
            missions {
              flight
              name
            }
            original_launch
            reuse_count
            status
            type

        }
      }
    `
  );

  return (
    <>
      <AsyncPage data={data} loading={loading} error={error}>
        <CardWrapper>
          <CardContent>
            <Box sx={{ mb: 1 }}>
              <Typography variant="h5" component="div">
                {data?.capsule.id} - {data?.capsule.type}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Stack direction="row" spacing={2}>
                <StatusChip
                  size="small"
                  label={`status: ${data?.capsule.status}`}
                  status={data?.capsule.status}
                />
                <Chip
                  size="small"
                  icon={<RocketIcon />}
                  label={`landings: ${data?.capsule.landings}`}
                />
                <Chip
                  size="small"
                  icon={<RocketIcon />}
                  label={`reuse: ${data?.capsule.reuse_count}`}
                />
              </Stack>
            </Box>
            <Divider />
            <Box>
              <Typography variant="h6" component="div">
                Missions
              </Typography>
              <List>
                {data?.capsule?.missions?.map((mission, missionIndex) => {
                  return (
                    <>
                      <ListItem disablePadding key={missionIndex}>
                        <ListItemButton>
                          <ListItemText
                            primary={`${mission?.flight} - ${mission?.name}`}
                          />
                        </ListItemButton>
                      </ListItem>
                    </>
                  );
                })}
              </List>
            </Box>
          </CardContent>
        </CardWrapper>
      </AsyncPage>
    </>
  );
}
