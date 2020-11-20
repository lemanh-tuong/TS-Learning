/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import React, { ClassAttributes, CSSProperties, FC, memo, ReactNode } from 'react';
import classNames from 'utils/classNames';
import styles from './RingLoader.module.scss';

export interface RingLoaderProps {
  className?: string;
  style?: CSSProperties;
  styleStatus?: CSSProperties;
  classNameStatus?: string;
  colors?: [string, string];
  size?: number;
  animationTime?: number;
  renderStatus?: () => ReactNode;
  ref?: ClassAttributes<HTMLDivElement>['ref']
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const RingLoaderComponent: FC<RingLoaderProps> = ({ size = 30, animationTime = 1, colors = ['#ffffff', '#255ff4'], className = '', style = {}, classNameStatus = '', styleStatus = {}, children, renderStatus, ref}) => {

  const _renderItem = () => {
    return arr.map((item, index) => <div
      className={styles.item}
      key={item}
      style={{color: index % 2 === 0 ? colors[0] : colors[1]}}
    />);
  };

  const _renderStatusDefault = () => {
    return (
      <div className={classNames(styles.status, classNameStatus)} style={styleStatus}>
        Loading
        <span className={styles.dot}>.</span>
        <span className={styles.dot}>.</span>
        <span className={styles.dot}>.</span>
      </div>
    )
  }

  return (
    <div ref={ref}  className={classNames(styles.RingLoader, className)} style={{...style, fontSize: size}}>
      <div className={styles.Ring} style={{animationDuration: `${animationTime}s`}}>
        {_renderItem()}
      </div>
      {renderStatus ? renderStatus() : _renderStatusDefault()}
      {children}
    </div>
  );
};

const RingLoader = memo(RingLoaderComponent);

export default RingLoader;
