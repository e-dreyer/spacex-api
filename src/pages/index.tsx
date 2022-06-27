import Image from "next/image";
import Link from "next/link";

import {
  Box,
  ImageListItem,
  ImageListItemBar,
  Button,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import RocketIcon from "@mui/icons-material/Rocket";
import PageviewIcon from "@mui/icons-material/Pageview";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import capsules_thumbnail from "../../public/images/capsule_thumbnail.jpg";
import rockets_thumbnail from "../../public/images/rockets_thumbnail.jpg";
import dragon_thumbnail from "../../public/images/dragon_thumbnail.jpg";
import missions_thumbnail from "../../public/images/missions_thumbnail.jpg";
import launches_thumbnail from "../../public/images/launches_thumbnail.jpg";
import ships_thumbnail from "../../public/images/ships_thumbnail.jpg";
import payloads_thumbnail from "../../public/images/payloads_thumbnail.jpg";
import launchpad_thumbnail from "../../public/images/launchpad_thumbnail.jpg";

type Section = {
  subsections: Subsection[];
  icon: any;
  name: string;
  title: string;
  path: string;
};

type Subsection = {
  name: string;
  title: string;
  path: string;
};

export const sections: { [key: string]: Section } = {
  Vessels: {
    subsections: [
      {
        name: "capsules",
        title: "Capsules",
        path: "/capsules",
      },
      {
        name: "rockets",
        title: "Rockets",
        path: "/rockets",
      },
      {
        name: "dragons",
        title: "Dragons",
        path: "/dragons",
      },
      {
        name: "payloads",
        title: "Payloads",
        path: "/payloads",
      },
      {
        name: "ships",
        title: "Ships",
        path: "/ships",
      },
    ],
    icon: <RocketIcon />,
    name: "vessels",
    title: "Vessels",
    path: "/vessels",
  },
  Locations: {
    subsections: [
      {
        name: "launchpads",
        title: "Launchpads",
        path: "/launchpads",
      },
    ],
    icon: <LocationOnIcon />,
    name: "locations",
    title: "Locations",
    path: "/locations",
  },
  Events: {
    subsections: [
      {
        name: "launches",
        title: "Launches",
        path: "/launches",
      },
      {
        name: "missions",
        title: "Missions",
        path: "/missions",
      },
    ],
    icon: <CalendarMonthIcon />,
    name: "events",
    title: "Events",
    path: "/events",
  },
};

export default function HomePage() {
  return (
    <>
      <Paper elevation={3} sx={{ m: 1, borderRadius: 2, width: "100%" }}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            p: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="div">
            Vessels
          </Typography>
        </Box>

        <Box sx={{ mx: 1, p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <ImageListItem>
                <Image
                  src={capsules_thumbnail}
                  alt="Picture of the author"
                  width={"800px"}
                  height={"533px"}
                />
                <ImageListItemBar
                  title="Capsules"
                  actionIcon={
                    <Link href="/vessels/capsules">
                      <Button
                        variant="outlined"
                        sx={{
                          m: 1,
                          color: "white",
                          borderColor: "transparent",
                          ":hover": { borderColor: "white" },
                        }}
                      >
                        <PageviewIcon />
                      </Button>
                    </Link>
                  }
                />
              </ImageListItem>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <ImageListItem>
                <Image
                  src={rockets_thumbnail}
                  alt="Picture of the author"
                  width={"800px"}
                  height={"533px"}
                />
                <ImageListItemBar
                  title="Rockets"
                  actionIcon={
                    <Link href="/vessels/rockets">
                      <Button
                        variant="outlined"
                        sx={{
                          m: 1,
                          color: "white",
                          borderColor: "transparent",
                          ":hover": { borderColor: "white" },
                        }}
                      >
                        <PageviewIcon />
                      </Button>
                    </Link>
                  }
                />
              </ImageListItem>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <ImageListItem>
                <Image
                  src={dragon_thumbnail}
                  alt="Picture of the author"
                  width={"800px"}
                  height={"533px"}
                />
                <ImageListItemBar
                  title="Dragons"
                  actionIcon={
                    <Link href="/vessels/dragons">
                      <Button
                        variant="outlined"
                        sx={{
                          m: 1,
                          color: "white",
                          borderColor: "transparent",
                          ":hover": { borderColor: "white" },
                        }}
                      >
                        <PageviewIcon />
                      </Button>
                    </Link>
                  }
                />
              </ImageListItem>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <ImageListItem>
                <Image
                  src={ships_thumbnail}
                  alt="Picture of the author"
                  width={"800px"}
                  height={"533px"}
                />
                <ImageListItemBar
                  title="Ships"
                  actionIcon={
                    <Link href="/vessels/ships">
                      <Button
                        variant="outlined"
                        sx={{
                          m: 1,
                          color: "white",
                          borderColor: "transparent",
                          ":hover": { borderColor: "white" },
                        }}
                      >
                        <PageviewIcon />
                      </Button>
                    </Link>
                  }
                />
              </ImageListItem>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <ImageListItem>
                <Image
                  src={payloads_thumbnail}
                  alt="Picture of the author"
                  width={"800px"}
                  height={"533px"}
                />
                <ImageListItemBar
                  title="Payloads"
                  actionIcon={
                    <Link href="/vessels/payloads">
                      <Button
                        variant="outlined"
                        sx={{
                          m: 1,
                          color: "white",
                          borderColor: "transparent",
                          ":hover": { borderColor: "white" },
                        }}
                      >
                        <PageviewIcon />
                      </Button>
                    </Link>
                  }
                />
              </ImageListItem>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ m: 1, borderRadius: 2, width: "100%" }}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            p: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="div">
            Events
          </Typography>
        </Box>

        <Box sx={{ mx: 1, p: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <ImageListItem>
                <Image
                  src={missions_thumbnail}
                  alt="Picture of the author"
                  width={"800px"}
                  height={"533px"}
                />
                <ImageListItemBar
                  title="Missions"
                  actionIcon={
                    <Link href="/events/missions">
                      <Button
                        variant="outlined"
                        sx={{
                          m: 1,
                          color: "white",
                          borderColor: "transparent",
                          ":hover": { borderColor: "white" },
                        }}
                      >
                        <PageviewIcon />
                      </Button>
                    </Link>
                  }
                />
              </ImageListItem>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <ImageListItem>
                <Image
                  src={launches_thumbnail}
                  alt="Picture of the author"
                  width={"800px"}
                  height={"533px"}
                />
                <ImageListItemBar
                  title="Launches"
                  actionIcon={
                    <Link href="/events/launches">
                      <Button
                        variant="outlined"
                        sx={{
                          m: 1,
                          color: "white",
                          borderColor: "transparent",
                          ":hover": { borderColor: "white" },
                        }}
                      >
                        <PageviewIcon />
                      </Button>
                    </Link>
                  }
                />
              </ImageListItem>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ m: 1, borderRadius: 2, width: "100%" }}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            p: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="div">
            Locations
          </Typography>
        </Box>

        <Box sx={{ mx: 1, p: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <ImageListItem>
                <Image
                  src={launchpad_thumbnail}
                  alt="Picture of the author"
                  width={"800px"}
                  height={"533px"}
                />
                <ImageListItemBar
                  title="Launchpads"
                  actionIcon={
                    <Link href="/locations/launchpads">
                      <Button
                        variant="outlined"
                        sx={{
                          m: 1,
                          color: "white",
                          borderColor: "transparent",
                          ":hover": { borderColor: "white" },
                        }}
                      >
                        <PageviewIcon />
                      </Button>
                    </Link>
                  }
                />
              </ImageListItem>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}
