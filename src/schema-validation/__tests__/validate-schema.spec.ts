import { validateSchema } from '../validate-schema';

describe('hooked-form/validate-schema', () => {
  describe('empty data', () => {
    const schema = { partnerCode: { required: true } };
    const errors = validateSchema(schema, {});
    const isValid = errors.length === 0;

    it('is not valid', () => {
      expect(isValid).toBeFalsy();
    });

    it('partnerCode is required', () => {
      expect(errors).toHaveLength(1);
      const err = errors[0];
      expect(err).toMatchObject({ code: 'Required', source: 'partnerCode' });
    });
  });
  describe('validate partnerCode', () => {
    const schema = { partnerCode: { required: true } };
    it('is ok', () => {
      const errors = validateSchema(schema, { partnerCode: '123' });
      const isValid = errors.length === 0;
      expect(isValid).toBeTruthy();
    });

    it('is trimmed', () => {
      const errors = validateSchema(schema, { partnerCode: '    ' });
      const isValid = errors.length === 0;
      expect(isValid).toBeFalsy();
      expect(errors).toHaveLength(1);
      const err = errors[0];
      expect(err).toMatchObject({ code: 'Required', source: 'partnerCode' });
    });
  });
  describe('validate phoneNumber', () => {
    const schema = { phoneNumber: { type: 'PhoneNumber' } };
    it('valid phone', () => {
      const errors = validateSchema(schema, { phoneNumber: '777888999' });
      const isValid = errors.length === 0;
      expect(isValid).toBeTruthy();
    });

    it('missing phone', () => {
      const errors = validateSchema(schema, {});
      const isValid = errors.length === 0;
      expect(isValid).toBeTruthy();
    });

    it('invalid phone', () => {
      const errors = validateSchema(schema, { phoneNumber: 'abc' });
      const isValid = errors.length === 0;
      expect(isValid).toBeFalsy();
      expect(errors).toHaveLength(1);
      const err = errors[0];
      expect(err).toMatchObject({ code: 'Invalid', source: 'phoneNumber' });
    });
  });
  describe('validate email', () => {
    const schema = { myEmail: { type: 'Email' } };
    it('valid email', () => {
      const errors = validateSchema(schema, { myEmail: 'info@brokertrust.cz' });
      const isValid = errors.length === 0;
      expect(isValid).toBeTruthy();
    });

    it('missing email', () => {
      const errors = validateSchema(schema, {});
      const isValid = errors.length === 0;
      expect(isValid).toBeTruthy();
    });

    it('invalid email', () => {
      const errors = validateSchema(schema, { myEmail: 'abc' });
      const isValid = errors.length === 0;
      expect(isValid).toBeFalsy();
      expect(errors).toHaveLength(1);
      const err = errors[0];
      expect(err).toMatchObject({ code: 'Invalid', source: 'myEmail' });
    });
  });
  describe('validate ico', () => {
    const schema = { myICO: { type: 'CompanyNumber' } };
    it('valid ico', () => {
      const errors = validateSchema(schema, { myICO: '26192454' });
      const isValid = errors.length === 0;
      expect(isValid).toBeTruthy();
    });

    it('missing ico', () => {
      const errors = validateSchema(schema, {});
      const isValid = errors.length === 0;
      expect(isValid).toBeTruthy();
    });

    it('invalid ico', () => {
      const errors = validateSchema(schema, { myICO: '26192454ffff' });
      const isValid = errors.length === 0;
      expect(isValid).toBeFalsy();
      expect(errors).toHaveLength(1);
      const err = errors[0];
      expect(err).toMatchObject({ code: 'Invalid', source: 'myICO' });
    });
  });
  describe('validate birthNumber', () => {
    const schema = { myBirthNumber: { type: 'BirthNumber' } };
    it('valid birthNumber', () => {
      const errors = validateSchema(schema, { myBirthNumber: '0161075002' });
      const isValid = errors.length === 0;
      expect(isValid).toBeTruthy();
    });

    it('missing birthNumber', () => {
      const errors = validateSchema(schema, {});
      const isValid = errors.length === 0;
      expect(isValid).toBeTruthy();
    });

    it('invalid birthNumber', () => {
      const errors = validateSchema(schema, { myBirthNumber: '26192454ffff' });
      const isValid = errors.length === 0;
      expect(isValid).toBeFalsy();
      expect(errors).toHaveLength(1);
      const err = errors[0];
      expect(err).toMatchObject({ code: 'Invalid', source: 'myBirthNumber' });
    });
  });
});
