// don't export namedColors
const namedColors = {
  MINE_SHAFT: '#363636',
  HAITI: '#0A0F26',
  SUVA_GRAY: '#848283',
  GALLERY: '#F0F0F0',
  EVERGLADE: '#205527',
  EVERGLADE_OPACITY: 'rgba(33, 85, 39, 0.3)',
  BLUE_ROMANCE: '#CCF6D2',
  ALIZARIN_CRIMSON: '#EC1C24',
};

const commons = {
  RED: '#FF0000',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  TRANSPARENT: 'transparent',
};

const definedColors = {
  TEXT: namedColors.MINE_SHAFT,
  BUTTON_TEXT: namedColors.HAITI,
  BORDER_COLOR: namedColors.SUVA_GRAY,
  BACKGROUND_COLOR: namedColors.GALLERY,
  PRIMARY_COLOR: namedColors.EVERGLADE,
  PRIMARY_COLOR_OPACITY: namedColors.EVERGLADE_OPACITY,
  SECONDARY: namedColors.BLUE_ROMANCE,
  PLACE_HOLDER: namedColors.SUVA_GRAY,
  CANCEL_REQUIRED: namedColors.ALIZARIN_CRIMSON,
};

export default {
  ...commons,
  ...definedColors,
};
