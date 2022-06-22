import { Box } from "@mui/system";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <>
      {/* Header */}
      <Header key="Header" />
      {/* Wrap the entire app in a box */}
      <Box mt={8} key="Body" sx={{ width: "100%" }}>
        {children}
      </Box>
    </>
  );
}
