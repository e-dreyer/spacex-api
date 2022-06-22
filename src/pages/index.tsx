import {
  Typography,
  Card,
  CardContent,
  Stack,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import RocketIcon from "@mui/icons-material/Rocket";
import Link from "next/link";

export const pages = [
  {
    name: "launches",
    title: "Launches",
    path: "/launches",
    icon: <RocketLaunchIcon />,
  },
  {
    name: "launchpads",
    title: "Launchpads",
    path: "/launchpads",
    icon: <LocationSearchingIcon />,
  },
  {
    name: "rockets",
    title: "Rockets",
    path: "/rockets",
    icon: <RocketIcon />,
  },
];

export default function HomePage() {
  return (
    <>
      <List sx={{ width: "100%" }}>
        {pages.map((page, index) => {
          return (
            <ListItem key={index}>
              <Link href={`${page.path}`}>
                <ListItemButton>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.title} />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
