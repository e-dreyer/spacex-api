import { Box } from "@mui/system";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <>
      {/* Header */}
      <Header key="Header" />
      {/* Wrap the entire app in a box */}
      <Box mt={5} p={1} sx={{ display: "flex", justifyContent: "center" }}>
        {children}
      </Box>
    </>
  );
}
