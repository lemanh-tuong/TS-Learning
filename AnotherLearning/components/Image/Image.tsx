import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'utils/classNames';
import styles from './Image.module.scss';
import checkElementInViewport from './utils/checkElementInViewport';
import getImageSrc from './utils/getImageSrc';
import getStylePreview from './utils/getStylePreview';
import getWindowCenterCoordinate from './utils/getWindowCenterCoordinate';

type Position = {
  left: number;
  top: number;
}

type Size = {
  width: number;
  height: number;
}

type ImageProperty = Position & Size;

export interface ImageProps {
  src?: string | Record<number, string>;
  previewImg?: string;
  alt?: string;
  crossOrigin?: "anonymous" | "use-credentials";
  disabledScroll?: boolean;
  transitionDuration?: CSSProperties['transitionDuration'];
  transitionTimingFunction?: CSSProperties['transitionTimingFunction'];
  transitionDelay?: CSSProperties['transitionDelay'];
  aspectRatio?: number;
  useLazyLoad?: boolean;
  useParallax?: boolean;
  useZoomPreview?: boolean;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  imageClassName?: string;
  imageStyle?: CSSProperties;
  previewUnderlayClassName?: string;
  previewUnderlayStyle?: CSSProperties;
}

const ImageComponent: FC<ImageProps> = ({
  alt = 'Image Here',
  crossOrigin = "anonymous",
  src = "https://images.pexels.com/photos/5218235/pexels-photo-5218235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  previewImg = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
  useLazyLoad = true,
  useParallax = false,
  useZoomPreview = true,
  disabledScroll = true,
  transitionDuration = '0.3s',
  transitionDelay = '0s',
  transitionTimingFunction = 'ease',
  aspectRatio = 0,
  containerClassName = '',
  containerStyle = {},
  imageClassName = '',
  imageStyle = {},
  previewUnderlayStyle = {},
  previewUnderlayClassName = ''
}) => {

  const [sourceProperty, setSourceProperty] = useState<ImageProperty>({ left: 0, top: 0, width: 0, height: 0 });
  const [imageOriginSize, setImageOriginSize] = useState({ width: 0, height: 0 });
  const [targetProperty, setTargetProperty] = useState<ImageProperty>({ left: 0, top: 0, width: 0, height: 0 });
  const [imageAspectRatio, setImageAspectRatio] = useState(aspectRatio);
  const [imageSrc, setImageSrc] = useState('');
  const [isPreviewing, setisPreviewing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement | HTMLImageElement>(null);

  const _getTargetProperty = () => {
    setTargetProperty(() => {
      const centerPos = getWindowCenterCoordinate();
      return {
        width: imageOriginSize.width,
        height: imageOriginSize.height,
        left: centerPos.left - imageOriginSize.width / 2,
        top: centerPos.top - imageOriginSize.height / 2
      }
    })
  }

  const _getImageAspectRatio = (imageWidth: number, imageHeight: number) => {
    if (!aspectRatio && useParallax) {
      setImageAspectRatio(imageHeight / imageWidth * 100);
    }
  }

  const _checkRenderImageBackground = () => {
    return aspectRatio || useParallax;
  }

  const _handleLoadImage = () => {
    // Nếu sử dụng useLazyload thì phải check viewport
    if (useLazyLoad && !isLoaded && containerRef.current && imageRef.current && checkElementInViewport(containerRef.current)) {
      const imgLoader = new Image();
      imgLoader.src = imageSrc;
      imgLoader.crossOrigin = crossOrigin
      imgLoader.onload = () => {
        if (imageRef.current) {
          _checkRenderImageBackground() ? imageRef.current.style.backgroundImage = `url('${imageSrc}')` : imageRef.current.setAttribute('src', imageSrc);
          setImageOriginSize({ width: imgLoader.width, height: imgLoader.height });
          setIsLoaded(true);
          _getImageAspectRatio(imgLoader.width, imgLoader.height);
        }
      };
    }
    // còn k load như bình thường
    else {
      const imgLoader = new Image();
      imgLoader.src = imageSrc;
      imgLoader.crossOrigin = crossOrigin
      imgLoader.onload = () => {
        if (imageRef.current) {
          _checkRenderImageBackground() ? imageRef.current.style.backgroundImage = `url('${imageSrc}')` : imageRef.current.setAttribute('src', imageSrc);
          setImageOriginSize({ width: imgLoader.width, height: imgLoader.height });
          setIsLoaded(true);
        }
      };
    }
  };

  const _handleOpen = () => {
    if(imageRef.current) {
      const imageBoundingRect = imageRef.current.getBoundingClientRect();
      setisPreviewing(true);
      setSourceProperty(() => {
        const windowCenterCoordinate = getWindowCenterCoordinate();
        return {
          left: imageBoundingRect.left > windowCenterCoordinate.left ? imageBoundingRect.left + imageBoundingRect.width : imageBoundingRect.left,
          top: imageBoundingRect.top,
          width: imageBoundingRect.width,
          height: imageBoundingRect.height,
        }
      });
    }
  }

  const _handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setisPreviewing(false);
    }, 300)
  }

  const _renderPreview = () => {
    return (
      <div className={classNames(styles.Preview, styles.previewAnimating)} >
        <div className={classNames(styles.previewUnderlay, previewUnderlayClassName)} style={previewUnderlayStyle} onClick={_handleClose} />
        <div className={styles.previewContent} style={{...getStylePreview({sourceProperty, targetProperty, isAnimating}), transitionDelay, transitionTimingFunction, transitionDuration}}>
          <img crossOrigin={crossOrigin} style={{width: sourceProperty.width, height: sourceProperty.height}} onLoad={() => setIsAnimating(true)} alt={alt} src={imageSrc} />
        </div>
      </div>
    )
  }

  const _renderPortal = () => {
    return createPortal(_renderPreview(), document.body);
  }

  const _renderImageTag = () => {
    return <img crossOrigin={crossOrigin} className={imageClassName} style={imageStyle} ref={imageRef as any} alt={alt} />
  }

  const _renderImageBackground = () => {
    return <div ref={imageRef as any} className={classNames(imageClassName, useParallax ? styles.parallax : '', styles.imageBackground)} style={{...imageStyle, paddingTop: `${imageAspectRatio}%`}} />
  }

  const _renderImage = () => {
    if (_checkRenderImageBackground()) return _renderImageBackground();
    return _renderImageTag();
  }

  // Handle Load Image
  useEffect(() => {
    if (isMounted) {
      if (isLoaded) window.removeEventListener('scroll', _handleLoadImage);
      else window.addEventListener('scroll', _handleLoadImage);
      return () =>  window.removeEventListener('scroll', _handleLoadImage);
    }
  }, [isLoaded, isMounted])

  // Handle Load Image 1st Time
  useEffect(() => {
    if (isMounted) {
      _handleLoadImage();
    }
  }, [isMounted])

  // Resize update center position
  useEffect(() => {
    if (isMounted) {
      _getTargetProperty();
      window.addEventListener('resize', _getTargetProperty);
    }
    return () => window.removeEventListener('resize', _getTargetProperty);
  }, [imageOriginSize, isMounted]);

  // Set IsMounted để tránh trường hợp resize phát đầu luôn ( tại chưa set được imageOriginSize )
  useEffect(() => {
    setIsMounted(true);
  }, [])

  // Ẩn thanh scroll khi preview
  useEffect(() => {
    if (disabledScroll) {
      if (isPreviewing) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'initial';
      }
    }
  }, [isPreviewing])

  // Lấy src của ảnh khi mount
  useEffect(() => {
    if (containerRef.current) {
      setImageSrc(getImageSrc({
        container: containerRef.current,
        previewImg: previewImg,
        src: src,
      }))
    }
  }, []);

  // Resize lấy srcSet mới
  return (
    <>
      <div onClick={useZoomPreview ? _handleOpen : undefined} ref={containerRef} className={classNames(styles.Image, useZoomPreview ? styles.zoomCursor : '', containerClassName)} style={containerStyle}>
        {_renderImage()}
        <div className={classNames(styles.placeholder, isLoaded ? styles.opacity0 : styles.opacity1)} />
      </div>
      {isPreviewing && _renderPortal()}
    </>
  )
}

export default ImageComponent;
