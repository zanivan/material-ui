import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import ColorSchemeToggle from './ColorSchemeToggle';

export default function HeaderSection() {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={1}
      sx={{ mb: 2 }}
    >
      <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
        <Typography level="h2">Rental properties</Typography>
        <ColorSchemeToggle id={undefined} sx={{ alignSelf: 'center' }} />
      </Stack>

      <Typography level="body-md" color="neutral">
        Book your next stay at one of our properties.
      </Typography>
    </Stack>
  );
}
