import { ClassAttributes, CSSProperties } from 'react';

export interface BaseProps {
  ellipsis?: boolean;
  strong?: boolean;
  underline?: boolean;
  italic?: boolean;
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'quote' | 'div';
  ref?: ClassAttributes<HTMLFormElement>['ref'];
  className?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'default';
}
