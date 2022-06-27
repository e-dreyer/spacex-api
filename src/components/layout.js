import { Box } from "@mui/system";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Box>
        {/* Header */}
        <Header key="Header" />
        {/* Wrap the entire app in a box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "stretch",
            flexDirection: "column",
            alignItems: "center",
            my: 8,
            width: "70%",
            mx: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
