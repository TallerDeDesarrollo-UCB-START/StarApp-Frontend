import { useState, useEffect } from 'react';

const UtilizarFormulario = (callback, validate) => {
  const [values, setValues] = useState({
    nombre: '',
    email: '',
    nombreEvento: '',
    fechaEvento:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  ) // eslint-disable-line react-hooks/exhaustive-deps

  return { handleChange, handleSubmit, values, errors };
};

export default UtilizarFormulario;
