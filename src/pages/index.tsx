import Link from "next/link";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Box,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import RocketIcon from "@mui/icons-material/Rocket";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LabelIcon from "@mui/icons-material/Label";
import { useState } from "react";

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
      <List sx={{ width: "100%" }}>
        {/* TODO: Change into a component */}
        {Object.keys(sections).map(function (section, sectionIndex) {
          return (
            // Section
            <Box key={"section-" + sectionIndex}>
              <ListItemButton>
                <ListItemIcon>{sections[section].icon}</ListItemIcon>
                <ListItemText primary={section} />
              </ListItemButton>

              {/* Collapsed Subsection */}
              <Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {/* Subsections */}
                  {sections[section].subsections.map(
                    (subsection, subsectionIndex) => {
                      return (
                        <>
                          <Link
                            href={`${sections[section].path}/${subsection.path}`}
                            key={"subsection-" + subsectionIndex}
                          >
                            <ListItemButton sx={{ pl: 8 }}>
                              <ListItemIcon>
                                <LabelIcon />
                              </ListItemIcon>
                              <ListItemText primary={subsection.title} />
                            </ListItemButton>
                          </Link>
                        </>
                      );
                    }
                  )}
                </List>
              </Collapse>
              <Divider />
            </Box>
          );
        })}
      </List>
    </>
  );
}
