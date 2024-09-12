import { useState, useEffect } from 'react';
import { validateField } from '../utils/validation';
import { saveToLocalStorage, loadFromLocalStorage, clearLocalStorage } from '../utils/localStorage';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zipCode: '',
};

const useFormState = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = loadFromLocalStorage('formData');
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const updateFormData = (field, value) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    saveToLocalStorage('formData', newFormData);
    
    if (errors[field]) {
      setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
    }
  };

  const validateStep = (step) => {
    const fieldsToValidate = {
      0: ['name', 'email', 'phone'],
      1: ['addressLine1', 'city', 'state', 'zipCode'],
    };

    const stepErrors = {};
    fieldsToValidate[step].forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        stepErrors[field] = error;
      }
    });

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    clearLocalStorage('formData');
  };

  return { formData, updateFormData, errors, validateStep, resetForm };
};

export default useFormState;