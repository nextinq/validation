/* eslint-disable @typescript-eslint/no-explicit-any */
import { validateRequired } from './validators/validate-required';
import { resolveValidator } from './validators';
import { ValidationError, ValidationSchema } from '../types';

export function validateSchema(
  schema: ValidationSchema,
  data: Record<string, any>
): Array<ValidationError> {
  const errors: Array<ValidationError> = [];
  for (const schemaFieldName in schema) {
    const field = schema[schemaFieldName];
    const value = data[schemaFieldName];
    const fieldData = { fieldName: schemaFieldName, field, value };
    const severity = field.severity || 'Error';
    const requiredSeverity = field.requiredSeverity || 'Error';
    if (field.required) {
      validateRequired(fieldData, errors, requiredSeverity);
    }
    if (field.type) {
      const validationFn = resolveValidator(field.type);
      if (validationFn) {
        validationFn(fieldData, errors, severity);
      }
    }
  }
  return errors;
}
