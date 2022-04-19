import { Feedback, FormGroup, Input, InputLabel } from '../styles/Form.styles';

export function FormFieldText({
  type,
  label,
  name,
  placeholder,
  register,
  errors,
}) {
  const fieldError = errors ? errors[name] : '';

  return (
    <FormGroup>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {fieldError && <Feedback>{fieldError.message}</Feedback>}
    </FormGroup>
  );
}
