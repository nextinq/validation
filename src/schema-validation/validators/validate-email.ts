import { FieldData, ValidationError } from '../../types';
import { invalidError } from '../errors';
import { trimValue } from '../trim-value';
import { validators } from '../..';

export function validateEmail(
  fieldData: FieldData,
  errors: Array<ValidationError>,
  severity = 'Error'
): void {
  if (!fieldData) {
    return;
  }
  if (trimValue(fieldData.value) === '') {
    return;
  }
  if (!validators.isEmail(fieldData.value)) {
    errors.push(invalidError(fieldData, severity));
  }
}
