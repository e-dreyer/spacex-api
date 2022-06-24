import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Breadcrumbs,
  Button,
  Collapse,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LabelIcon from "@mui/icons-material/Label";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { sections } from "../../pages/index";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const getBreadCrumbs = () => {
    const path = router.asPath.split("/");
    let totalPath = "";
    let paths = [];

    for (let p in path) {
      if (path[p]) {
        totalPath += "/" + path[p];
        paths.push({ path: totalPath, text: path[p] });
      }
    }
    return paths;
  };

  return (
    <AppBar position="fixed">
      {/* Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
        <List>
          {Object.keys(sections).map(function (section, sectionIndex) {
            return (
              <>
                {/* Sections */}
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
              </>
            );
          })}
        </List>
      </Drawer>

      {/* Menu Icon */}
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={openDrawer}
        >
          <MenuIcon />
        </IconButton>

        {/* Breadcrumbs */}
        <Typography variant="h6" color="inherit" component="div">
          <Breadcrumbs
            separator={
              <ArrowRightIcon fontSize="small" sx={{ color: "white" }} />
            }
          >
            <Link href={`/`}>
              <Button variant="text" sx={{ color: "white" }}>
                Home
              </Button>
            </Link>
            {getBreadCrumbs().map((breadcrumb, index) => {
              return (
                <Link href={`${breadcrumb.path}`} key={index}>
                  <Button variant="text" sx={{ color: "white" }}>
                    {breadcrumb.text}
                  </Button>
                </Link>
              );
            })}
          </Breadcrumbs>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
