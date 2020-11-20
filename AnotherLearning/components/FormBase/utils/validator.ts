/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { FieldValue, ValidateRule } from '../type';

interface ValidatorParams {
  rules: ValidateRule;
  fieldValue: FieldValue;
}

const checkRequired = ({ fieldValue }: { fieldValue: FieldValue }) => {
  if (typeof fieldValue === 'string') {
    return fieldValue.length > 0;
  }
  if (typeof fieldValue === 'boolean') {
    return fieldValue;
  }
  if (typeof fieldValue === 'number') {
    return true;
  }
  return true;
};

const checkLength = ({ fieldValue, length }: { fieldValue: FieldValue; length: number }) => {
  if (typeof fieldValue === 'string') {
    return fieldValue.length === length;
  }
  return true;
};

const checkMin = ({ fieldValue, min }: { fieldValue: FieldValue; min: number }) => {
  if (typeof fieldValue === 'string') {
    return fieldValue.length > min;
  }
  if (typeof fieldValue === 'number') {
    return fieldValue > min;
  }
  return true;
};

const checkMax = ({ fieldValue, max }: { fieldValue: FieldValue; max: number }) => {
  if (typeof fieldValue === 'string') {
    return fieldValue.length < max;
  }
  if (typeof fieldValue === 'number') {
    return fieldValue < max;
  }
  return true;
};

const checkPattern = ({ fieldValue, pattern }: { fieldValue: FieldValue; pattern: RegExp }) => {
  if (typeof fieldValue === 'string') {
    return pattern.test(fieldValue);
  }
  return true;
};

export const validator = ({ rules, fieldValue }: ValidatorParams): string[] => {
  return Object.entries(rules).reduce<string[]>(
    (result, [ruleName, ruleValue]) => {
      if (
        ruleName === 'pattern' &&
        ruleValue &&
        !checkPattern({ fieldValue, pattern: ruleValue as RegExp })
      ) {
        return [...result, ruleName];
      }
      if (
        ruleName === 'required' &&
        ruleValue &&
        !checkRequired({ fieldValue })
      ) {
        return [...result, ruleName];
      }
      if (
        ruleName === 'length' &&
        ruleValue &&
        !checkLength({fieldValue, length: ruleValue as number })
      ) {
        return [...result, ruleName];
      }
      if (ruleName === 'min' && ruleValue && !checkMin({fieldValue, min: ruleValue as number })) {
        return [...result, ruleName];
      }
      if (ruleName === 'max' && ruleValue && !checkMax({fieldValue, max: ruleValue as number })) {
        return [...result, ruleName];
      }
      return [...result];
    },
    []
  );
};
