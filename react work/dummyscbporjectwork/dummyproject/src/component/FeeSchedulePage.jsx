import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import FeeScheduleFilter from './FeeScheduleFilter';
import FeeScheduleSearch from './FeeScheduleSearch';
import FeeScheduleTable from './FeeScheduleTable';
import FeeScheduleButton from './FeeScheduleButton';

export default function FeeSchedulePage() {
  return (
    <>
   
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">Fee Schedule</Typography>
        <FeeScheduleButton />
      </Box>
     
      
      
      
    </Container>
    <FeeScheduleTable />
    </>
  );
}