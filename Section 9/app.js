var g = G$("John", "Doe");
console.log(g);
g.greet().setLang("es").greet("formal").setLang("en").greet("formal");

$("#login").click(() => {
  var loginGrtr = G$("John", "Doe", "en");

  $("#logindiv").hide();

  loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
