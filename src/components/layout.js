import { Box } from "@mui/system";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Box>
        {/* Header */}
        <Box>
          <Header key="Header" />
        </Box>
        {/* Wrap the entire app in a box */}
        <Box
          sx={{
            border: "5px solid black",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Box sx={{ mt: 1, border: "3px dashed red" }}>{children}</Box>
        </Box>
      </Box>
    </>
  );
}
