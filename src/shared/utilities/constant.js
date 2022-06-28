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

const privacyPolicy = [
  {
    id: 1,
    ques: 'Welcome to housibly!',
    ans: 'We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.',
  },
  {
    id: 2,
    ques: 'Please read Privacy Policy',
    ans: 'Reservation of Rights\nWe reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.',
  },
  {
    id: 3,
    ques: 'Removal of links from our website',
    ans: 'If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but.',
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
  privacyPolicy,
};
