import { FieldData, ValidationError } from '../../types';
import { requiredError } from '../errors';
import { trimValue } from '../trim-value';

export function validateRequired(
  fieldData: FieldData,
  errors: Array<ValidationError>,
  severity = 'Error'
): void {
  if (!fieldData) {
    return;
  }
  const isValid = trimValue(fieldData.value) !== '';
  if (!isValid) {
    errors.push(requiredError(fieldData, severity));
  }
}
