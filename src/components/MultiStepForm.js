import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Container } from '@mui/material';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Confirmation';
import useFormState from '../hooks/useFormState';

const steps = ['Personal Information', 'Address Information', 'Confirmation'];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { formData, updateFormData, errors, validateStep, resetForm } = useFormState();

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    // Simulate API call
    setTimeout(() => {
      alert('Form submitted successfully!');
      console.log('Form data:', formData);
      resetForm();
      setActiveStep(0);
    }, 1000);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 1:
        return <AddressInfo formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 2:
        return <Confirmation formData={formData} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ width: '100%', mt: 4 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2, mb: 2 }}>
          {getStepContent(activeStep)}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {activeStep === steps.length - 1 ? (
              <Button onClick={handleSubmit}>Submit</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MultiStepForm;