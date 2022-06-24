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

import { Dragon } from "../../../types/types";

import RocketIcon from "@mui/icons-material/Rocket";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function DragonPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery<{ dragon: Dragon }>(
    gql`
    {
        dragon (id: "${id}") {
            active
            id
            name
            type
            first_flight
            crew_capacity
            launch_payload_mass {
              kg
              lb
            }
            launch_payload_vol {
              cubic_feet
              cubic_meters
            }
            orbit_duration_yr
            pressurized_capsule {
              payload_volume {
                cubic_feet
                cubic_meters
              }
            }
            return_payload_mass {
              lb
              kg
            }
            return_payload_vol {
              cubic_feet
              cubic_meters
            }
            sidewall_angle_deg
            thrusters {
              amount
              fuel_1
              fuel_2
              pods
              thrust {
                kN
                lbf
              }
              type
            }
            trunk {
              cargo {
                solar_array
                unpressurized_cargo
              }
              trunk_volume {
                cubic_feet
                cubic_meters
              }
            }
            wikipedia
            height_w_trunk {
              feet
              meters
            }
            heat_shield {
              dev_partner
              material
              size_meters
              temp_degrees
            }
            dry_mass_lb
            dry_mass_kg
            diameter {
              feet
              meters
            }
            description
          }
      }
    `
  );

  return (
    <>
      <AsyncPage data={data} loading={loading} error={error}>
        <CardWrapper>
          <CardContent>
            {/* Heading */}
            <Box sx={{ mb: 1 }}>
              <Typography variant="h5" component="h1">
                {data?.dragon.name} - {data?.dragon.type}
              </Typography>
            </Box>

            <Box sx={{}}>
              <Stack direction="row" spacing={2}>
                <StatusChip
                  size="small"
                  label={`status: ${
                    data?.dragon.active ? "active" : "unknown"
                  }`}
                  status={data?.dragon.active ? "active" : "unknown"}
                />
                <Chip
                  size="small"
                  icon={<RocketIcon />}
                  label={`type: ${data?.dragon.type}`}
                />
                <Chip
                  size="small"
                  icon={<CalendarMonthIcon />}
                  label={`first flight: ${data?.dragon.first_flight}`}
                />
                <Chip
                  size="small"
                  icon={<PeopleIcon />}
                  label={`capacity: ${data?.dragon.crew_capacity}`}
                />
              </Stack>
            </Box>

            {/* Physical Properties */}
            <Box sx={{ mb: 1 }}>
              <Typography variant="h6" component="div">
                Physical Properties
              </Typography>

              <List>
                {/* Diameter */}
                <ListItem>
                  <Typography variant="body1" component="div">
                    Diameter: {data?.dragon.diameter?.meters} m
                  </Typography>
                </ListItem>
                {/* Dry Mass */}
                <ListItem>
                  <Typography variant="body1" component="div">
                    Dry Mass: {data?.dragon.dry_mass_kg} kg
                  </Typography>
                </ListItem>
                {/* Height w Trunk */}
                <ListItem>
                  <Typography variant="body1" component="div">
                    Height with Trunk: {data?.dragon.height_w_trunk?.meters} m
                  </Typography>
                </ListItem>
                {/* Launch Payload mass */}
                <ListItem>
                  <Typography variant="body1" component="div">
                    Launch Payload Mass: {data?.dragon.launch_payload_mass?.kg}{" "}
                    kg
                  </Typography>
                </ListItem>
                {/* Launch Payload volume */}
                <ListItem>
                  <Typography variant="body1" component="div">
                    Launch Payload Volume:{" "}
                    {data?.dragon.launch_payload_vol?.cubic_meters} m^3
                  </Typography>
                </ListItem>
                {/* Pressurized Capsule */}
                <ListItem>
                  <Typography variant="body1" component="div">
                    Pressurized Capsule Payload Volume:{" "}
                    {
                      data?.dragon.pressurized_capsule?.payload_volume
                        ?.cubic_meters
                    }{" "}
                    m^3
                  </Typography>
                </ListItem>
                {/* Return Payload Volume */}
                <ListItem>
                  <Typography variant="body1" component="div">
                    Return Payload Mass: {data?.dragon.return_payload_mass?.kg}{" "}
                    kg
                  </Typography>
                </ListItem>
                {/* Return Payload Volum */}
                <ListItem>
                  <Typography variant="body1" component="div">
                    Pressurized Capsule Payload Volume:{" "}
                    {data?.dragon.return_payload_vol?.cubic_meters} m^3
                  </Typography>
                </ListItem>
                {/* Sidewall Angle degrees */}
                <ListItem>
                  <Typography variant="body1" component="div">
                    Sidewall Angle Degrees: {data?.dragon.sidewall_angle_deg}{" "}
                    degrees
                  </Typography>
                </ListItem>
              </List>
            </Box>

            {/* Thrusters */}
            <Box>
              <Typography variant="h6" component="div">
                Thrusters:
              </Typography>
              <List>
                {data?.dragon.thrusters?.map((thruster, thrusterIndex) => {
                  return (
                    <>
                      {/* Amount */}
                      <ListItem>
                        <Typography variant="body2" component="div">
                          Amount: {thruster?.amount}
                        </Typography>
                      </ListItem>
                      {/* Fuel 1 */}
                      <ListItem>
                        <Typography variant="body2" component="div">
                          Fuel 1: {thruster?.fuel_1}
                        </Typography>
                      </ListItem>
                      {/* Fuel 2 */}
                      <ListItem>
                        <Typography variant="body2" component="div">
                          Fuel 2: {thruster?.fuel_2}
                        </Typography>
                      </ListItem>
                      {/* Pods */}
                      <ListItem>
                        <Typography variant="body2" component="div">
                          Pods: {thruster?.pods}
                        </Typography>
                      </ListItem>
                      {/* Thrust */}
                      <ListItem>
                        <Typography variant="body2" component="div">
                          Thrust: {thruster?.thrust?.kN} KN
                        </Typography>
                      </ListItem>
                      {/* Type */}
                      <ListItem>
                        <Typography variant="body2" component="div">
                          Type: {thruster?.type}
                        </Typography>
                      </ListItem>
                    </>
                  );
                })}
              </List>
            </Box>

            {/* Trunk */}
            <Box>
              <Typography variant="h5" component="div">
                Trunk
              </Typography>
              <List>
                {/* Cargo */}

                <ListItem>
                  <Typography variant="body2" component="div">
                    Solar Array: {data?.dragon.trunk?.cargo?.solar_array}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2" component="div">
                    Unpressurized Cargo:{" "}
                    {data?.dragon.trunk?.cargo?.unpressurized_cargo}
                  </Typography>
                </ListItem>

                {/* Volume */}

                <ListItem>
                  <Typography variant="body2" component="div">
                    Trunk Volume:{" "}
                    {data?.dragon.trunk?.trunk_volume?.cubic_meters} m^3
                  </Typography>
                </ListItem>
              </List>
            </Box>

            {/* Heat Shield */}
            <Box>
              <Typography variant="h6" component="div">
                Heat Shield
              </Typography>
              <List>
                {/* Development Partner */}
                <ListItem>
                  <Typography>
                    Development Partner: {data?.dragon.heat_shield?.dev_partner}
                  </Typography>
                </ListItem>

                {/* Material */}
                <ListItem>
                  <Typography>
                    Material: {data?.dragon.heat_shield?.material}
                  </Typography>
                </ListItem>

                {/* Size */}
                <ListItem>
                  <Typography>
                    Size: {data?.dragon.heat_shield?.size_meters} m
                  </Typography>
                </ListItem>

                {/* Temperature */}
                <ListItem>
                  <Typography>
                    Size: {data?.dragon.heat_shield?.temp_degrees} degrees
                  </Typography>
                </ListItem>
              </List>
            </Box>

            {/* Orbit */}
            <Box>
              <Typography variant="h6" component="div">
                Orbit
              </Typography>
              <List>
                <ListItem>
                  <Typography variant="body2" component="div">
                    Duration: {data?.dragon.orbit_duration_yr} years
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </CardContent>
        </CardWrapper>
      </AsyncPage>
    </>
  );
}
