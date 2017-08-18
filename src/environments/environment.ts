// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyClqPi983C4HRoYb2Jh9adMBiH6RvSIgpk",
    authDomain: "tap-o-rama.firebaseapp.com",
    databaseURL: "https://tap-o-rama.firebaseio.com",
    projectId: "tap-o-rama",
    storageBucket: "tap-o-rama.appspot.com",
    messagingSenderId: "720593816691"
  }
};
