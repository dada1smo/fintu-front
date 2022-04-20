import {
  Feedback,
  FormGroup,
  FormGroupRadio,
  Input,
  InputCurrency,
  InputLabel,
  Radio,
  RadioLabel,
  RadioOption,
} from '../styles/Form.styles';

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

export function FormFieldRadio({ name, options, register, errors }) {
  const fieldError = errors ? errors[name] : '';

  return (
    <FormGroup>
      <FormGroupRadio>
        {options.map(({ optionId, label, value }) => {
          return (
            <RadioOption key={optionId}>
              <Radio
                id={optionId}
                name={name}
                type="radio"
                value={value}
                {...register(name)}
              />
              <RadioLabel htmlFor={name}>{label}</RadioLabel>
            </RadioOption>
          );
        })}
      </FormGroupRadio>
      {fieldError && <Feedback>{fieldError.message}</Feedback>}
    </FormGroup>
  );
}

export function FormFieldCurrency({
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
      <InputCurrency
        id={name}
        name={name}
        type="number"
        placeholder={placeholder}
        {...register(name)}
      />
      {fieldError && <Feedback>{fieldError.message}</Feedback>}
    </FormGroup>
  );
}
