import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import AsyncPage from "../../../components/asyncPage/AsyncPage";

import {
  CardContent,
  Box,
  Typography,
  Stack,
  Chip,
  List,
  ListItem,
} from "@mui/material";

import CardWrapper from "../../../components/cards/CardWrapper";
import StatusChip from "../../../components/chips/StatusChip";

import { Rocket } from "../../../types/types";

import RocketIcon from "@mui/icons-material/Rocket";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlagIcon from "@mui/icons-material/Flag";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Link from "next/link";

export default function RocketPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery<{ rocket: Rocket }>(
    gql`
      {
        rocket(id: "${id}") {
          active
          boosters
          company
          cost_per_launch
          country
          description
          diameter {
            meters
          }
          engines {
            engine_loss_max
            layout
            number
            propellant_1
            propellant_2
            thrust_sea_level {
              kN
            }
            thrust_to_weight
            thrust_vacuum {
              kN
            }
            type
            version
          }
          first_flight
          first_stage {
            burn_time_sec
            engines
            fuel_amount_tons
            reusable
            thrust_vacuum {
              kN
            }
            thrust_sea_level {
              kN
            }
          }
          height {
            meters
          }
          id
          landing_legs {
            material
            number
          }
          mass {
            kg
          }
          name

          second_stage {
            burn_time_sec
            fuel_amount_tons
            payloads {
              composite_fairing {
                diameter {
                  meters
                }
                height {
                  meters
                }
              }
            }
            thrust {
              kN
            }
          }
          stages
          success_rate_pct
          type
          wikipedia
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
              <Typography variant="body1" component="div">
                <Link href={`/vessels/rockets/${data?.rocket?.id}`}>
                  {data?.rocket?.name}
                </Link>
              </Typography>
            </Box>
            <Box sx={{}}>
              <Stack direction="row" spacing={2}>
                {/* Status */}
                <StatusChip
                  size="small"
                  label={`status: ${
                    data?.rocket?.active ? "active" : "unknown"
                  }`}
                  status={data?.rocket?.active ? "active" : "unknown"}
                />
                {/* Nationality */}
                <Chip
                  size="small"
                  icon={<FlagIcon />}
                  label={`country: ${data?.rocket?.country}`}
                />
                {/* Manufacturer */}
                <Chip
                  size="small"
                  icon={<BusinessCenterIcon />}
                  label={`company: ${data?.rocket?.company}`}
                />
              </Stack>
            </Box>

            {/* Description */}
            <Box>
              <Typography variant="h6" component="div">
                Description
              </Typography>
              <Typography variant="body1" component="div">
                {data?.rocket?.description}
              </Typography>
            </Box>

            <Box>
              <List>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Boosters: {data?.rocket?.boosters}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Cost per Launch: {data?.rocket?.cost_per_launch}
                  </Typography>
                </ListItem>
              </List>
            </Box>

            {/* Physical Properties */}
            <Box>
              <Typography variant="h6" component="div">
                Physical Properties
              </Typography>
              <List>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Diameter: {data?.rocket?.diameter?.meters} m
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Height: {data?.rocket?.height?.meters} m
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Height: {data?.rocket?.mass?.kg} kg
                  </Typography>
                </ListItem>
              </List>
            </Box>

            {/* Engines */}
            <Box>
              <Typography variant="h6" component="div">
                Engines
              </Typography>

              <List>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Engine Max Loss: {data?.rocket?.engines?.engine_loss_max}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Layout: {data?.rocket?.engines?.layout}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Number: {data?.rocket?.engines?.number}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Propellant 1: {data?.rocket?.engines?.propellant_1}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Propellant 2: {data?.rocket?.engines?.propellant_2}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Thrust at sea-level:{" "}
                    {data?.rocket?.engines?.thrust_sea_level?.kN} kN
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Thrust to weight: {data?.rocket?.engines?.thrust_to_weight}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Thrust vacuum: {data?.rocket?.engines?.thrust_vacuum?.kN} kN
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Type: {data?.rocket?.engines?.type}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Version: {data?.rocket?.engines?.version}
                  </Typography>
                </ListItem>
              </List>
            </Box>

            {/* Stages */}
            <Box>
              <Typography variant="h6" component="div">
                Stages
              </Typography>

              {/* TODO: Check wheter the stages exist */}
              <List>
                {/* First Stage */}
                <ListItem>
                  <Typography variant="subtitle1" component="div">
                    First Stage
                  </Typography>

                  <List></List>
                </ListItem>

                {/* Second Stage */}
                <ListItem>
                  <Typography variant="subtitle1" component="div">
                    Second Stage
                  </Typography>

                  <List></List>
                </ListItem>
              </List>
            </Box>

            {/*
          first_flight
          first_stage {
            burn_time_sec
            engines
            fuel_amount_tons
            reusable
            thrust_vacuum {
              kN
            }
            thrust_sea_level {
              kN
            }
          }

          landing_legs {
            material
            number
          }


          second_stage {
            burn_time_sec
            fuel_amount_tons
            payloads {
              composite_fairing {
                diameter {
                  meters
                }
                height {
                  meters
                }
              }
            }
            thrust {
              kN
            }
          }
          stages
          success_rate_pct
          type
          wikipedia
        }*/}
          </CardContent>
        </CardWrapper>
      </AsyncPage>
    </>
  );
}
