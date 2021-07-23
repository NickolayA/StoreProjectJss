export enum MediaSize {
  Large = 'large',
  Big = 'big',
  Medium = 'medium',
  Small = 'small',
}

export interface IMediaSizeParams {
  mw: number;
  mh: number;
}

export const getMediaSizeParams = (mediaSize: MediaSize): IMediaSizeParams => {
  switch (mediaSize) {
    case MediaSize.Large:
      return { mw: 1920, mh: 750 };
    case MediaSize.Big:
      return { mw: 1200, mh: 750 };
    case MediaSize.Medium:
      return { mw: 800, mh: 750 };
    case MediaSize.Small:
      return { mw: 400, mh: 300 };
    default:
      return { mw: 500, mh: 750 };
  }
};
