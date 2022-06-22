import {
  AppBar,
  Box,
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
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { pages } from "../../pages/index";

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
    <AppBar position="fixed" sx={{ width: "100%" }}>
      <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
        <List>
          {pages.map((page, index) => {
            return (
              <>
                <ListItem key={index}>
                  <ListItemButton onClick={closeDrawer}>
                    <ListItemIcon>{page.icon}</ListItemIcon>
                    <Link href={page.path}>
                      <ListItemText primary={page.title} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              </>
            );
          })}
        </List>
      </Drawer>
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
