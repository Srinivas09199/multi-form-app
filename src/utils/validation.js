export const validateField = (field, value) => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : 'Name is required';
      case 'email':
        return /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email format';
      case 'phone':
        return /^\d{10}$/.test(value) ? '' : 'Phone must be 10 digits';
      case 'addressLine1':
      case 'city':
      case 'state':
        return value.trim() ? '' : `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      case 'zipCode':
        return /^\d{6}$/.test(value) ? '' : 'Zip code must be 6 digits';
      default:
        return '';
    }
  };