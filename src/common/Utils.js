import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const getLog = (title, value) => {
    console.log(`🚀 ~ ${title}`, value)
}

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};
