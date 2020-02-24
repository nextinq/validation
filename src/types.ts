// @flow

export type ErrorSeverity = 'error' | 'warning' | string;

export type ValidationError = {
  source: string;
  code: string;
  message?: string;
  severity?: ErrorSeverity;
};

export type FieldSchema = {
  type?: string;
  required?: boolean;
  severity?: ErrorSeverity;
  requiredSeverity?: ErrorSeverity;
};

export type FieldData = {
  fieldName: string;
  value: string | null;
  field: FieldSchema;
};

export type ValidationSchema = {
  [key in string]: FieldSchema;
};
