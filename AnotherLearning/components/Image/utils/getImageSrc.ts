
export interface GetImageSrcParams {
  container: HTMLElement;
  previewImg: string;
  src: string | { [key: number]: string }
}

export default function getImageSrc({ container, previewImg, src }: GetImageSrcParams) {
  if (typeof src === 'string') {
    return src;
  }
  const containerWidth = container.clientWidth;
  const breakpoints = Object.keys(src).map(item => Number(item));
  const res = breakpoints.sort((a, b) => a - b).find(breakpoint => containerWidth < Number(breakpoint));
  return res ? src[res] : previewImg;
};
