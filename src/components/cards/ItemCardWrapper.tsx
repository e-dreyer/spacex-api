import React from "react";

import { Card } from "@mui/material";

type ItemCardWrapperProps = {
  children?: JSX.Element;
};

export default function ItemCardWrapper(props: ItemCardWrapperProps) {
  return (
    <>
      <Card sx={{ width: "100%", maxWidth: "1000px", minWidth: "500px" }}>
        {props.children}
      </Card>
    </>
  );
}
