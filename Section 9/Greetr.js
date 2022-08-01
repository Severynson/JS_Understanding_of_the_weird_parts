(function (global, $) {
  // 'new' an object;
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  // hidden with the scope of the IIFE and never directly accessible;
  var supportedLangs = ["en", "es"];

  // informal greetings;
  greetings = {
    en: "Hello",
    es: "Hola",
  };

  // formal greetings;
  formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  // logger message;
  var logMessages = {
    en: "Logged in",
    es: "Inicio sesion",
  };

  Greetr.prototype = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },

    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1)
        throw "Invalid language";
    },

    greeting: function () {
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ", " + this.fullName() + ".";
    },

    greet: function (formal) {
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }
    },

    setLang: function (lang) {
      this.language = lang;

      this.validate();

      return this;
    },

    HTMLGreeting: function (selector, formal) {
      if (!$) throw "jQuery not loaded";
      if (!selector) throw "Missing JQuery selector";
      var msg;
      if (formal) msg = this.formalGreeting();
      else msg = this.greeting();

      $(selector).html(msg);

      return this;
    },
  };

  Greetr.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";

    self.validate();
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
