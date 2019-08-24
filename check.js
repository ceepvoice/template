function themeInfo(a){
 var info = { 
 "name": "NullShell", // Template Name
 "coder": "i.aSalt", // Who wrote it ?
 "version":"1.1.0", // Present Version 
 "cost":"300.000", // Self Support Cost
 "newVersion": false , // New Version
 "update": false , // Free update
 "uVersion" : false , // New Free Update Version 
 "uNew" : false , // What is new free update version have ?
 "pUpdate": false , // Paid update
 "pVersion": false ,  // New Paid Update Version 
 "pCost":false , // Paid Update Version Cost
 "pNew":false, // What is new paid version have ?
 };
if ( info[a] != false || info[a] != "undefined" ) {
 return info[a] }
 else {
 return false;
 }
}
