export {appImages, appIcons, appLogos, appSvgs} from './theme/assets';

export {colors} from './theme/colors';
export {size} from './theme/sizes';
export {family} from './theme/family';
export {spacing} from './theme/spacing';
export {
  WP,
  HP,
  scrWidth,
  scrHeight,
  platformOrientedCode,
} from './theme/responsive';

export {
  LoginVS,
  loginFormFields,
  FighterSignupFormFields,
  FighterSignUpVS,
  forgotFormFields,
  ForgotPasswordVS,
  resetFormFields,
  ResetPasswordVS,
  updateFormFields,
  RefreeSignupFormFields,
  RefreeSignUpVS,
  PhoneAuthFieldsVS,
  venueSignupFieldsPage1,
  VenueSignUpPage1VS,
  venueSignupFieldsPage2,
  VenueSignUpPage2VS,
} from './utilities/validations';
export {
  StatusBarHeight,
  DimensionsWindowHeight,
  DimensionsWindowWidth,
} from './theme/statusBarHeight';

export {setupAxios, HTTP_CLIENT, initialConfig} from './utilities/config';
export {BASE_URL, ENDPOINTS} from './utilities/endpoints';
export {
  ANDROID,
  IOS,
  emailRegex,
  web_client_id,
  profile_uri,
  stripe_publishableKey,
  video_url,
} from './utilities/constant';
export {header, authHeader} from './utilities/headers';
export {
  checkConnected,
  capitalizeFirstLetter,
  responseValidator,
  checkBrand,
  calculateDateDiff,
  checkExerciseItemOrder,
  convertNumberSystem,
  calculateCurrentDateDiff,
  best_set,
  setDigitSize,
} from './utilities/helper';
export {commonStyles} from './theme/commonStyles';
