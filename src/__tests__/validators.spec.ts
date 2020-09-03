import { validators } from '../index';
import { isBirthNumber, isCZDIC, isICO } from '../validators';
const { isLength, isName, isNumeric, isPhone, isPostalCode, isEmail } = validators;

describe('validators', () => {
  describe('isPhone', () => {
    it('valid CZ phone', () => {
      expect(isPhone('+420 725 000 111', 'cs-CZ')).toBeTruthy();
    });
    it('valid mobile CZ phone - no country code', () => {
      expect(isPhone('725 000 111', 'cs-CZ')).toBeTruthy();
    });
    it('valid CZ phone - no country code', () => {
      expect(isPhone('325 111 000', 'cs-CZ')).toBeTruthy();
    });
    it('invalid CZ phone - invalid country code', () => {
      expect(isPhone('+421325 111 000', 'cs-CZ')).toBeFalsy();
    });
    it('invalid phone - any locale', () => {
      expect(isPhone('a122 111 325 111 000')).toBeFalsy();
    });
    it('invalid phone - empty', () => {
      expect(isPhone('')).toBeFalsy();
    });
    it('invalid phone - null', () => {
      expect(isPhone(null)).toBeFalsy();
    });
  });
  describe('isName', () => {
    it('valid Name', () => {
      expect(isName('Josef')).toBeTruthy();
    });
    it('valid Name - Unicode chars', () => {
      expect(isName('Míša Jedlička')).toBeTruthy();
    });
    it('valid Name 2 words', () => {
      expect(isName('Frantisek Josef')).toBeTruthy();
    });
    it('invalid Name - invalid char', () => {
      expect(isName('*Josef')).toBeFalsy();
    });
    it('invalid Name - null', () => {
      expect(isName(null)).toBeFalsy();
    });
    it('invalid Name - empty', () => {
      expect(isName('')).toBeFalsy();
    });
  });

  describe('isEmail', () => {
    it('valid email', () => {
      expect(isEmail('josef.karamon@gmail.com')).toBeTruthy();
    });
    it('invalid email - Unicode chars', () => {
      expect(isName('míša.jedlička@brokertrust.cz')).toBeFalsy();
    });

    it('invalid email - empty', () => {
      expect(isName('')).toBeFalsy();
    });
  });
  describe('isNumeric', () => {
    it('valid number', () => {
      expect(isNumeric('9887')).toBeTruthy();
    });
    it('valid number negative', () => {
      expect(isNumeric('-9887')).toBeTruthy();
    });
    it('valid number plus sign', () => {
      expect(isNumeric('+9887')).toBeTruthy();
    });
    it('invalid number invalid char', () => {
      expect(isNumeric('a9887')).toBeFalsy();
    });
    it('invalid number - null', () => {
      expect(isNumeric(null)).toBeFalsy();
    });
    it('invalid number - empty', () => {
      expect(isNumeric('')).toBeFalsy();
    });
  });
  describe('isLength', () => {
    it('invalid Length - null', () => {
      expect(isLength(null, 0, 1)).toBeFalsy();
    });
    it('invalid Length - empty <1, 1>', () => {
      expect(isLength('', 1, 1)).toBeFalsy();
    });
    it('valid Length - empty <0, 0>', () => {
      expect(isLength('', 0, 0)).toBeTruthy();
    });
    it('valid Length "ahoj"  <3, 5>', () => {
      expect(isLength('ahoj', 3, 5)).toBeTruthy();
    });
    it('valid Length "ahoj"  <5, 8>', () => {
      expect(isLength('ahoj', 5, 8)).toBeFalsy();
    });
  });
  describe('isPostalCode', () => {
    it('valid postal code', () => {
      expect(isPostalCode('28922')).toBeTruthy();
    });
    it('valid postal code - spaced', () => {
      expect(isPostalCode('289 22')).toBeTruthy();
    });

    it('invalid postal code', () => {
      expect(isPostalCode('2189 22')).toBeFalsy();
    });

    it('invalid postal code - too long', () => {
      expect(isPostalCode('1234567')).toBeFalsy();
    });

    it('invalid postal code - too short', () => {
      expect(isPostalCode('12')).toBeFalsy();
    });

    it('invalid postal code - invalid char', () => {
      expect(isPostalCode('12344a')).toBeFalsy();
    });

    it('invalid postal code - empty', () => {
      expect(isPostalCode('')).toBeFalsy();
    });
    it('invalid postal code - null', () => {
      expect(isPostalCode(null)).toBeFalsy();
    });
  });
  describe('isBirthNumber', () => {
    it('valid birth number with slash', () => {
      expect(isBirthNumber('731128/1043')).toBeTruthy();
    });
    it('valid birth number', () => {
      expect(isBirthNumber('7311281043')).toBeTruthy();
    });
    it('invalid birth number - length', () => {
      expect(isBirthNumber('73112810432323')).toBeFalsy();
    });
    it('invalid birth number - modulo', () => {
      expect(isBirthNumber('731128/1045')).toBeFalsy();
    });
    it('invalid birth number - empty', () => {
      expect(isBirthNumber('')).toBeFalsy();
    });
    it('invalid birth number - null', () => {
      expect(isBirthNumber(null)).toBeFalsy();
    });
  });
  describe('isICO', () => {
    it('valid ICO', () => {
      expect(isICO('28394178')).toBeTruthy();
    });
    it('invalid ICO - modulo', () => {
      expect(isICO('28394172')).toBeFalsy();
    });
    it('invalid ICO - length', () => {
      expect(isICO('2839417839875')).toBeFalsy();
    });
    it('invalid ICO - empty', () => {
      expect(isICO('')).toBeFalsy();
    });
    it('invalid ICO - null', () => {
      expect(isICO(null)).toBeFalsy();
    });
  });
  describe('isCZDIC', () => {
    it('valid DIC - ICO suffix', () => {
      expect(isCZDIC('CZ28394178')).toBeTruthy();
    });
    it('valid DIC - birth number suffix', () => {
      expect(isCZDIC('CZ7311281043')).toBeTruthy();
    });
    it('invalid DIC - modulo', () => {
      expect(isCZDIC('CZ28394172')).toBeFalsy();
    });
    it('invalid DIC - length', () => {
      expect(isCZDIC('CZ2839417839875')).toBeFalsy();
    });
    it('invalid DIC - missing CZ prefix', () => {
      expect(isCZDIC('C028394178')).toBeFalsy();
    });
    it('invalid DIC - empty', () => {
      expect(isCZDIC('')).toBeFalsy();
    });
    it('invalid DIC - null', () => {
      expect(isCZDIC(null)).toBeFalsy();
    });
  });
});
