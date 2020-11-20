/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FieldType, State, StateFieldResult } from '../type';
import { validator } from './validator';

const getInitialValueString = (fieldProperty: FieldType) => {
  const fieldValue = (fieldProperty.value ?? fieldProperty.defaultValue) ?? '';
  return {
    value: fieldValue,
    hasError: fieldProperty.validateRule
      ? validator({
          rules: fieldProperty.validateRule,
          fieldValue: fieldValue
        })
      : []
  } as StateFieldResult;
};

const getInitialValueBoolean = (fieldProperty: FieldType) => {
  const fieldValue = (fieldProperty.value ?? fieldProperty.defaultValue) ?? false;
  return {
    value: fieldValue,
    hasError: fieldProperty.validateRule
      ? validator({
          rules: fieldProperty.validateRule,
          fieldValue: fieldValue
        })
      : []
  } as StateFieldResult;
};

const getInitialValueNumber = (fieldProperty: FieldType) => {
  const fieldValue = (fieldProperty.value ?? fieldProperty.defaultValue) ?? 0;
  return {
    value: fieldValue,
    hasError: fieldProperty.validateRule
      ? validator({
          rules: fieldProperty.validateRule,
          fieldValue: fieldValue
        })
      : []
  } as StateFieldResult;
};

const getInitialFieldValue = (fieldProperty: FieldType) => {
  if (
    fieldProperty.type === 'input' ||
    fieldProperty.type === 'select' ||
    fieldProperty.type === 'password' ||
    fieldProperty.type === 'radio'
  ) {
    return getInitialValueString(fieldProperty);
  }
  if (fieldProperty.type === 'number' || fieldProperty.type === 'range') {
    return getInitialValueNumber(fieldProperty);
  }
  if (fieldProperty.type === 'checkbox') {
    return getInitialValueBoolean(fieldProperty);
  }
  return getInitialValueString(fieldProperty);
};

export const getInitialState = (data: FieldType[]): State => {
  return data.reduce<State>((result, fieldProperty) => {
    return {
      ...result,
      [fieldProperty.fieldName]: getInitialFieldValue(fieldProperty)
    };
  }, {});
};

export const getResetState = (data: FieldType[]): State => {
  return data.reduce<State>((result, fieldProperty) => {
    return {
      ...result,
      [fieldProperty.fieldName]: getInitialFieldValue({...fieldProperty, value: undefined, defaultValue: undefined})
    };
  }, {});
};
