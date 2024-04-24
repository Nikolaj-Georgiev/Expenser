/* eslint-disable no-unused-vars */
import imagePieSmall from '../assets/pie-small.png';
import imagePiggyBankSmall from '../assets/pig-small.png';
import imageLightBulbSMall from '../assets/light-bulb-small.png';
import imageCloudSmall from '../assets/cloud-small.png';
import imageFamilySmall from '../assets/family2-small.png';

import imagePieBig from '../assets/pie-big.png';
import imagePiggyBankBig from '../assets/pig-big.png';
import imageLightBulbBig from '../assets/light-bulb-big.png';
import imageCloudBig from '../assets/cloud-big.png';
import imageFamilyBig from '../assets/family-big.jpg';

import imageCustomer1 from '../assets/customers/jimmy.jpg'
import imageCustomer2 from '../assets/customers/jurica.jpg'
import imageCustomer3 from '../assets/customers/philip.jpg'
import imageCustomer4 from '../assets/customers/stephanie.jpg'

import imageChart1 from '../assets/customers/chart1.webp'
import imageChart2 from '../assets/customers/chart2.webp'





import { redirect } from 'react-router-dom';

export const CARDS_INFO = [
  {
    id: '1C',
    front: {
      img: imagePieSmall,
      imgAlt: 'Image of a pie chart',
      title: 'Monthly budget for your household',
      description: 'Manage your household expenses effectively with our monthly budget tracker. Keep track of your income and expenses to ensure financial stability.'
    },
    back: {
      icon: 'pie-chart-outline',
      description: 'Our monthly budget tracker provides a comprehensive overview of your household\'s financial health. It allows you to input various income sources and track different types of expenses, from groceries to utility bills. With visual representations of your spending habits, you can easily identify areas where you might be overspending and make necessary adjustments. The tracker also helps you set and achieve savings goals, making it easier to plan for future expenses or investments. Remember, a well-managed budget is the first step towards financial freedom. 💰'
      // Start using our monthly budget tracker today and take control of your household finances. 
    }
  },
  {
    id: '2C',
    front: {
      img: imagePiggyBankSmall,
      imgAlt: 'Image of a piggy bank',
      title: 'Set up family savings goals',
      description: 'Plan for the future with our family savings goals feature. Set targets, track progress, and achieve your financial dreams.'
    },
    back: {
      icon: 'wallet-outline',
      description: 'Our family savings goals feature is designed to help you plan for the future. Whether you\'re saving for a family vacation, a new home, or your children\'s education, this feature allows you to set specific financial goals and track your progress towards achieving them. You can input the amount you want to save, set a timeline, and the feature will calculate how much you need to save each month. It also provides a visual representation of your progress, making it easy to see how close you are to reaching your goal. Plus, it offers tips and advice on how to save more effectively. 💰'
      // Start setting up your family savings goals today and take a step closer to realizing your financial dreams. 
    }
  },
  {
    id: '3C',
    front: {
      img: imageLightBulbSMall,
      imgAlt: 'Image of a light bulb',
      title: 'Get personalized tips and insights',
      description: 'Unlock your financial potential with personalized tips and insights tailored to your spending habits and savings goals.'
    },
    back: {
      icon: 'bulb-outline',
      description: 'Our feature of personalized tips and insights is like having a financial advisor in your pocket. Based on your income, expenses, and savings goals, it provides customized advice to help you manage your finances more effectively. From tips on reducing unnecessary expenses to insights on investment opportunities, this feature covers a wide range of financial aspects. It also learns from your spending habits over time, continually refining and personalizing the advice it provides. With these insights, you can make informed decisions and develop strategies that align with your financial goals. 💰'
      // Start exploring personalized tips and insights today and empower yourself to make smarter financial decisions. 
    }
  },
  {
    id: '4C',
    front: {
      img: imageCloudSmall,
      imgAlt: 'Image of a cloud services',
      title: 'Access your data from any device',
      description: 'Stay connected with your finances. Access your data anytime, anywhere, from any device with our cross-platform compatibility.'
    },
    back: {
      icon: 'cloud-done-outline',
      description: 'Our feature of accessing data from any device ensures that you have your financial information at your fingertips, no matter where you are or what device you\'re using. Whether you\'re on your home computer, your laptop, or your mobile device, you can log in to your account and view your expenses, track your savings goals, and get personalized insights. This feature is designed with a focus on security and privacy, ensuring that your data is protected while still being easily accessible to you. It also syncs your data across devices in real-time, so your financial information is always up-to-date. 💰'
      // Start accessing your data from any device today and stay connected with your finances on the go. 
    }
  },
  {
    id: '5C',
    front: {
      img: imageFamilyBig,
      imgAlt: 'Image of a happy family',
      title: 'Share progress with your family',
      // title: 'Share your progress with your family',
      description: 'Keep your family in the loop. Share your financial progress and celebrate milestones together with our easy sharing feature.'
    },
    back: {
      icon: 'people-outline',
      description: 'Our feature of sharing progress with your family makes financial management a collaborative effort. It allows you to share updates on your income, expenses, and savings goals with your family members, fostering transparency and mutual accountability. Whether it\'s reaching a savings goal or reducing monthly expenses, every achievement can be celebrated together. This feature also promotes financial literacy among family members, especially children, by involving them in the process. Security measures to ensure your financial information remains private and secure. 💰'
      // Start sharing your progress with your family today and make financial management a family affair. 
    }
  },
];

