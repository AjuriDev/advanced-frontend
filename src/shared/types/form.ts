interface FieldChangeHandlerParams {
  name: string;
  value: string;
}

interface FieldChangeHandler {
  onChange?: (params: FieldChangeHandlerParams) => void;
}

interface FieldProps extends
  Partial<FieldChangeHandlerParams>,
  FieldChangeHandler {
  label?: string,
  hint?: string,
  autofocus?: boolean
}

interface FormSubmitHandler {
  onSubmit?: () => void;
}

interface FieldData<T> {
  value: string,
  name: T,
  disabled?: boolean,
  readOnly?: boolean,
  error?: string,
  hint?: string,
}

type FormData<T extends string | number | symbol> = Record<T, FieldData<T>>;

export {
  FieldChangeHandlerParams,
  FieldChangeHandler,
  FormSubmitHandler,
  FieldProps,
  FieldData,
  FormData,
};
