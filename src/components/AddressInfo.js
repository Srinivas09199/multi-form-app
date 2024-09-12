import React from 'react';
import { TextField, Box } from '@mui/material';

const AddressInfo = ({ formData, updateFormData, errors }) => {
  return (
    <Box>
      <TextField
        fullWidth
        label="Address Line 1"
        value={formData.addressLine1}
        onChange={(e) => updateFormData('addressLine1', e.target.value)}
        error={!!errors.addressLine1}
        helperText={errors.addressLine1}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Address Line 2"
        value={formData.addressLine2}
        onChange={(e) => updateFormData('addressLine2', e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="City"
        value={formData.city}
        onChange={(e) => updateFormData('city', e.target.value)}
        error={!!errors.city}
        helperText={errors.city}
        margin="normal"
      />
      <TextField
        fullWidth
        label="State"
        value={formData.state}
        onChange={(e) => updateFormData('state', e.target.value)}
        error={!!errors.state}
        helperText={errors.state}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Zip Code"
        value={formData.zipCode}
        onChange={(e) => updateFormData('zipCode', e.target.value)}
        error={!!errors.zipCode}
        helperText={errors.zipCode}
        margin="normal"
      />
    </Box>
  );
};

export default AddressInfo;