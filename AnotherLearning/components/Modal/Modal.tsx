import React, { CSSProperties, FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'utils/classNames';
import { EventEmitter } from 'utils/EventEmiter';
import styles from './Modal.module.scss';

export interface ModalProps {
  id: string;
  children: ReactNode;
  disabledScroll?: boolean;
  centered?: boolean;
  title?: string | ReactNode;
  closeIcon?: ReactNode;
  Header?: ReactNode;
  Body?: ReactNode;
  Footer?: ReactNode;
  visible?: boolean;
  position?: 'top_left' | 'top_center' | 'top_right' | 'middle_left' | 'middle_center' | 'middle_right' | 'bottom_left' | 'bottom_center' | 'bottom_right' | { left: number, top: number };
  animationOpen?: 'none' | 'fadeInScale' | 'slideInRight' | 'slideInLeft' | 'slideInBottom' | 'slideInTop' | 'newPaper' | 'fall' | 'slideFall';
  onOk?: () => void;
  onCancel?: () => void;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  underlayClassName?: string;
  underlayStyle?: CSSProperties;
}

const modalHandler = new EventEmitter();

const Modal: FC<ModalProps> = ({
  id,
  disabledScroll = true,
  centered = true,
  title,
  closeIcon,
  Header,
  Body,
  Footer,
  visible = false,
  position = 'middle_center',
  animationOpen = 'none',
  children,
  onOk,
  onCancel,
  containerClassName = '',
  containerStyle = {},
  contentClassName = '',
  contentStyle = {},
  underlayClassName = '',
  underlayStyle = {}
}) => {
  const [isVisible, setIsvisible] = useState(visible);

  const _handleOpen = () => setIsvisible(true);
  const _handleClose = () => setIsvisible(false);

  const _handleOk = () => {
    setIsvisible(false);
    onOk?.();
  }

  const _handleCancel = () => {
    setIsvisible(false);
    onCancel?.();
  }

  const _renderHeader = () => {
    if (Header) return Header;
    return (
      <div className={styles.header}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={classNames(styles.closeIcon)} onClick={_handleClose}>
          {closeIcon !== undefined ? closeIcon : '×'}
        </div>
      </div>
    )
  }

  const _renderBody = () => {
    if (Body) return Body;
    return (
      <div className={styles.body}>{children}</div>
    )
  }

  const _renderFooter = () => {
    if (Footer) return Footer;
    return (
      <div className={styles.footer}>
        {Footer || (
          <>
            <button onClick={_handleCancel} className={styles.button}>Cancel</button>
            <button onClick={_handleOk} className={styles.button}>OK</button>
          </>
        )}
      </div>
    )
  }

  const _renderModalWithTitle = () => {
    return (
      <div className={classNames(styles.Modal, containerClassName)} style={containerStyle}>
        <div className={classNames(styles.underlay, underlayClassName)} style={underlayStyle} onClick={_handleClose} />
        <div className={
          classNames(styles.contentWrap, typeof position === 'string' ? styles[position] : '')}
          style={typeof position !== 'string' ? {...position} : {}}>
          <div style={contentStyle} className={classNames(styles.content, contentClassName, centered ? styles.centered : '', styles[animationOpen])}>
            {_renderHeader()}
            {_renderBody()}
            {_renderFooter()}
          </div>
        </div>
      </div>
    )
  }

  const _renderModalWithoutTitle = () => {
    return (
      <div className={classNames(styles.Modal, containerClassName)} style={containerStyle}>
        <div className={classNames(styles.underlay, underlayClassName)} style={underlayStyle} onClick={_handleClose} />
        <div className={
          classNames(styles.contentWrap, typeof position === 'string' ? styles[position] : '')}
          style={typeof position !== 'string' ? {...position} : {}}>
          <div style={contentStyle}  className={classNames(styles.content, contentClassName, centered ? styles.centered : '', styles[animationOpen])}>
            <div className={classNames(styles.closeIcon, styles.iconAbsolute)} onClick={_handleClose}>
              {closeIcon !== undefined ? closeIcon : '×'}
            </div>
            {_renderBody()}
            {_renderFooter()}
          </div>
        </div>
      </div>
    )
  }

  const _renderModal = () => {
    if (!title) return _renderModalWithoutTitle();
    return _renderModalWithTitle()
  }

  // Register Event
  useEffect(() => {
    modalHandler.add(`open_${id}`, _handleOpen);
    modalHandler.add(`close_${id}`, _handleClose);
    return () => {
      modalHandler.remove(`open_${id}`, _handleOpen);
      modalHandler.remove(`close_${id}`, _handleClose);
    }
  }, [isVisible])

  // Ẩn thanh scroll khi preview
  useEffect(() => {
    if(disabledScroll) {
      if (isVisible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'initial';
      }
    }
  }, [isVisible])

  if (!isVisible) return null;
  return createPortal(_renderModal(), document.body);
}

export default Modal;
