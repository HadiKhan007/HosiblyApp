import {appIcons} from '../exporter';
import {appImages, appLogos} from '../theme/assets';
import {colors} from '../theme/colors';

const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const web_client_id =
  '396667718237-b5871eer19sabub7jg8qhneksq75d443.apps.googleusercontent.com';
export const video_url =
  'https://billionpound.s3.us-west-2.amazonaws.com/Public/walk_through.mp4';

const stripe_publishableKey =
  'pk_test_51Lf25xJxAUizx0q5OIWfv41879r73FiP61ItNOlcUbE6MsGY8WCmULqWC9KrYyCYz18pbUBPDM7Lbb8N3giMguHh00P7XAmQlT';
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

const select_option_list = [
  {
    id: 0,
    text: 'Yes',
  },
  {
    id: 1,
    text: 'No',
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
    type: 'House',
    imges: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 2,
    saleNum: '3',
    value: 'Compact Condo',
    img: appImages.home4,
    type: 'Condo',
    imges: [1, 2, 3],
  },
  {
    id: 3,
    saleNum: '5',
    value: 'Clean Land',
    img: appImages.home6,
    type: 'Vacant Land',
    imges: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    saleNum: '3',
    value: 'Condo Bright',
    img: appImages.home2,
    type: 'Condo',
    imges: [1, 2, 3],
  },
];

const propertyMatches = [
  {
    id: 1,
    img: appImages.person3,
    name: 'Aspen Franci',
    match: '95%',
    matchIcon: appLogos.roundLogo,
  },
  {
    id: 2,
    img: appImages.person1,
    name: 'Ashlynn Westervelt',
    match: '90%',
    matchIcon: appIcons.locMatch,
  },
  {
    id: 3,
    img: appImages.person2,
    name: 'Maria Vaccaro',
    match: '87%',
    matchIcon: appIcons.homeMatch,
  },
  {
    id: 4,
    img: appImages.person3,
    name: 'Aspen Franci',
    match: '95%',
    matchIcon: appLogos.roundLogo,
  },
  {
    id: 5,
    img: appImages.person1,
    name: 'Ashlynn Westervelt',
    match: '90%',
    matchIcon: appIcons.locMatch,
  },
  {
    id: 6,
    img: appImages.person2,
    name: 'Maria Vaccaro',
    match: '87%',
    matchIcon: appIcons.homeMatch,
  },
  {
    id: 7,
    img: appImages.person3,
    name: 'Aspen Franci',
    match: '95%',
    matchIcon: appLogos.roundLogo,
  },
  {
    id: 8,
    img: appImages.person1,
    name: 'Ashlynn Westervelt',
    match: '90%',
    matchIcon: appIcons.locMatch,
  },
  {
    id: 9,
    img: appImages.person2,
    name: 'Maria Vaccaro',
    match: '87%',
    matchIcon: appIcons.homeMatch,
  },
];

const condoMatches = [
  {
    id: 1,
    img: appImages.person3,
    name: 'Aspen Franci',
    match: '95%',
    matchIcon: appLogos.roundLogo,
  },
  {
    id: 2,
    img: appImages.person1,
    name: 'Ashlynn Westervelt',
    match: '90%',
    matchIcon: appIcons.locMatch,
  },
  {
    id: 3,
    img: appImages.person2,
    name: 'Maria Vaccaro',
    match: '87%',
    matchIcon: appIcons.homeMatch,
  },
];

const landMatches = [
  {
    id: 1,
    img: appImages.person3,
    name: 'Aspen Franci',
    match: '95%',
    matchIcon: appLogos.roundLogo,
  },
  {
    id: 2,
    img: appImages.person1,
    name: 'Ashlynn Westervelt',
    match: '90%',
    matchIcon: appIcons.locMatch,
  },
  {
    id: 3,
    img: appImages.person2,
    name: 'Maria Vaccaro',
    match: '87%',
    matchIcon: appIcons.homeMatch,
  },
  {
    id: 4,
    img: appImages.person1,
    name: 'Ashlynn Westervelt',
    match: '90%',
    matchIcon: appIcons.locMatch,
  },
  {
    id: 5,
    img: appImages.person2,
    name: 'Maria Vaccaro',
    match: '87%',
    matchIcon: appIcons.homeMatch,
  },
];

