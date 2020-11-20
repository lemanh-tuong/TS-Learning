/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { createElement, FC, memo } from 'react';
import classNames from 'utils/classNames';
import { BaseProps } from './type';
import styles from './Typography.module.scss';

const TypographyComponent: FC<BaseProps> = ({ tagName = 'div', className = '', style = {}, children, ref, ellipsis = false, strong = false, underline = false, italic = false, variant = 'default', ...rest }) => {
  const ellipsisClassName = ellipsis ? styles.ellipsis : '';
  const underlineClassName = underline ? styles.underline : '';
  const strongClassName = strong ? styles.strong : '';
  const italicClassName = italic ? styles.italic : '';
  const allClassNames = classNames(className, styles[variant], italicClassName, ellipsisClassName, underlineClassName, strongClassName);
  return createElement(
    tagName,
    {
      ...rest,
      ref,
      style: {...style },
      ...{ className: allClassNames },
    },
    children,
  );
};

const Typography = memo(TypographyComponent);

export default Typography;
