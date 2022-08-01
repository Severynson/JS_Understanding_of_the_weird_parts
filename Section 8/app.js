/////// JQuery ///////////////////////////////////

var q = $("ul.people").addClass("newclass").removeClass("people");
console.log(q);

///////  My 'SQuery' /////////////////////////////

const main = SQuery("#main");

console.log(main);

main.cleanAll();
main.addJSXLike("<h2>Passed new JSX-like code...</h2>");

///////////////////////////////////////////////////