const homeDetails = [
  {
    id: 1,
    title: 'Budget',
    property: '$25,000 to $50,000',
    isHave: true,
  },
  {
    id: 2,
    title: 'Bedrooms',
    property: '4',
    isHave: true,
  },
  {
    id: 3,
    title: 'Bathrooms',
    property: '4 Bath + Powder Room',
    isHave: true,
  },
  {
    id: 4,
    title: 'Property Types',
    property: 'Multi-Family',
    isHave: true,
  },
  {
    id: 5,
    title: 'Property Styles',
    property: 'Doesn’t matter',
    isHave: true,
  },
  {
    id: 6,
    title: 'Min Lot Forntage',
    property: '30',
    isHave: true,
  },
  {
    id: 7,
    title: 'Lot Size (ft)',
    property: '23 ft to 50 ft',
    isHave: true,
  },
  {
    id: 8,
    title: 'Living Space',
    property: '12 ft to 15 ft',
    isHave: false,
  },
  {
    id: 9,
    title: 'Parking Spots Req.',
    property: '2',
    isHave: true,
  },
  {
    id: 10,
    title: 'Garage Spots Req.',
    property: 'Doesn’t matter',
    isHave: true,
  },
  {
    id: 11,
    title: 'Max Age',
    property: '10',
    isHave: true,
  },
];

const condoDetails = [
  {
    id: 1,
    title: 'Budget',
    property: '$25,000 to $50,000',
    isHave: true,
  },
  {
    id: 2,
    title: 'Bedrooms',
    property: '4',
    isHave: false,
  },
  {
    id: 3,
    title: 'Bathrooms',
    property: '4 Bath + Powder Room',
    isHave: true,
  },
  {
    id: 4,
    title: 'Property Types',
    property: 'Multi-Family',
    isHave: true,
  },
  {
    id: 5,
    title: 'Property Styles',
    property: 'Doesn’t matter',
    isHave: false,
  },
  {
    id: 6,
    title: 'Min Lot Forntage',
    property: '30',
    isHave: true,
  },
  {
    id: 7,
    title: 'Lot Size (ft)',
    property: '23 ft to 50 ft',
    isHave: true,
  },
  {
    id: 8,
    title: 'Living Space',
    property: '12 ft to 15 ft',
    isHave: false,
  },
  {
    id: 9,
    title: 'Parking Spots Req.',
    property: '2',
    isHave: true,
  },
  {
    id: 10,
    title: 'Balcony',
    property: 'Yes',
    isHave: true,
  },
  {
    id: 11,
    title: 'Security',
    property: 'Cameras',
    isHave: true,
  },
  {
    id: 12,
    title: 'Laundry',
    property: 'In Building',
    isHave: false,
  },
  {
    id: 13,
    title: 'Max Age',
    property: '10',
    isHave: true,
  },
];

const landDetails = [
  {
    id: 1,
    title: 'Budget',
    property: '$25,000 to $50,000',
    isHave: true,
  },
  {
    id: 2,
    title: 'Min Lot Forntage',
    property: '200',
    isHave: true,
  },
  {
    id: 3,
    title: 'Lot Size (sqm)',
    property: '143',
    isHave: true,
  },
];

const chat = [
  {
    id: 1,
    viewType: 'receiver',
    message: 'Can I see your lot view?',
  },
  {
    id: 2,
    viewType: 'sender',
    message:
      'Amet minim mollit non deserunt ullamco 😄. Dolor do amet sint. Amet minim mollit non deserunt ullamco 😄. Dolor do amet sint.',
  },
  {
    id: 3,
    viewType: 'receiver',
    message:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 4,
    viewType: 'sender',
    message: 'Hello 👋 Amet minim mollit non deserunt ullamco 😄',
  },
];

