//js/somefile.js

var welcomeMessage = "Hello World!";
console.log(welcomeMessage);

function Nav() {
  console.log(window.navigator.platform);
  console.log(window.navigator.appVersion);
  console.log(window.navigator.vendor);
}
Nav();

function isOnline() {
  if (navigator.online) {
    console.log("online");
  } else {
    console.log("offline");
  }
}
isOnline();

function specification() {
  console.log(screen.width);
  console.log(scree.height);
  console.log(screen.avai);
  console.log(screen.width);
}
