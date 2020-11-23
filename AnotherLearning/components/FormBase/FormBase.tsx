/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import React, { FC, FormEvent, Fragment, memo, useEffect, useState } from 'react';
import {
  BaseProps,
  FieldType,
  FieldValue,
  State, StateFieldResult, ValidateRule
} from './type';
import { getInitialState, getResetState } from './utils/getStateWithDataProps';
import { validator } from './utils/validator';

const FormBaseComponent: FC<BaseProps> = ({ data, renderField, childrenFirst, childrenEnd, onChange, onSubmit, className = '', style = {}, ref = undefined }) => {
  const [state, setState] = useState<State>(getInitialState(data));

  const _handleChange = (fieldRule: ValidateRule, fieldName: string) => (value: FieldValue) => {
    const newFieldResult = {
        value: value,
        hasError: validator({ rules: fieldRule, fieldValue: value })
      } as StateFieldResult;
    const newFormResult = {
      ...state,
      [fieldName]: {...newFieldResult}
    };
    setState({ ...newFormResult });
    onChange?.({ newFieldResult, newFormResult });
  };

  const _handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(state);
  };

  const _handleReset = () => {
    const stateReseted = getResetState(data);
    setState({ ...stateReseted });
    onChange?.({ newFormResult: stateReseted });
  };

  const _renderField = (fieldProperty: FieldType) => {
    return (
      <Fragment>
        {renderField?.({
          fieldProperty,
          hasError: state[fieldProperty.fieldName].hasError,
          onChange: _handleChange(
            fieldProperty.validateRule ?? [],
            fieldProperty.fieldName
          )
        })}
      </Fragment>
    );
  };

  const _renderFields = () => {
    return data.map((item) => <Fragment key={item.id}>{_renderField(item)}</Fragment>);
  };

  // Trả về State đầu tiên
  useEffect(() => {
    onChange?.({ newFormResult: state });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <form ref={ref} onSubmit={_handleSubmit} onReset={_handleReset} className={className} style={style}>
    {childrenFirst}
    {_renderFields()}
    {childrenEnd}
  </form>;
};

const FormBase = memo(FormBaseComponent);

export default FormBase;


{/* <FormBase
      onChange={console.log}
      onSubmit={console.log}
      childrenFirst={<button type='submit'>Submit</button>}
      childrenEnd={<button type='reset'>Reset</button>}
      data={[
          {
            type: 'input',
            fieldLabel: 'User Name',
            fieldName: 'userName',
            validateRule: { required: true, max: 10, min: 1 },
            id: 1
          },
          {
            type: 'input',
            fieldLabel: 'Password',
            fieldName: 'password',
            validateRule: { required: true, max: 10, min: 1 },
            id: 1
          }
        ]}
        renderField={({ fieldProperty, hasError, onChange }) => {
          return (
            <div>
              {fieldProperty.fieldLabel}
              <input
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
              />
              {JSON.stringify(hasError)}
            </div>
          );
        }}
      /> */}