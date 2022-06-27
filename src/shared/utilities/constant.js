import {appIcons} from '../exporter';
import {appImages} from '../theme/assets';
import {colors} from '../theme/colors';

const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const web_client_id =
  '396667718237-b5871eer19sabub7jg8qhneksq75d443.apps.googleusercontent.com';
export const video_url =
  'https://billionpound.s3.us-west-2.amazonaws.com/Public/walk_through.mp4';

const stripe_publishableKey =
  'pk_test_51Jc5CWG5H9PTsJWTIZhYvdTTYfou0YKpZcDRJemqk83fnHQfRJoJJiHLK8AioyjhRa1XYAW9Q0NggRgAIumEaUgj00g64wGpS3';
const profile_uri =
  'https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png';

const slidesData = [
  {
    key: 1,
    image: appImages.slider1,
  },
  {
    key: 2,
    image: appImages.slider2,
  },
  {
    key: 3,
    image: appImages.slider3,
  },
];

export {
  IOS,
  ANDROID,
  emailRegex,
  profile_uri,
  web_client_id,
  stripe_publishableKey,
  slidesData,
};
