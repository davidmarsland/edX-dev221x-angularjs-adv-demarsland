var ng = require('@angular/core');
var ngPlatformBrowser = require('@angular/platform-browser');
var uiRouter = require('ui-router-ng2');
var myRoutes = require('./routes');

var TechsModule = require('./techs');

var MainComponent = require('./main');
var HeaderComponent = require('./header');
var TitleComponent = require('./title');
var FooterComponent = require('./footer');

module.exports = ng.NgModule({
  imports: [
    ngPlatformBrowser.BrowserModule,
    uiRouter.UIRouterModule.forRoot({states: myRoutes.STATES, configClass: myRoutes.MyUIRouterConfig}),
    TechsModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [uiRouter.UIView]
})(
  ng.Class({
    constructor: function () {}
  })
);
