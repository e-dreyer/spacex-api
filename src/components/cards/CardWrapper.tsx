import React from "react";

import { Card, CardContent } from "@mui/material";

type ItemCardWrapperProps = {
  children?: JSX.Element[] | JSX.Element;
};

export default function ItemCardWrapper(props: ItemCardWrapperProps) {
  return (
    <>
      <Card raised sx={{ width: "100%" }}>
        <CardContent>{props.children}</CardContent>
      </Card>
    </>
  );
}
