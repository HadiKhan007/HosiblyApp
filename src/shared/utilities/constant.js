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
const image_options = {
  width: 300,
  height: 400,
  multiple: true,
  mediaType: 'photo',
};
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
const property_type_list = [
  {
    id: 1,
    text: 'Vacant Land',
  },
  {
    id: 2,
    text: 'House',
  },
  {
    id: 3,
    text: 'Condo',
  },
];

const beds_list = [
  {
    id: 1,
    text: '1',
  },
  {
    id: 2,
    text: '2',
  },
  {
    id: 3,
    text: '3',
  },
  {
    id: 4,
    text: '4',
  },
  {
    id: 5,
    text: '5',
  },
  {
    id: 6,
    text: '6',
  },
];

const modalData = [
  {
    id: 1,
    img: appIcons.person,
    title: 'Are you a Seller or Buyer?',
    desc: '',
    selected: '',
    isYesNo: false,
  },
  {
    id: 2,
    img: appIcons.home,
    title: 'Are you a Licensed Realtor™ or represent one?',
    desc: `Warning!\n\nIf you misrepresent yourself  a report may be sent to your Licensing Board / Authority.`,
    selected: 'yes',
    isYesNo: true,
  },
  {
    id: 3,
    img: appIcons.contractor,
    title: 'Do you want to be contacted by a real estate professional?',
    desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.`,
    selected: 'yes',
    isYesNo: true,
  },
];

const slide1BoxData = [
  {
    id: 1,
    title: 'Seller',
    isChecked: true,
  },
  {
    id: 2,
    title: 'Buyer',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Neither',
    isChecked: false,
  },
];

const slide2BoxData = [
  {
    id: 1,
    title: 'Yes',
    isChecked: true,
  },
  {
    id: 2,
    title: 'No',
    isChecked: false,
  },
];

const slide3BoxData = [
  {
    id: 1,
    title: 'Yes',
    isChecked: true,
  },
  {
    id: 2,
    title: 'No',
    isChecked: false,
  },
];

const buyerRef = [
  {
    id: 1,
    title: 'Property Type',
    property: 'House',
  },
  {
    id: 2,
    title: 'Price',
    property: '$1,000,000 to 1,500,000',
  },
  {
    id: 3,
    title: 'Bedrooms',
    property: '4',
  },
  {
    id: 4,
    title: 'Bathrooms',
    property: '2 Bath + Powder Room',
  },
];

const buyerRefAdvance = [
  {
    id: 1,
    title: 'Property Types',
    property: 'Multi-Family',
  },
  {
    id: 2,
    title: 'Property Styles',
    property: 'Doesn’t matter',
  },
  {
    id: 3,
    title: 'Min Lot Forntage',
    property: '30',
  },
  {
    id: 4,
    title: 'Lot Size (ft)',
    property: '23 ft to 50 ft',
  },
  {
    id: 5,
    title: 'Living Space',
    property: '12 ft to 15 ft',
  },
  {
    id: 6,
    title: 'Parking Spots Req.',
    property: '2',
  },
  {
    id: 7,
    title: 'Garage Spots Req.',
    property: 'Doesn’t matter',
  },
  {
    id: 8,
    title: 'Max Age',
    property: '10',
  },
];

const addresses = [
  {
    id: 1,
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
  },
  {
    id: 2,
    address: '3517 W. Gray St. Utica, Pennsylvania 57867',
  },
  {
    id: 3,
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
  },
];

const bath_list = [
  {
    id: 1,
    text: '1',
  },
  {
    id: 2,
    text: '1+ Power Room',
  },
  {
    id: 3,
    text: '3',
  },
  {
    id: 4,
    text: '4',
  },
  {
    id: 5,
    text: '5',
  },
  {
    id: 6,
    text: '6',
  },
];

const lat_frontage_list = [
  {
    id: 1,
    text: '10ft',
  },
  {
    id: 2,
    text: '15ft',
  },
  {
    id: 3,
    text: '20ft',
  },
];

const myMatches = [
  {
    id: 1,
    name: 'Luxury House',
    img: appImages.home1,
  },
  {
    id: 2,
    name: 'Minimal House',
    img: appImages.home2,
  },
  {
    id: 3,
    name: 'Suburban House',
    img: appImages.home3,
  },
];

const allMatches = [
  {
    id: 1,
    isNew: true,
    name: 'Luxury House',
    img: appImages.home1,
  },
  {
    id: 2,
    isNew: true,
    name: 'Minimal House',
    img: appImages.home2,
  },
  {
    id: 3,
    isNew: true,
    name: 'Suburban House',
    img: appImages.home3,
  },
  {
    id: 4,
    isNew: false,
    name: 'Compact Condo',
    img: appImages.home4,
  },
  {
    id: 5,
    isNew: true,
    name: 'White 2Storyey House',
    img: appImages.home5,
  },
  {
    id: 6,
    isNew: false,
    name: 'Mini House Suv',
    img: appImages.home6,
  },
];

const recentSales = [
  {
    id: 1,
    saleNum: '8',
    name: 'White Modern House',
    img: appImages.home3,
    imges: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 2,
    saleNum: '3',
    name: 'Compact Condo',
    img: appImages.home4,
    imges: [1, 2, 3],
  },
  {
    id: 3,
    saleNum: '4',
    name: 'Clean Land',
    img: appImages.home6,
    imges: [1, 2, 3, 4],
  },
];

const allSales = [
  {
    id: 1,
    saleNum: '8',
    value: 'White Modern House',
    img: appImages.home3,
    imges: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 2,
    saleNum: '3',
    value: 'Compact Condo',
    img: appImages.home4,
    imges: [1, 2, 3],
  },
  {
    id: 3,
    saleNum: '5',
    value: 'Clean Land',
    img: appImages.home6,
    imges: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    saleNum: '3',
    value: 'Condo Bright',
    img: appImages.home2,
    imges: [1, 2, 3],
  },
];

const networkText = 'Check Internet Connection';

const home_items = [
  {
    id: 1,
    title: 'Garage',
    value: '',
    Img: appIcons.garage,
    selected: false,
  },
  {
    id: 2,
    title: 'Driveway',
    value: '',
    Img: appIcons.driveway,
    selected: false,
  },
  {
    id: 3,
    title: 'House Type',
    value: '',
    Img: appIcons.HouseType,
    selected: false,
  },
  {
    id: 4,
    title: 'House Style',
    value: '',
    Img: appIcons.HouseType,
    selected: false,
  },
  {
    id: 5,
    title: 'Exterior',
    value: '',
    Img: appIcons.exterior,
    selected: false,
  },

  {
    id: 7,
    title: 'Water',
    value: '',
    Img: appIcons.water,
    selected: false,
  },
  {
    id: 8,
    title: 'Sewer',
    value: '',
    Img: appIcons.sware,
    selected: false,
  },
  {
    id: 9,
    title: 'Heat Source',
    value: '',
    Img: appIcons.source,
    selected: false,
  },
  {
    id: 10,
    title: 'Heat Type',
    value: '',
    Img: appIcons.heat,
    selected: false,
  },
  {
    id: 11,
    title: 'Air Conditioner',
    value: '',
    Img: appIcons.airCon,
    selected: false,
  },
  {
    id: 12,
    title: 'Laundry',
    value: '',
    Img: appIcons.loundry,
    selected: false,
  },
  {
    id: 13,
    title: 'Fireplace',
    value: '',
    Img: appIcons.fire,
    selected: false,
  },
  {
    id: 14,
    title: 'Central Vacuum',
    value: '',
    Img: appIcons.vacume,
    selected: false,
  },
  {
    id: 15,
    title: 'Basement',
    value: '',
    Img: appIcons.bassement,
    selected: false,
  },

  {
    id: 16,
    title: 'Pool',
    value: '',
    Img: appIcons.pool,
    selected: false,
  },
];

const condo_items = [
  {
    id: 1,
    title: 'Parking Type',
    value: '',
    Img: appIcons.parkingType,
    selected: false,
  },
  {
    id: 2,
    title: 'Parking Ownership',
    value: '',
    Img: appIcons.ownership,
    selected: false,
  },
  {
    id: 1,
    title: 'Garage',
    value: '',
    Img: appIcons.garage,
    selected: false,
  },
  {
    id: 3,
    title: 'House Type',
    value: '',
    Img: appIcons.HouseType,
    selected: false,
  },
  {
    id: 4,
    title: 'House Style',
    value: '',
    Img: appIcons.HouseType,
    selected: false,
  },
  {
    id: 5,
    title: 'Exterior',
    value: '',
    Img: appIcons.exterior,
    selected: false,
  },

  {
    id: 7,
    title: 'Water',
    value: '',
    Img: appIcons.water,
    selected: false,
  },
  {
    id: 8,
    title: 'Sewer',
    value: '',
    Img: appIcons.sware,
    selected: false,
  },
  {
    id: 9,
    title: 'Heat Source',
    value: '',
    Img: appIcons.source,
    selected: false,
  },
  {
    id: 10,
    title: 'Heat Type',
    value: '',
    Img: appIcons.heat,
    selected: false,
  },
  {
    id: 11,
    title: 'Air Conditioner',
    value: '',
    Img: appIcons.airCon,
    selected: false,
  },
  {
    id: 12,
    title: 'Laundry',
    value: '',
    Img: appIcons.loundry,
    selected: false,
  },
  {
    id: 13,
    title: 'Fireplace',
    value: '',
    Img: appIcons.fire,
    selected: false,
  },

  {
    id: 14,
    title: 'Central Vacuum',
    value: '',
    Img: appIcons.vacume,
    selected: false,
  },
  {
    id: 15,
    title: 'Basement',
    value: '',
    Img: appIcons.bassement,
    selected: false,
  },

  {
    id: 16,
    title: 'Pool',
    value: '',
    Img: appIcons.pool,
    selected: false,
  },
];

const inputItems = [
  {
    id: 1,
    title: 'Bath Rooms',
    value: '',
    Img: appIcons.bath,
  },
  {
    id: 2,
    title: 'Bed Rooms',
    value: '',
    Img: appIcons.bed,
  },
  {
    id: 3,
    title: 'Living Space',
    value: '',
    Img: appIcons.living_space,
  },
  {
    id: 4,
    title: 'Parking Spaces',
    value: '',
    Img: appIcons.parking,
  },
  {
    id: 5,
    title: 'Garage Spaces',
    value: '',
    Img: appIcons.garage_space,
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
  modalData,
  slide1BoxData,
  slide2BoxData,
  slide3BoxData,
  buyerRef,
  buyerRefAdvance,
  addresses,
  property_type_list,
  beds_list,
  bath_list,
  lat_frontage_list,
  myMatches,
  allMatches,
  recentSales,
  allSales,
  networkText,
  inputItems,
  home_items,
  condo_items,
  image_options,
};