export const HERO_BULLETS = [
  {
    id: '1b',
    icon: 'pie-chart-outline',
    bulletText: 'Monthly budget for your household'
  },
  {
    id: '2b',
    icon: 'wallet-outline',
    bulletText: 'Set up family savings goals'
  },
  {
    id: '3b',
    icon: 'bulb-outline',
    bulletText: 'Get personalized tips and insights'
  },
  {
    id: '4b',
    icon: 'cloud-done-outline',
    bulletText: 'Access your data from any device'
  },
  {
    id: '5b',
    icon: 'people-outline',
    bulletText: 'Share your progress with your family'
  },
]

export const CUSTOMERS = [
  {
    id: 'cus1',
    testimonial: '“Expenser is a lifesaver. It scans and records my receipts, links my accounts, and reminds me of bills. It\'s like having a personal accountant in my pocket.”',
    image: imageCustomer1,
    imageAlt: 'A jung woman with beautiful green eyes and a brown hair.',
    name: ' Lisa, 28'
  },
  {
    id: 'cus2',
    testimonial: '“Expenser is the best app for family finances. I can see and share our expenses with my spouse, and we can stay on top of our budget.”',
    image: imageCustomer2,
    imageAlt: 'A good looking middle age man dressed with shirt and sweater',
    name: ' David, 42'
  },
  {
    id: 'cus3',
    testimonial: '“Expenser is awesome! It\'s so easy to use and it helps me manage my money better. I can set up budgets, track my spending, and save more.”',
    image: imageCustomer4,
    imageAlt: 'A beautiful woman with brown hair dressed in black',
    name: ' Anna, 34'
  },
  {
    id: 'cus4',
    testimonial: '“Expenser is amazing. It\'s a powerful and user-friendly app that helps me control my finances. I can create goals, view reports, and sync my accounts.”',
    image: imageCustomer3,
    imageAlt: 'A middle age man with red hat and a black sweater',
    name: ' Kevin, 37'
  }
]

export const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFib2J0cWx0cmZoZXhsaHdiamlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0MjE1NDAsImV4cCI6MjAyMDk5NzU0MH0.n6Ha3kWvSfOGQrsWJoMFodmL-vGCmmsoiEtto7ueCPg';

