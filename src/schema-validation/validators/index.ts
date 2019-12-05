/* eslint-disable @typescript-eslint/no-explicit-any */
import { validatePhoneNumber } from './validate-phone-number';
import { validateEmail } from './validate-email';
import { validateCompanyNumber } from './validate-company-number';
import { validateBirthNumber } from './validate-birth-number';
import { FieldData, ValidationError, ErrorSeverity } from '../../types';

const validators: Record<string, any> = {
  PhoneNumber: validatePhoneNumber,
  Email: validateEmail,
  CompanyNumber: validateCompanyNumber,
  BirthNumber: validateBirthNumber
};
type SchemaValidatorFn = (
  fieldData: FieldData,
  errors: Array<ValidationError>,
  severity?: ErrorSeverity
) => void;

export function resolveValidator(name: string): SchemaValidatorFn | null {
  if (!name) {
    return null;
  }
  const validatorFn = validators[name];
  if (!validatorFn) {
    throw new Error(`Cannot resolve validator [${name}]`);
  }
  return validatorFn;
}
