enum UIViewTypes {
  INHERIT = '_inherit',
  PRIMARY = '_primary',
  SECONDARY = '_secondary',
  ACCENT = '_accent',
  SUCCESS = '_success',
  WARNING = '_warning',
  ERROR = '_error',
}

enum UISizes {
  XS = '_xs',
  SM = '_sm',
  MD = '_md',
  LG = '_lg',
  XL = '_xl',
  XXL = '_xxl',
}

enum AnimationDurations {
  SHORT = 150,
  NORMAL = 250,
  LONG = 500,
  INFINITY = 10000,
}
enum ViewStates {
  CLOSED = 'closed',
  OPENED = 'opened',
  CLOSING = 'closing',
  OPENING = 'opening',
}

export {
  UIViewTypes, UISizes, AnimationDurations, ViewStates,
};
