import * as React from 'react';
import { CssVarsProvider, useColorScheme, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Switch from '@mui/joy/Switch';
import Alert from '@mui/joy/Alert';
import Radio from '@mui/joy/Radio';
import Slider from '@mui/joy/Slider';
import JoyMenu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';

// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import MenuIcon from '@mui/icons-material/Menu';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// custom
import Menu from './components/Menu';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
// import { Switch } from '@mui/base';

export const newTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // background: {
        //   body: 'var(--joy-palette-neutral-50)',
        // },
        primary: {
          50: '#fdf7ef',
          100: '#fbedd9',
          200: '#f7d7b1',
          300: '#f1bc80',
          400: '#ea974d',
          500: '#e57928',
          600: '#d7611f',
          700: '#8e3c1e',
          800: '#73341b',
          900: '#3e180c',
        },
        neutral: {
          50: '#f4f5f7',
          100: '#e4e8e9',
          200: '#cbd2d6',
          300: '#a8b3b8',
          400: '#7c8c94',
          500: '#6a7b84',
          600: '#535f67',
          700: '#475057',
          800: '#383d41',
          900: '#232729',
        },
        warning: {
          50: '#ffffe7',
          100: '#feffc1',
          200: '#fffd86',
          300: '#fff341',
          400: '#ffe40d',
          500: '#ffd500',
          600: '#d19c00',
          700: '#a67002',
          800: '#74470f',
          900: '#442504',
          solidColor: 'var(--joy-palette-warning-800)',
          outlinedColor: 'var(--joy-palette-warning-700)',
          plainColor: 'var(--joy-palette-warning-700)',
        },
        danger: {
          50: '#fff2f1',
          100: '#ffe1df',
          200: '#ffc8c5',
          300: '#ffa29d',
          400: '#ff6c64',
          500: '#ff3d33',
          600: '#ed2015',
          700: '#c8160d',
          800: '#881a14',
          900: '#4b0704',
        },
        success: {
          50: '#effce9',
          100: '#ddf8cf',
          200: '#bdf1a5',
          300: '#92e670',
          400: '#6cd744',
          500: '#4cbd25',
          600: '#379719',
          700: '#2c7318',
          800: '#244e19',
          900: '#0e2b08',
          solidBg: 'var(--joy-palette-success-500)',
        },
        focusVisible: 'rgba(229, 121, 40, 0.5)',
      },
    },
    dark: {
      palette: {
        common: {
          black: '#171A1C',
        },
        primary: {
          50: '#fdf7ef',
          100: '#fbedd9',
          200: '#f7d7b1',
          300: '#f1bc80',
          400: '#ea974d',
          500: '#e57928',
          600: '#d7611f',
          700: '#8e3c1e',
          800: '#73341b',
          900: '#3e180c',
          solidBg: 'var(--joy-palette-primary-600)',
          solidHoverBg: 'var(--joy-palette-primary-700)',
          solidActiveBg: 'var(--joy-palette-primary-800)',
          softActiveBg: 'var(--joy-palette-primary-800)',
          outlinedActiveBg: 'var(--joy-palette-primary-800)',
          outlinedHoverBg: 'var(--joy-palette-primary-700)',
          plainActiveBg: 'var(--joy-palette-primary-800)',
          plainHoverBg: 'var(--joy-palette-primary-700)',
        },
        neutral: {
          50: '#f4f5f7',
          100: '#e4e8e9',
          200: '#cbd2d6',
          300: '#a8b3b8',
          400: '#7c8c94',
          500: '#6a7b84',
          600: '#535f67',
          700: '#475057',
          800: '#383d41',
          900: '#232729',
          solidBg: 'var(--joy-palette-neutral-600)',
          solidHoverBg: 'var(--joy-palette-neutral-700)',
          solidActiveBg: 'var(--joy-palette-neutral-800)',
          softActiveBg: 'var(--joy-palette-neutral-800)',
          outlinedActiveBg: 'var(--joy-palette-neutral-800)',
          outlinedHoverBg: 'var(--joy-palette-neutral-700)',
          plainActiveBg: 'var(--joy-palette-neutral-800)',
          plainHoverBg: 'var(--joy-palette-neutral-700)',
        },
        warning: {
          50: '#ffffe7',
          100: '#feffc1',
          200: '#fffd86',
          300: '#fff341',
          400: '#ffe40d',
          500: '#ffd500',
          600: '#d19c00',
          700: '#a67002',
          800: '#74470f',
          900: '#442504',
          solidColor: 'var(--joy-palette-warning-900)',
          solidBg: 'var(--joy-palette-warning-600)',
          solidHoverBg: 'var(--joy-palette-warning-700)',
          solidActiveBg: 'var(--joy-palette-warning-800)',
          softActiveBg: 'var(--joy-palette-warning-800)',
          outlinedActiveBg: 'var(--joy-palette-warning-800)',
          outlinedHoverBg: 'var(--joy-palette-warning-700)',
          plainActiveBg: 'var(--joy-palette-warning-800)',
          plainHoverBg: 'var(--joy-palette-warning-700)',
        },
        danger: {
          50: '#fff2f1',
          100: '#ffe1df',
          200: '#ffc8c5',
          300: '#ffa29d',
          400: '#ff6c64',
          500: '#ff3d33',
          600: '#ed2015',
          700: '#c8160d',
          800: '#881a14',
          900: '#4b0704',
          solidBg: 'var(--joy-palette-danger-600)',
          solidHoverBg: 'var(--joy-palette-danger-700)',
          solidActiveBg: 'var(--joy-palette-danger-800)',
          softActiveBg: 'var(--joy-palette-danger-800)',
          outlinedActiveBg: 'var(--joy-palette-danger-800)',
          outlinedHoverBg: 'var(--joy-palette-danger-700)',
          plainActiveBg: 'var(--joy-palette-danger-800)',
          plainHoverBg: 'var(--joy-palette-danger-700)',
        },
        success: {
          50: '#effce9',
          100: '#ddf8cf',
          200: '#bdf1a5',
          300: '#92e670',
          400: '#6cd744',
          500: '#4cbd25',
          600: '#379719',
          700: '#2c7318',
          800: '#244e19',
          900: '#0e2b08',
          solidBg: 'var(--joy-palette-success-600)',
          solidHoverBg: 'var(--joy-palette-success-700)',
          solidActiveBg: 'var(--joy-palette-success-800)',
          softActiveBg: 'var(--joy-palette-success-800)',
          outlinedActiveBg: 'var(--joy-palette-success-800)',
          outlinedHoverBg: 'var(--joy-palette-success-700)',
          plainActiveBg: 'var(--joy-palette-success-800)',
          plainHoverBg: 'var(--joy-palette-success-700)',
        },
      },
    },
  },
  focus: {
    default: {
      outlineWidth: '2px',
    },
  },
  fontFamily: {
    body: 'Open Sans, var(--gh-fontFamily-fallback)',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === 'md' && {
            minHeight: '32px',
            '--Button-paddingInline': '1rem',
          }),
          ...(ownerState.variant === 'solid' && {
            border: '1px solid rgba(27, 31, 36, 0.15)',
            boxShadow: [
              'inset 0px 1px 0px rgba(210, 210, 210, 0.2)',
              'inset 0px -1px 0px rgba(0, 0, 0, 0.05)',
              '0 1px 0 0 rgba(27, 31, 35, 0.05)',
            ].join(', '),
            '&:active': {
              boxShadow: 'inset 0px 1px 0px rgba(27, 31, 36, 0.2)',
            },
          }),
          ...(ownerState.color === 'neutral' &&
            ownerState.variant === 'outlined' && {
              '&:active': {
                boxShadow: 'none',
              },
            }),
        }),
      },
    },
    JoyList: {
      styleOverrides: {
        root: {
          '--ListItem-radius': '8px',
        },
      },
    },
    JoySheet: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          borderColor: 'var(--joy-palette-neutral-200)',
          ...(ownerState.variant === 'soft' && {
            background: `linear-gradient(var(--joy-palette-neutral-100), var(--joy-palette-neutral-200))`,
          }),
          ...(ownerState.variant === 'solid' && {
            background: `linear-gradient(var(--joy-palette-neutral-200), var(--joy-palette-neutral-500))`,
          }),
          [theme.getColorSchemeSelector('dark')]: {
            borderColor: 'var(--joy-palette-neutral-800)',
            ...(ownerState.variant === 'soft' && {
              background: `linear-gradient(var(--joy-palette-neutral-800), var(--joy-palette-neutral-900))`,
            }),
            ...(ownerState.variant === 'solid' && {
              background: `linear-gradient(var(--joy-palette-neutral-900), var(--joy-palette-common-black))`,
            }),
          },
        }),
      },
    },
    JoyInput: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
            [theme.getColorSchemeSelector('dark')]: {
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
            },
          }),
      },
    },
    JoyDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: '1px solid rgba(27, 31, 36, 0.05)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: '1px solid rgba(27, 31, 36, 0.15)',
          },
        }),
      },
    },
    JoyTabs: {
      styleOverrides: {
        root: {
          '--ListItem-radius': '8px',
        },
      },
    },
    JoyTabList: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            p: 1,
            gap: 0.5,
            bgcolor: 'background.level1',
          }),
      },
    },
    JoyTab: {
      styleOverrides: {
        root: {
          '--Tab-indicatorThickness': '0',
          [`&[aria-selected="true"]`]: {
            boxShadow: [
              'inset 0px 1px 0px rgba(210, 210, 210, 0.2)',
              'inset 0px -1px 0px rgba(0, 0, 0, 0.08)',
            ].join(', '),
            bgcolor: 'background.surface',
            borderRadius: '12px',
            paddingBottom: '6px',
          },
        },
      },
    },
    JoySwitch: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          '--Switch-thumbShadow': `$(theme.vars.shadow.sm)`,
          '--Switch-trackRadius': '4px',
          '--Switch-thumbSize': '16px',
          '--Switch-trackWidth': '42px',
          '--Switch-trackHeight': '22px',
          [theme.getColorSchemeSelector('dark')]: {
            '&:checked': {
              '--Switch-trackBackground': 'var(--joy-palette-success-500)',
            },
          },
        }),
      },
    },
    JoyCard: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          [theme.getColorSchemeSelector('light')]: {
            ...(ownerState.variant === 'soft' && {
              border: '1px solid rgba(27, 31, 36, 0.15)',
              background: `linear-gradient(-45deg,var(--joy-palette-neutral-200), var(--joy-palette-neutral-100))`,
              boxShadow: [
                'inset 0px 1px 0px rgba(250, 250, 250, 0.6)',
                'inset 0px -1px 0px rgba(0, 0, 0, 0.08)',
                // '0px 2px 8px -2px rgba(21 21 21, 0.2)',
                // '0px 6px 12px -2px rgba(21 21 21, 0.2)',
              ].join(', '),
            }),
            ...(ownerState.variant === 'solid' && {
              border: '1px solid rgba(27, 31, 36, 0.15)',
              background: `linear-gradient(-45deg,var(--joy-palette-neutral-400), var(--joy-palette-neutral-300))`,
              boxShadow: [
                'inset 0px 1px 0px rgba(250, 250, 250, 0.2)',
                'inset 0px -1px 0px rgba(0, 0, 0, 0.08)',
                // '0px 1px 2px 0px rgba(21 21 21, 0.12)',
                // '0px 2px 4px 0px rgba(21 21 21, 0.12)',
              ].join(', '),
            }),
            ...(ownerState.variant === 'outlined' && {
              borderColor: 'var(--joy-palette-neutral-200)',
              boxShadow: 'inset 0px -1px 0px rgba(0, 0, 0, 0.07)',
            }),
            ...(ownerState.variant === 'plain' && {
              boxShadow: 'none',
            }),
          },
          [theme.getColorSchemeSelector('dark')]: {
            ...(ownerState.variant === 'soft' && {
              border: '1px solid rgba(27, 31, 36)',
              background: `linear-gradient(-45deg, var(--joy-palette-common-black), var(--joy-palette-neutral-900))`,
              boxShadow: [
                'inset 0px 1px 0px rgba(210, 210, 210, 0.08)',
                'inset 0px -1px 0px rgba(0, 0, 0, 0.8)',
                // '0px 2px 8px -2px rgba(21 21 21, 0.01)',
                // '0px 6px 12px -2px rgba(21 21 21, 0.01)',
              ].join(', '),
            }),
            ...(ownerState.variant === 'solid' && {
              border: '1px solid rgba(27, 31, 36)',
              background: `linear-gradient(-45deg,var(--joy-palette-neutral-900), var(--joy-palette-neutral-800))`,
              boxShadow: [
                'inset 0px 1px 0px rgba(250, 250, 250, 0.08)',
                'inset 0px -1px 0px rgba(0, 0, 0, 0.8)',
                // '0px 1px 2px 0px rgba(21 21 21, 0.01)',
                // '0px 2px 4px 0px rgba(21 21 21, 0.01)',
              ].join(', '),
            }),
            ...(ownerState.variant === 'outlined' && {
              borderColor: 'var(--joy-palette-neutral-800)',
              boxShadow: 'inset 0px -1px 0px rgba(0, 0, 0, 0.07)',
            }),
            ...(ownerState.variant === 'plain' && {
              boxShadow: 'none',
            }),
          },
        }),
      },
    },
    JoyAlert: {
      defaultProps: {
        variant: 'soft',
        color: 'neutral',
      },
    },
  },
});

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="primary"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function FilesNewTheme() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CssVarsProvider disableTransitionOnChange theme={newTheme}>
      <CssBaseline />
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
            md: 'minmax(160px, 300px) minmax(600px, 1fr) minmax(300px, 420px)',
          },
          ...(drawerOpen && {
            height: '100vh',
            overflow: 'hidden',
          }),
        }}
      >
        <Layout.Header>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <IconButton
              variant="outlined"
              size="sm"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              size="sm"
              variant="solid"
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              <FindInPageRoundedIcon />
            </IconButton>
            <Typography component="h1" fontWeight="xl">
              Files
            </Typography>
          </Box>
          <Input
            size="sm"
            placeholder="Search anything…"
            startDecorator={<SearchRoundedIcon color="primary" />}
            endDecorator={
              <IconButton variant="outlined" color="neutral">
                <Typography fontWeight="lg" fontSize="sm" textColor="text.icon">
                  ⌘ + k
                </Typography>
              </IconButton>
            }
            sx={{
              flexBasis: '500px',
              display: {
                xs: 'none',
                sm: 'flex',
              },
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
            <IconButton
              size="sm"
              variant="outlined"
              color="primary"
              sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
            >
              <SearchRoundedIcon />
            </IconButton>
            <IconButton
              size="sm"
              variant="outlined"
              color="primary"
              component="a"
              href="/blog/first-look-at-joy/"
            >
              <BookRoundedIcon />
            </IconButton>
            <Menu
              id="app-selector"
              control={
                <IconButton size="sm" variant="outlined" color="primary" aria-label="Apps">
                  <GridViewRoundedIcon />
                </IconButton>
              }
              menus={[
                {
                  label: 'Email',
                  href: '/joy-ui/getting-started/templates/email/',
                },
                {
                  label: 'Team',
                  href: '/joy-ui/getting-started/templates/team/',
                },
                {
                  label: 'Files',
                  active: true,
                  href: '/joy-ui/getting-started/templates/files/',
                  'aria-current': 'page',
                },
              ]}
            />
            <ColorSchemeToggle />
          </Box>
        </Layout.Header>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.Main>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 2,
            }}
          >
            <Sheet variant="outlined" sx={{ borderRadius: 'sm', gridColumn: '1/-1' }}>
              <Table
                sx={{
                  '--TableCell-paddingX': '1rem',
                  '--TableCell-paddingY': '1rem',
                }}
              >
                <thead>
                  <tr>
                    <th>Folder name</th>
                    <th>Date modified</th>
                    <th>Size</th>
                    <th>Users</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Typography
                        level="body-sm"
                        startDecorator={<FolderOpenIcon color="primary" />}
                        sx={{ alignItems: 'flex-start' }}
                      >
                        Travel pictures
                      </Typography>
                    </td>
                    <td>21 October 2011, 3PM</td>
                    <td>
                      <Typography level="body-sm" color="success">
                        987.5MB
                      </Typography>
                    </td>
                    <td>
                      <AvatarGroup
                        size="sm"
                        sx={{ '--AvatarGroup-gap': '-8px', '--Avatar-size': '24px' }}
                      >
                        <Avatar
                          src="https://i.pravatar.cc/24?img=6"
                          srcSet="https://i.pravatar.cc/48?img=6 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=7"
                          srcSet="https://i.pravatar.cc/48?img=7 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=8"
                          srcSet="https://i.pravatar.cc/48?img=8 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=9"
                          srcSet="https://i.pravatar.cc/48?img=9 2x"
                        />
                      </AvatarGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Typography
                        level="body-sm"
                        startDecorator={<FolderOpenIcon color="primary" />}
                        sx={{ alignItems: 'flex-start' }}
                      >
                        Important documents
                      </Typography>
                    </td>
                    <td>26 May 2010, 7PM</td>
                    <td>
                      <Typography level="body-sm" color="success">
                        123.3KB
                      </Typography>
                    </td>
                    <td>
                      <AvatarGroup
                        size="sm"
                        sx={{ '--AvatarGroup-gap': '-8px', '--Avatar-size': '24px' }}
                      >
                        <Avatar
                          src="https://i.pravatar.cc/24?img=6"
                          srcSet="https://i.pravatar.cc/48?img=6 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=7"
                          srcSet="https://i.pravatar.cc/48?img=7 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=8"
                          srcSet="https://i.pravatar.cc/48?img=8 2x"
                        />
                        <Avatar
                          src="https://i.pravatar.cc/24?img=9"
                          srcSet="https://i.pravatar.cc/48?img=9 2x"
                        />
                      </AvatarGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Sheet>
            <Sheet
              variant="outlined"
              sx={{
                display: { xs: 'inherit', sm: 'none' },
                borderRadius: 'sm',
                overflow: 'auto',
                '& > *': {
                  '&:nth-child(n):not(:nth-last-child(-n+4))': {
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  },
                },
              }}
            >
              <List
                aria-labelledby="table-in-list"
                sx={{
                  '& .JoyListItemButton-root': { p: '0px' },
                }}
              >
                <ListItem>
                  <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
                    <ListItemContent sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Typography
                          level="body-sm"
                          startDecorator={<FolderOpenIcon color="primary" />}
                          sx={{ alignItems: 'flex-start' }}
                        >
                          Travel pictures
                        </Typography>
                        <Typography level="body-sm" sx={{ color: 'success.600' }}>
                          987.5MB
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mt: 2,
                        }}
                      >
                        <Box>
                          <AvatarGroup
                            size="sm"
                            sx={{
                              '--AvatarGroup-gap': '-8px',
                              '--Avatar-size': '24px',
                            }}
                          >
                            <Avatar
                              src="https://i.pravatar.cc/24?img=6"
                              srcSet="https://i.pravatar.cc/48?img=6 2x"
                            />
                            <Avatar
                              src="https://i.pravatar.cc/24?img=7"
                              srcSet="https://i.pravatar.cc/48?img=7 2x"
                            />
                            <Avatar
                              src="https://i.pravatar.cc/24?img=8"
                              srcSet="https://i.pravatar.cc/48?img=8 2x"
                            />
                            <Avatar
                              src="https://i.pravatar.cc/24?img=9"
                              srcSet="https://i.pravatar.cc/48?img=9 2x"
                            />
                          </AvatarGroup>
                        </Box>
                        <Typography level="body-sm">21 October 2011, 3PM</Typography>
                      </Box>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
                    <ListItemContent sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Typography
                          level="body-sm"
                          startDecorator={<FolderOpenIcon color="primary" />}
                          sx={{ alignItems: 'flex-start' }}
                        >
                          Important documents
                        </Typography>
                        <Typography level="body-sm" sx={{ color: 'success.600' }}>
                          123.3KB
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mt: 2,
                        }}
                      >
                        <Box>
                          <AvatarGroup
                            size="sm"
                            sx={{
                              '--AvatarGroup-gap': '-8px',
                              '--Avatar-size': '24px',
                            }}
                          >
                            <Avatar
                              src="https://i.pravatar.cc/24?img=6"
                              srcSet="https://i.pravatar.cc/48?img=6 2x"
                            />
                            <Avatar
                              src="https://i.pravatar.cc/24?img=7"
                              srcSet="https://i.pravatar.cc/48?img=7 2x"
                            />
                            <Avatar
                              src="https://i.pravatar.cc/24?img=8"
                              srcSet="https://i.pravatar.cc/48?img=8 2x"
                            />
                            <Avatar
                              src="https://i.pravatar.cc/24?img=9"
                              srcSet="https://i.pravatar.cc/48?img=9 2x"
                            />
                          </AvatarGroup>
                        </Box>
                        <Typography level="body-sm">26 May 2010, 7PM</Typography>
                      </Box>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              </List>
            </Sheet>
            <Card variant="plain">
              <AspectRatio ratio="16/9" color="primary">
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.plainColor',
                  }}
                >
                  .zip
                </Typography>
              </AspectRatio>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography>platform_ios.zip</Typography>
                  <Typography level="body-xs" mt={0.5}>
                    Added 26 May 2011
                  </Typography>
                </Box>
                <IconButton variant="plain" color="neutral">
                  <EditOutlinedIcon />
                </IconButton>
              </Box>
            </Card>
            <Card variant="outlined">
              <AspectRatio ratio="16/9" color="primary">
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.plainColor',
                  }}
                >
                  .zip
                </Typography>
              </AspectRatio>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography>platform_ios.zip</Typography>
                  <Typography level="body-xs" mt={0.5}>
                    Added 26 May 2011
                  </Typography>
                </Box>
                <IconButton variant="plain" color="neutral">
                  <EditOutlinedIcon />
                </IconButton>
              </Box>
            </Card>
            <Card variant="soft">
              <AspectRatio ratio="16/9" color="primary">
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.plainColor',
                  }}
                >
                  .zip
                </Typography>
              </AspectRatio>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography>platform_ios.zip</Typography>
                  <Typography level="body-xs" mt={0.5}>
                    Added 26 May 2011
                  </Typography>
                </Box>
                <IconButton variant="plain" color="neutral">
                  <EditOutlinedIcon />
                </IconButton>
              </Box>
            </Card>
            <Card variant="solid">
              <AspectRatio ratio="16/9" color="primary">
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.plainColor',
                  }}
                >
                  .zip
                </Typography>
              </AspectRatio>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography>platform_ios.zip</Typography>
                  <Typography level="body-xs" mt={0.5}>
                    Added 26 May 2011
                  </Typography>
                </Box>
                <IconButton variant="plain" color="neutral">
                  <EditOutlinedIcon />
                </IconButton>
              </Box>
            </Card>
            <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'row' }}>
              <Sheet
                variant="soft"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  p: 0.5,
                }}
              >
                <Button variant="solid" color="primary">
                  Label
                </Button>
                <Button variant="soft" color="primary">
                  Label
                </Button>
                <Button variant="outlined" color="primary">
                  Label
                </Button>
                <Button variant="plain" color="primary">
                  Label
                </Button>
              </Sheet>
              <Sheet
                variant="solid"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  p: 0.5,
                }}
              >
                <Button variant="solid" color="neutral">
                  Label
                </Button>
                <Button variant="soft" color="neutral">
                  Label
                </Button>
                <Button variant="outlined" color="neutral">
                  Label
                </Button>
                <Button variant="plain" color="neutral">
                  Label
                </Button>
              </Sheet>
            </Card>
          </Box>
        </Layout.Main>
        <Sheet
          variant="outlined"
          sx={{
            display: { xs: 'none', sm: 'initial' },
            borderTop: '0px',
          }}
        >
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ flex: 1 }}>torres-del-paine.png</Typography>
            <IconButton variant="outlined" color="neutral" size="sm">
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <Tabs>
            <TabList>
              <Tab>Details</Tab>
              <Tab>Activity</Tab>
            </TabList>
          </Tabs>
          <AspectRatio ratio="21/9">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=774"
            />
          </AspectRatio>
          <Box sx={{ p: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
            <Typography level="body-sm" mr={1}>
              Shared with
            </Typography>
            <AvatarGroup size="sm" sx={{ '--Avatar-size': '24px' }}>
              <Avatar
                src="https://i.pravatar.cc/24?img=6"
                srcSet="https://i.pravatar.cc/48?img=6 2x"
              />
              <Avatar
                src="https://i.pravatar.cc/24?img=7"
                srcSet="https://i.pravatar.cc/48?img=7 2x"
              />
              <Avatar
                src="https://i.pravatar.cc/24?img=8"
                srcSet="https://i.pravatar.cc/48?img=8 2x"
              />
              <Avatar
                src="https://i.pravatar.cc/24?img=9"
                srcSet="https://i.pravatar.cc/48?img=9 2x"
              />
            </AvatarGroup>
          </Box>
          <Divider />
          <Box
            sx={{
              gap: 2,
              p: 2,
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              '& > *:nth-child(odd)': { color: 'text.secondary' },
            }}
          >
            <Typography level="body-sm">Type</Typography>
            <Typography level="body-sm" textColor="text.primary">
              Image
            </Typography>

            <Typography level="body-sm">Size</Typography>
            <Typography level="body-sm" textColor="text.primary">
              3,6 MB (3,258,385 bytes)
            </Typography>

            <Typography level="body-sm">Storage used</Typography>
            <Typography level="body-sm" textColor="text.primary">
              3,6 MB (3,258,385 bytes)
            </Typography>

            <Typography level="body-sm">Location</Typography>
            <Typography level="body-sm" textColor="text.primary">
              Travel pictures
            </Typography>

            <Typography level="body-sm">Owner</Typography>
            <Typography level="body-sm" textColor="text.primary">
              Michael Scott
            </Typography>

            <Typography level="body-sm">Modified</Typography>
            <Typography level="body-sm" textColor="text.primary">
              26 October 2016
            </Typography>

            <Typography level="body-sm">Created</Typography>
            <Typography level="body-sm" textColor="text.primary">
              5 August 2016
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', gap: 2, py: 2, px: 1, alignItems: 'center' }}>
            <Button variant="plain" size="sm" endDecorator={<EditOutlinedIcon />}>
              Add a description
            </Button>
            <Switch />
            <Radio value="Label" label="Label" variant="solid" />
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            <Alert
              startDecorator={<AccountCircleRoundedIcon />}
              endDecorator={
                <IconButton variant="plain" size="sm" color="neutral">
                  <CloseRoundedIcon />
                </IconButton>
              }
              sx={{ m: 1 }}
            >
              This is a Joy UI Alert — check it out!
            </Alert>
          </Box>
          <Divider />
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <Slider />
          </Box>
          <Divider />
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <Button
              ref={buttonRef}
              id="basic-demo-button"
              aria-controls={'basic-menu'}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="outlined"
              color="neutral"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Dashboard
            </Button>
            <JoyMenu
              id="basic-menu"
              anchorEl={buttonRef.current}
              open={open}
              onClose={handleClose}
              aria-labelledby="basic-demo-button"
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </JoyMenu>
          </Box>
          <Divider />
        </Sheet>
      </Layout.Root>
    </CssVarsProvider>
  );
}
