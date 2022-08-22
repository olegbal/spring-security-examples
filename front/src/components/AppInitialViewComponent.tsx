import Box from "@mui/material/Box";
import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import AppHeaderComponent from "./layout/AppHeaderComponent";
import {AppInitialDataLoaderComponent} from "./AppInitialDataLoaderComponent";
import CommonNotificationsComponent from "./notifications/CommonNotificationsComponent";

const AppInitialViewComponent: FC = () => {
  return (
      <Box>
        <AppInitialDataLoaderComponent/>
        <Box mb={3}>
          <AppHeaderComponent/>
        </Box>
        <Box>
          <Outlet/>
        </Box>
      </Box>
  );
}
export default AppInitialViewComponent;