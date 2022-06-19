import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Application from "../../components/sidebar/SideNavbar";

function App() {
  return (
    <Stack direction="row">
      <Application />
      <Box
        sx={{
          display: "flex",
          flex: 1,
        }}
      >
        <Outlet />
      </Box>
    </Stack>
  );
}

export default App;
