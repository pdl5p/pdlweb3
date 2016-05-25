/// <reference path="../typings/angularjs/angular.d.ts" />
var DeploymentDemo;
(function (DeploymentDemo) {
    var MainCtrl = (function () {
        function MainCtrl() {
            this.greetingMessage = "Hello from TypeScript";
        }
        Object.defineProperty(MainCtrl.prototype, "greeting", {
            get: function () {
                return this.greetingMessage;
            },
            enumerable: true,
            configurable: true
        });
        return MainCtrl;
    })();
    DeploymentDemo.MainCtrl = MainCtrl;
})(DeploymentDemo || (DeploymentDemo = {}));
//# sourceMappingURL=mainctrl.js.map