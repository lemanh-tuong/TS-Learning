import { CSSProperties } from "react";

interface BoxProperty {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface GetStylePreviewParams {
  sourceProperty: BoxProperty;
  targetProperty: BoxProperty;
  isAnimating: boolean
}

export default function getStylePreview({ sourceProperty, targetProperty, isAnimating }: GetStylePreviewParams) {


  const transformAnimating = `
  translate(${targetProperty.left - sourceProperty.left}px, ${targetProperty.top - sourceProperty.top}px)
  scale(${targetProperty.width / sourceProperty.width}, ${targetProperty.height / sourceProperty.height})
  `;
  const transformWithoutAnimating = `translate(0px, 0px) scale(1, 1)`

  return {
    left: sourceProperty.left,
    top: sourceProperty.top,
    width: sourceProperty.width,
    height: sourceProperty.height,
    transform: isAnimating ? transformAnimating : transformWithoutAnimating
  } as CSSProperties
}
