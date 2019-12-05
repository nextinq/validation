import { ErrorSeverity, FieldData, ValidationError } from '../types';

export function requiredError(
  fieldData: FieldData,
  severity: ErrorSeverity = 'Error'
): ValidationError {
  return {
    code: 'Required',
    source: fieldData.fieldName,
    severity,
    message: `${fieldData.fieldName} is required`
  };
}

export function invalidError(
  fieldData: FieldData,
  severity: ErrorSeverity = 'Error'
): ValidationError {
  return {
    code: 'Invalid',
    source: fieldData.fieldName,
    severity,
    message: `${fieldData.fieldName} is invalid`
  };
}