export const EXPENSES_MOCK = [
  {
    id: '1',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 50.35,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'medical',
      image: medicalPic,
    },
  },
  {
    id: '2',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 10,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'school',
      image: schoolPic,
    },
  },
  {
    id: '3',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 10,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'car',
      image: carPic,
    },
  },
  {
    id: '4',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'groceries',
      image: groceriesPic,
    },
  },
  {
    id: '5',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'groceries',
      image: groceriesPic,
    },
  },
  {
    id: '6',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 50.35,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'medical',
      image: medicalPic,
    },
  },
  {
    id: '7',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 10,
    description: 'Hujnja',
    userID: 'sdkb',
    expenseType: {
      name: 'school',
      image: schoolPic,
    },
  },
  {
    id: '8',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 10,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'car',
      image: carPic,
    },
  },
  {
    id: '9',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'groceries',
      image: groceriesPic,
    },
  },
  {
    id: '10',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'groceries',
      image: groceriesPic,
    },
  },
  {
    id: '11',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 50.35,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'medical',
      image: medicalPic,
    },
  },
  {
    id: '12',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 10,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'school',
      image: schoolPic,
    },
  },
  {
    id: '13',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 10,
    description: 'Raboti!',
    userID: 'sdkb',
    expenseType: {
      name: 'car',
      image: carPic,
    },
  },
  {
    id: '14',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'groceries',
      image: groceriesPic,
    },
  },
  {
    id: '15',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'groceries',
      image: groceriesPic,
    },
  },];

export const SAVINGS_MOCK = [
  {
    id: '1',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'vacation',
      image: vacationImg,
    },
  },
  {
    id: '2',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'kids',
      image: kidsSavingsImg,
    },
  },
  {
    id: '3',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'vacation',
      image: vacationImg,
    },
  },
  {
    id: '4',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'car',
      image: carImg,
    },
  },
  {
    id: '5',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'retirement',
      image: retirementImg,
    },
  },
  {
    id: '6',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'vacation',
      image: vacationImg,
    },
  },
  {
    id: '7',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'kids',
      image: kidsSavingsImg,
    },
  },
  {
    id: '8',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'vacation',
      image: vacationImg,
    },
  },
  {
    id: '9',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'car',
      image: carImg,
    },
  },
  {
    id: '10',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'retirement',
      image: retirementImg,
    },
  },
  {
    id: '11',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'vacation',
      image: vacationImg,
    },
  },
  {
    id: '12',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'kids',
      image: kidsSavingsImg,
    },
  },
  {
    id: '13',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'vacation',
      image: vacationImg,
    },
  },
  {
    id: '14',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'car',
      image: carImg,
    },
  },
  {
    id: '15',
    createdAt: '2024-01-24 13:26:56.028086+00',
    actionDate: '25/01/2024',
    expensePrice: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    userID: 'sdkb',
    expenseType: {
      name: 'retirement',
      image: retirementImg,
    },
  },
]

export const EXPENSES_CATEGORIES = [
  {
    id: '1',
    created_at: '006',
    name: 'groceries',
    image: groceriesPic,
  },
  {
    id: '2',
    created_at: '007',
    name: 'car',
    image: carPic,
  },
  {
    id: '3',
    created_at: '008',
    name: 'medical',
    image: medicalPic,
  },
  {
    id: '4',
    created_at: '009',
    name: 'school',
    image: schoolPic,
  },
  {
    id: '5',
    created_at: '010',
    name: 'other',
    image: schoolPic,
  },

]

export const SAVINGS_CATEGORIES = [
  {
    id: '1',
    created_at: '001',
    name: 'vacations',
    image: vacationImg,
  },
  {
    id: '2',
    created_at: '002',
    name: 'kids',
    image: kidsSavingsImg,
  },
  {
    id: '3',
    created_at: '003',
    name: 'car',
    image: carImg,
  },

  {
    id: '4',
    created_at: '004',
    name: 'retirement',
    image: retirementImg,
  },
  {
    id: '5',
    created_at: '005',
    name: 'other',
    image: retirementImg,
  },

]

import carPic from '../assets/expenses-images/car1.webp';
import groceriesPic from '../assets/expenses-images/groceries-new.webp';
import medicalPic from '../assets/expenses-images/medical1.webp';
import schoolPic from '../assets/expenses-images/school1.webp';

import retirementImg from '../assets/savings-images/retirement1.webp';
import kidsSavingsImg from '../assets/savings-images/forTheKids-test.webp';
import vacationImg from '../assets/savings-images/vacation-test.webp';
import carImg from '../assets/savings-images/car-savings.webp';
