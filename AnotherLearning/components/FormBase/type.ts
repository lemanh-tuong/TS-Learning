/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { ClassAttributes, CSSProperties, ReactNode } from 'react';

export type FieldValue = string | number | boolean;

export interface ValidateRule {
  required?: boolean;
  length?: number;
  min?: number;
  max?: number;
  pattern?: RegExp;
}

export interface FieldType {
  type:
    | 'input'
    | 'select'
    | 'radio'
    | 'number'
    | 'range'
    | 'password'
    | 'checkbox';
  fieldName: string;
  fieldLabel: string;
  id: number | string;
  validateRule?: ValidateRule;
  value?: FieldValue;
  defaultValue?: FieldValue;
}


export type OnChange = (result: { newFieldResult?: StateFieldResult; newFormResult: State }) => void;
export type OnSubmit = (result: State) => void;
export type RenderField = (params: {
  fieldProperty: FieldType;
  hasError: (keyof ValidateRule)[];
  onChange: (value: FieldValue) => void;
}) => ReactNode;

export type RenderSubmit = (onSubmit: OnSubmit) => ReactNode;

export interface BaseProps {
  data: FieldType[];
  renderField: RenderField;
  childrenFirst?: ReactNode;
  childrenEnd?: ReactNode;
  onSubmit?: OnSubmit;
  onChange?: OnChange;
  ref?: ClassAttributes<HTMLFormElement>['ref'];
  className?: string;
  style?: CSSProperties;
}

export interface StateFieldResult {
  value: FieldValue;
  hasError: (keyof ValidateRule)[];
}

export type State = Record<string, StateFieldResult>;
