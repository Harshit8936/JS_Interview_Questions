/*
consider a package "lodash 4.17.2". Here 4 represents major version number, 
17 represents minor version version number and 2 represents patch version number
*/

// Major means:- gets incremented when new features added that are not backward compatible are introduced. Ex- Angular 1, Angular 2.
// Minor means:- gets incremented when a new feature is added and does not break any of the existing functionalities.
// Patch means:- gets incremented whenever a bug fix or other minor updates are done.



/*
Caret(^)
it will allows your app to get automatc updates for minor and pathc version number of package

react:- ^17.0.0 means it can update to 17.0.1 or 17.1.0 but not 18.0.0


*/


/*
Tilde(~)
It allows only to update only patch versions number 

react:- ~17.0.0 means update to only 17.0.1 but not 17.1.0 

*/