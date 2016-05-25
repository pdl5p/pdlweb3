/// <reference path="../typings/angularjs/angular.d.ts" />

module DeploymentDemo {

    export class MainCtrl {

        private greetingMessage = "Hello from TypeScript";

        get greeting() {
            return this.greetingMessage;
        }
    }

}