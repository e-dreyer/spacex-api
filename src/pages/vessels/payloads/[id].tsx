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

import { Payload } from "../../../types/types";

import RocketIcon from "@mui/icons-material/Rocket";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlagIcon from "@mui/icons-material/Flag";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Link from "next/link";

export default function PayloadPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery<{ payload: Payload }>(
    gql`
    {
        payload(id: "${id}") {
          customers
          id
          manufacturer
          nationality
          norad_id
          orbit
          orbit_params {
            apoapsis_km
            arg_of_pericenter
            eccentricity
            epoch
            inclination_deg
            lifespan_years
            longitude
            mean_anomaly
            mean_motion
            periapsis_km
            period_min
            raan
            reference_system
            regime
            semi_major_axis_km
          }
          payload_mass_kg
          payload_mass_lbs
          payload_type
          reused
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
                <Link href={`/vessels/payloads/${data?.payload?.id}`}>
                  {data?.payload?.id}
                </Link>
              </Typography>
            </Box>
            <Box sx={{}}>
              <Stack direction="row" spacing={2}>
                {/* Nationality */}
                <Chip
                  size="small"
                  icon={<FlagIcon />}
                  label={`nationality: ${data?.payload?.nationality}`}
                />
                {/* Manufacturer */}
                <Chip
                  size="small"
                  icon={<BusinessCenterIcon />}
                  label={`manufacturer: ${data?.payload?.manufacturer}`}
                />
                {/* Reused */}
                {data?.payload?.reused ? (
                  <Chip
                    size="small"
                    icon={<AutorenewIcon />}
                    label="reused"
                    color="success"
                  />
                ) : null}
              </Stack>
            </Box>

            {/* Orbit */}
            <Box>
              <Typography variant="h6" component="div">
                Orbit
              </Typography>
              <List>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Orbit: {data?.payload?.orbit}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Apoapsis: {data?.payload?.orbit_params?.apoapsis_km} km
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Periapsis: {data?.payload?.orbit_params?.periapsis_km} km
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Pericenter: {data?.payload?.orbit_params?.arg_of_pericenter}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Eccentricity: {data?.payload?.orbit_params?.eccentricity}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Epoch: {data?.payload?.orbit_params?.epoch}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Inclination: {data?.payload?.orbit_params?.inclination_deg}{" "}
                    degrees
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Lifespan: {data?.payload?.orbit_params?.lifespan_years}{" "}
                    years
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Longitude: {data?.payload?.orbit_params?.longitude}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Mean anomaly: {data?.payload?.orbit_params?.mean_anomaly}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Mean motion: {data?.payload?.orbit_params?.mean_motion}
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography variant="body1" component="div">
                    Period: {data?.payload?.orbit_params?.period_min} minutes
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Raan: {data?.payload?.orbit_params?.raan}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Reference System:{" "}
                    {data?.payload?.orbit_params?.reference_system}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Regime: {data?.payload?.orbit_params?.regime}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Semi-major axis:{" "}
                    {data?.payload?.orbit_params?.semi_major_axis_km} km
                  </Typography>
                </ListItem>
              </List>
            </Box>

            {/* Payload */}
            <Box>
              <Typography variant="h6" component="div">
                Payload
              </Typography>
              <List>
                <ListItem>
                  <Typography variant="body1" component="div">
                    Mass : {data?.payload?.payload_mass_kg} kg
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography variant="body1" component="div">
                    Type: {data?.payload?.payload_type}
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
