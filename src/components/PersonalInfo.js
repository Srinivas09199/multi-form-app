import React from 'react';
import { TextField, Box } from '@mui/material';

const PersonalInfo = ({ formData, updateFormData, errors }) => {
  return (
    <Box>
      <TextField
        fullWidth
        label="Name"
        value={formData.name}
        onChange={(e) => updateFormData('name', e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        value={formData.email}
        onChange={(e) => updateFormData('email', e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Phone"
        value={formData.phone}
        onChange={(e) => updateFormData('phone', e.target.value)}
        error={!!errors.phone}
        helperText={errors.phone}
        margin="normal"
      />
    </Box>
  );
};

export default PersonalInfo;