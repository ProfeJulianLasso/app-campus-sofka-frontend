// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAiCqzCsM-0R9804204qMKqPsZrGH5_xuw",
    authDomain: "retofinal-c203d.firebaseapp.com",
    projectId: "retofinal-c203d",
    storageBucket: "retofinal-c203d.appspot.com",
    messagingSenderId: "304253888036",
    appId: "1:304253888036:web:c0220e17f50a8f44b81ab1",
    measurementId: "G-56TLSFN5FE"
  },
  recaptcha: {
    siteKey: '6LfKNi0cAAAAACeYwFRY9_d_qjGhpiwYUo5gNW5-',
  },
  passwordValidate: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