const settings = [
  {
    id: 1,
    title: 'Share App',
    screen: 'share',
    icon: appIcons.share,
  },
  {
    id: 2,
    title: 'Notifications',
    screen: 'Notifications',
    icon: appIcons.notify,
  },
  {
    id: 3,
    title: 'Payment Method',
    screen: 'PayMethod',
    icon: appIcons.payMethod,
  },
  {
    id: 4,
    title: 'Privacy Policy',
    screen: 'PrivacyPolicy',
    icon: appIcons.privacy,
  },
  {
    id: 5,
    title: 'Support',
    screen: 'Support',
    icon: appIcons.support,
  },
  {
    id: 6,
    title: 'Terms & Conditions',
    screen: 'Terms',
    icon: appIcons.terms,
  },
  {
    id: 7,
    title: 'FAQ',
    screen: 'FAQ',
    icon: appIcons.faq,
  },
  {
    id: 7,
    title: 'Blocked List',
    screen: 'BlockedList',
    icon: appIcons.blockIcon,
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
    id: 0,
    title: 'Parking Type',
    value: '',
    Img: appIcons.parkingType,
    selected: false,
  },
  {
    id: 1,
    title: 'Parking Ownership',
    value: '',
    Img: appIcons.ownership,
    selected: false,
  },
  {
    id: 2,
    title: 'Garage',
    value: '',
    Img: appIcons.garage,
    selected: false,
  },
  {
    id: 3,
    title: 'Condo Type',
    value: '',
    Img: appIcons.condoType,
    selected: false,
  },
  {
    id: 4,
    title: 'Condo Style',
    value: '',
    Img: appIcons.condoStyle,
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
    id: 6,
    title: 'Balcony',
    value: '',
    Img: appIcons.balcony,
    selected: false,
  },
  {
    id: 7,
    title: 'Exposure',
    value: '',
    Img: appIcons.exposure,
    selected: false,
  },
  {
    id: 8,
    title: 'Security',
    value: '',
    Img: appIcons.security,
    selected: false,
  },
  {
    id: 9,
    title: 'Pets Allowed',
    value: '',
    Img: appIcons.pets,
    selected: false,
  },
  {
    id: 10,
    title: 'Included Utilities',
    value: '',
    Img: appIcons.settings,
    selected: false,
  },
  {
    id: 11,
    title: 'Water',
    value: '',
    Img: appIcons.water,
    selected: false,
  },
  {
    id: 12,
    title: 'Sewer',
    value: '',
    Img: appIcons.sware,
    selected: false,
  },
  {
    id: 13,
    title: 'Heat Source',
    value: '',
    Img: appIcons.source,
    selected: false,
  },
  {
    id: 14,
    title: 'Heat Type',
    value: '',
    Img: appIcons.heat,
    selected: false,
  },
  {
    id: 15,
    title: 'Air Conditioner',
    value: '',
    Img: appIcons.airCon,
    selected: false,
  },
  {
    id: 16,
    title: 'Laundry',
    value: '',
    Img: appIcons.loundry,
    selected: false,
  },
  {
    id: 17,
    title: 'Fireplace',
    value: '',
    Img: appIcons.fire,
    selected: false,
  },

  {
    id: 18,
    title: 'Central Vacuum',
    value: '',
    Img: appIcons.vacume,
    selected: false,
  },
  {
    id: 19,
    title: 'Basement',
    value: '',
    Img: appIcons.bassement,
    selected: false,
  },

  {
    id: 20,
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
    title: 'Total Number of Rooms',
    value: '',
    Img: appIcons.living_space,
  },
  {
    id: 4,
    title: 'Total Parking Spaces',
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
const property_image = 'https://wallpaperaccess.com/full/1700222.jpg';

const weekDays = [
  {
    day: 'Mon',
    selected: false,
  },
  {day: 'Tue', selected: false},
  {day: 'Wed', selected: false},
  {day: 'Thu', selected: false},
  {day: 'Fri', selected: false},
  {day: 'Sat', selected: false},
  {day: 'Sun', selected: false},
];

const buyers_list = [
  {id: 0, title: ''},
  {id: 1, title: ''},
  {id: 2, title: ''},
  {id: 3, title: ''},
  {id: 4, title: ''},
];

const buyer_house_list = [
  {
    id: 0,
    title: 'Any Specific Property Types?',
    value: '',
    key: 'property_types',
  },
  {
    id: 1,
    title: 'Any Specific Property Styles?',
    value: '',
    key: 'property_style',
  },

  {
    id: 2,
    title: 'Parking Spots Required',
    value: '',
    key: 'parking_spot',
  },
  {
    id: 3,
    title: 'Garage Spots Required',
    value: '',
    key: 'garbage_spot',
  },
];

const buyer_house_inputs = [
  {
    id: 0,
    title: 'Lot Size',
    subtitle: '(ft)',
    minValue: '',
    maxValue: '',
    key: 'min_lot_size',
    key1: 'max_lot_size',
  },
  {
    id: 1,
    title: 'Total Number of Rooms',
    subtitle: '',
    minValue: '',
    maxValue: '',
    key: 'min_living_space',
    key1: 'max_living_space',
  },
];

const buyer_condo_list = [
  {
    id: 0,
    title: 'Any Specific Property Types?',
    value: '',
    key: 'property_types',
  },
  {
    id: 1,
    title: 'Any Specific Property Styles?',
    value: '',
    key: 'property_style',
  },

  {
    id: 2,
    title: 'Parking Spots Required',
    value: '',
    key: 'parking_spot',
  },

  {
    id: 3,
    title: 'Balcony',
    value: '',
    key: 'balcony',
  },
  {
    id: 4,
    title: 'Security',
    value: '',
    key: 'security',
  },
  {
    id: 5,
    title: 'Laundry',
    value: '',
    key: 'laundry',
  },
];

const buyer_vacant_list = [];
const buyer_vacant_input = [
  {
    id: 0,
    title: 'Lot Size',
    subtitle: '(ft)',
    minValue: '',
    maxValue: '',
    key: 'min_lot_size',
  },
];

const allIcons = [
  {
    id: 0,
    press: 'guides',
    icon: appIcons.addressIcon,
  },
  {
    id: 1,
    press: 'polygon',
    icon: appIcons.direction,
  },
  {
    id: 2,
    press: 'zoomin',
    icon: appIcons.zoomOut,
  },
  {
    id: 3,
    press: 'zoomout',
    icon: appIcons.zoomIn,
  },
  {
    id: 4,
    press: 'school',
    icon: appIcons.school,
  },
];

const zoomIcons = [
  {
    id: 1,
    press: 'zoomin',
    icon: appIcons.zoomOut,
  },
  {
    id: 2,
    press: 'zoomout',
    icon: appIcons.zoomIn,
  },
];

const guildLines = [
  {
    id: 1,
    img: appIcons.step1,
    title: 'Step 1',
    desc: 'Drag to expand the border. You can also drag each side however you like depending on the location that you wanted.',
  },
  {
    id: 2,
    img: appIcons.step2,
    title: 'Step 2',
    desc: `Drag to expand the border. You can also drag each side however you like depending on the location that you wanted.`,
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
  propertyMatches,
  homeDetails,
  chat,
  condoMatches,
  landMatches,
  condoDetails,
  landDetails,
  settings,
  inputItems,
  home_items,
  condo_items,
  image_options,
  property_image,
  weekDays,
  buyers_list,
  buyer_house_list,
  buyer_house_inputs,
  buyer_condo_list,
  buyer_vacant_input,
  buyer_vacant_list,
  select_option_list,
  allIcons,
  guildLines,
  zoomIcons,
};
