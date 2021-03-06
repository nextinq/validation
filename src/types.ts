import { RodneCislo } from 'rodnecislo';

/* eslint-disable @typescript-eslint/no-explicit-any */
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
  validate?: (value: any, data?: any, fieldName?: string) => Array<ValidationError>;
};

export type FieldData = {
  fieldName: string;
  value: string | null;
  field: FieldSchema;
};

export type ValidationSchema = {
  [key in string]: FieldSchema;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BirthNumber extends RodneCislo {}
