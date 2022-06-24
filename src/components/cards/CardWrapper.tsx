import React from "react";

import { Card } from "@mui/material";

type ItemCardWrapperProps = {
  children?: JSX.Element;
};

export default function ItemCardWrapper(props: ItemCardWrapperProps) {
  return (
    <>
      <Card
        raised
        sx={{
          border: "3px dashed black",
        }}
      >
        {props.children}
      </Card>
    </>
  );
}
