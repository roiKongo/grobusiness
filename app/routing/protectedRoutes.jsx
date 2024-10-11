// import Login from '../screens/Login';
// import SignUp from '../screens/SignUp';
// import Verification from '../screens/Verification';
// import Welcome from '../screens/Welcome';
import { CreateAnnonce } from '../screensV2/annonces/index';
import GsCreateAnnonce from '../screensV2/annonces/gsCreateAnnonce';
export const publicRoutes = [
  /* {
    name: 'Welcome',
    component: Welcome,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'Welcome',
    },
  }, */

  // {
  //   name: 'Login',
  //   component: Login,
  //   options: {
  //     tabBarButton: (props) => null,
  //     tabBarVisible: false,
  //     tabBarBadge: 3,
  //     tabBarLabel: 'Login',
  //   },
  // },
  // {
  //   name: 'SignUp',
  //   component: SignUp,
  //   options: {
  //     tabBarButton: (props) => null,
  //     tabBarVisible: false,
  //     tabBarBadge: 3,
  //     tabBarLabel: 'SignUp',
  //   },
  // },

  // {
  //   name: 'Verification',
  //   component: Verification,
  //   options: {
  //     tabBarButton: (props) => null,
  //     tabBarVisible: false,
  //     tabBarBadge: 3,
  //     tabBarLabel: 'Verification',
  //   },
  // },
  {
    name: 'CreateAnnonce',
    component:GsCreateAnnonce,
    access:"create-annonce",
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      //tabBarBadge: 3,
      tabBarLabel: 'CreateAnnonce',
    },
  }
];
