// import React from 'react';
// import { Box, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
// import FeeScheduleSearch from './FeeScheduleSearch';

// export default function FeeScheduleFilters() {
//   return (
//     <Box display="flex" alignItems="center" >
//       <Button variant="contained">Draft</Button>
//       <Button variant="contained">Pending Approval</Button>
//       <Button variant="contained">Review</Button>
//       <ToggleButtonGroup exclusive>
//         <ToggleButton value="billing">Group by: Billing Schedule</ToggleButton>
//         <ToggleButton value="client">Group by: Client</ToggleButton>
//         <FeeScheduleSearch />
//       </ToggleButtonGroup>
//     </Box>
//   );
// }

// FeeScheduleFilters.jsx


// import { Box, Button, ToggleButtonGroup, ToggleButton, TextField } from '@mui/material';

// export default function FeeScheduleFilters({
//   filterStatus,
//   setFilterStatus,
//   groupBy,
//   setGroupBy,
//   searchQuery,
//   setSearchQuery,
// }) {
//   const handleStatusFilter = (status) => {
//     setFilterStatus(status);
//   };

//   const handleGroupBy = (_, value) => {
//     setGroupBy(value);
//   };

//   return (
//     <Box display="flex" alignItems="center" gap={1} mb={2}>
//       <Button variant={filterStatus === 'Draft' ? 'contained' : 'outlined'} onClick={() => handleStatusFilter('Draft')}>
//         Draft
//       </Button>
//       <Button variant={filterStatus === 'Pending Approval' ? 'contained' : 'outlined'} onClick={() => handleStatusFilter('Pending Approval')}>
//         Pending Approval
//       </Button>
//       <Button variant={filterStatus === 'Review' ? 'contained' : 'outlined'} onClick={() => handleStatusFilter('Review')}>
//         Review
//       </Button>

//       <ToggleButtonGroup value={groupBy} exclusive onChange={handleGroupBy} size="small">
//         <ToggleButton value="billing">Group by: Billing Schedule</ToggleButton>
//         <ToggleButton value="client">Group by: Client</ToggleButton>
//       </ToggleButtonGroup>

//       <TextField
//         label="Search"
//         size="small"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//     </Box>
//   );
// }

import React from 'react';
import { Box } from '@mui/material';
import {
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
  GridToolbarContainer,
} from '@mui/x-data-grid';

export default function FeeScheduleFilters() {
  return (
    <Box mb={2}>
      <GridToolbarContainer>
        <GridToolbarColumnsButton />   {/* Column selector icon */}
        <GridToolbarFilterButton />    {/* Filter icon */}
        <GridToolbarQuickFilter />     {/* Search bar with search icon */}
      </GridToolbarContainer>
    </Box>
  );
}

