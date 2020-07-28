// // Theme Colors:
const ubuntuFont = "'Ubuntu', sans-serif;";
const bigLineHeight = 1.1;
const medLineHeight = 0.75;
const smallLineHeight = '25px';
const blackColor = '#030203';
const whiteColor = '#ffffff';
const beigeColor = '#e0e0e0';
const redColor = '#ff2a70';
const standardFontSize = '15px';
const smallHeading = '20px';
const subHeading = '30px'
const heading = '40px;'

export const Fonts = {
  fontSize: {
    sectionHeading: heading,
    subHeading: subHeading,
    smallHeading: smallHeading,
    normal: standardFontSize,
  },
  fontFam: {
      ubuntu : ubuntuFont,
  },
  lineHeight : {
      heading : bigLineHeight,
      subHeading : bigLineHeight,
      breadText : smallLineHeight,
  },
  colors  : {
      primaryColor : whiteColor,
      detailColor : redColor,
      textColor : beigeColor,
  },
}


export const Colors = {

  backgrounds: {
    primary: blackColor,
    test: whiteColor,
    detail: redColor,
  },

  buttons: {
    notice: redColor,
    // disableButton: tintBeige,
    // succesButton: clearJadeGreen,
    // warningButton: clearMaize,
  },

  icons: {
    primary : redColor,
    soMe: whiteColor,
    // iconWarning: clearRed,
    // iconBadge: clearRasperry,
    // disableIcon: tintBeige,
    // tabIconDefault: tintGray,
    // tabIconSelected: tintBlue,
    // tabLabelDefault: tintGray,
    // tabLabelSelected: tintBlue,
  }, 
  borders: {
    // primary: tintBlue
  },

//   gradients: {
//     gradientBackground: tintBlue,
//     gradientRed: '#e96443',
//     gradientPurple: '#904e95',
//   },
//   externalBrands: {
//     instagram: '#B304AF',
//     facebook: '#B304AF',
//     googleAnalytics: '#F0941C',
//     youtube: '#FF0000',
//   }
}
