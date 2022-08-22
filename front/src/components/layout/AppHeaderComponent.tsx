import * as React from 'react';
import {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import {Grid} from "@mui/material";

const AppHeaderComponent: FC = () => {

  return (
      <Box>
        <AppBar position="static">
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Toolbar disableGutters>
                <Box ml={2}>
                </Box>
                <AdbIcon/>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                >
                  KOTS CRM
                </Typography>
              </Toolbar>
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
              <Toolbar disableGutters>
                <Grid container>
                  <Grid item xs={9}>

                  </Grid>
                  <Grid item xs={3}>
                    <Tooltip title="Open settings">
                      <IconButton>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Toolbar>
            </Grid>
          </Grid>
        </AppBar>
      </Box>
  )
      ;
}

export default AppHeaderComponent;