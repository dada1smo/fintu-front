import { Controller } from 'react-hook-form';
import {
  CheckboxCheck,
  CheckboxLabel,
  Feedback,
  FormGroup,
  FormGroupRadio,
  HiddenCheckbox,
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
  step,
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
        step={step}
        placeholder={placeholder}
        {...register(name)}
      />
      {fieldError && <Feedback>{fieldError.message}</Feedback>}
    </FormGroup>
  );
}

export function FormFieldRadio({
  name,
  options,
  register,
  errors,
  instruction,
  onChange,
}) {
  const fieldError = errors ? errors[name] : '';

  return (
    <FormGroup>
      <InputLabel>{instruction}</InputLabel>
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
              <RadioLabel htmlFor={optionId}>{label}</RadioLabel>
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
        step="0.01"
        placeholder={placeholder}
        {...register(name)}
      />
      {fieldError && <Feedback>{fieldError.message}</Feedback>}
    </FormGroup>
  );
}

export function Checkbox({ label, name, checked, errors, onChange }) {
  const fieldError = errors ? errors[name] : '';

  return (
    <FormGroup>
      <CheckboxLabel>
        <HiddenCheckbox
          id={name}
          name={name}
          type="checkbox"
          onChange={onChange}
        />
        <CheckboxCheck
          checked={checked}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={checked ? '#fff' : 'none'} // only show the checkmark when `isCheck` is `true`
          />
        </CheckboxCheck>
        {label}
      </CheckboxLabel>
      {fieldError && <Feedback>{fieldError.message}</Feedback>}
    </FormGroup>
  );
}

export function FormFieldCheckbox({ label, name, errors, register, control }) {
  return (
    <Controller
      {...{
        control,
        register,
        name: name,
        rules: {},
        render: ({ field: { onChange, onBlur, value, ref } }) => (
          <Checkbox
            onChange={onChange}
            onBlur={onBlur}
            checked={value}
            label={label}
            errors={errors}
          />
        ),
      }}
    />
  );
}
