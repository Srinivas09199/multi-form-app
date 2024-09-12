import React from 'react';
import { Typography, Box } from '@mui/material';

const Confirmation = ({ formData }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Please confirm your information:
      </Typography>
      {Object.entries(formData).map(([key, value]) => (
        <Typography key={key}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
        </Typography>
      ))}
    </Box>
  );
};

export default Confirmation;