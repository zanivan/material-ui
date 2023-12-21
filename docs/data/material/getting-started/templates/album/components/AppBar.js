import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ToggleColorMode from './ToggleColorMode';

const logoStyle = {
  width: '160px',
  height: 'auto',
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{ boxShadow: 0, height: 'var(--AppBar-Height)' }}>
        <Toolbar
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: 'background.default',
          }}
        >
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img
              src={
                'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
              }
              style={logoStyle}
            />
          </Box>
          <Button color="primary" variant="contained" sx={{ mr: 1 }}>
            Sign up
          </Button>
          <Button color="primary" variant="outlined">
            Sign in
          </Button>
          <ToggleColorMode />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
