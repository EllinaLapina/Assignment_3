/*eslint-env browser */

function tellFortune(kids, partner, place, job) {
    "use strict";
    window.document.write("You will be a " + job + " in " + place + ", and married to " + partner + " with " + kids + " kids.<br>");
}
tellFortune("four", "Tom", "Bali", "cook");
tellFortune("two", "Bill", "USA", "engineer");
tellFortune("no", "Kelly", "Germany", "driver");
