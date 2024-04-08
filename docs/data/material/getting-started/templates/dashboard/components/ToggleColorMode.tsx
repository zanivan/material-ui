import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import MenuButton from './MenuButton';

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function ToggleColorMode({ mode, toggleColorMode }: ToggleColorModeProps) {
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <MenuButton
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
      >
        {mode === 'dark' ? (
          <WbSunnyRoundedIcon fontSize="small" />
        ) : (
          <ModeNightRoundedIcon fontSize="small" />
        )}
      </MenuButton>
    </Box>
  );
}

export default ToggleColorMode;
