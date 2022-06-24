import Link from "next/link";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Box,
} from "@mui/material";

import LabelIcon from "@mui/icons-material/Label";

import { sections } from "../../pages";

const section = "Locations";

export default function HomePage() {
  // TODO: Convert to component
  return (
    <>
      <List sx={{ width: "100%" }}>
        <Box>
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
      </List>
    </>
  );
}
