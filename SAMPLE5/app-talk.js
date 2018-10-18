"use strict";
var App;
(function (App) {
    var Talk = /** @class */ (function () {
        function Talk() {
        }
        Talk.GetGreeting = function (now) {
            var hour = now.getHours();
            if (hour < 5) {
                return "Welcome back!";
            }
            else if (hour < 12) {
                return "Good morning!";
            }
            else if (hour < 16) {
                return "Good afternoon!";
            }
            else if (hour < 22) {
                return "Good evening!";
            }
            else {
                return "Welcome back!";
            }
        };
        return Talk;
    }());
    App.Talk = Talk;
})(App || (App = {}));
//# sourceMappingURL=app-talk.js.map