import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import ChartUserByCountry from './ChartUserByCountry';
import StatCard, { StatCardProps } from './StatCard';
import HighlightedCard from './HighlightedCard';
import PageViewsChart from './PageViewsChart';
import CustomizedTreeView from './CustomizedTreeView';

const data: StatCardProps[] = [
  {
    title: 'Users',
    value: '14K',
    interval: 'last 30 days',
    trend: 'up',
    data: [2, 4, 3, 5, 7, 6, 8, 10],
  },
  {
    title: 'Conversions',
    value: '325',
    interval: 'last 30 days',
    trend: 'down',
    data: [10, 7, 6, 8, 5, 4, 4, 2],
  },
  {
    title: 'Event count',
    value: '200K',
    interval: 'last 30 days',
    trend: 'neutral',
    data: [5, 4, 6, 3, 4, 3, 7, 6],
  },
  {
    title: 'Engagements',
    value: '30k',
    interval: 'last 30 days',
    trend: 'up',
    data: [2, 4, 3, 4, 5, 4, 7, 8],
  },
];

export default function MainGrid() {
  return (
    <React.Fragment>
      {/* cards */}

      <Grid container spacing={2} columns={12}>
        {data.map((card, index) => (
          <Grid xs={6} sm={3} md={2} lg={2.25}>
            <StatCard key={index} {...card} />
          </Grid>
        ))}
        <Grid xs={12} md={4} lg={3}>
          <HighlightedCard />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        direction={{ xs: 'row-reverse', md: 'row' }}
        columns={12}
      >
        <Grid xs={12} md={8} lg={9}>
          <PageViewsChart />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Stack spacing={2}>
            <CustomizedTreeView />
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
