/* globals app1 */
/* globals Shared */

(function() {

  "use strict";

  Trillo.CSS.selected = "active";

  app1.app1C = Trillo.inherits(Shared.AppC, function(viewSpec) {
    Shared.AppC.call(this, viewSpec);
  });

  var app1C = app1.app1C.prototype;
  var AppC = Shared.AppC.prototype;

  app1C.handleAction = function(actionName, selectedObj) {
    if (actionName === "sideBarToggler") {
      $('body').toggleClass('sidebar-hidden');
      this.view().windowResized();
      return true;
    } else if (actionName === "asideBarToggler") {
      $('body').toggleClass('aside-menu-hidden');
      this.view().windowResized();
      return true;
    } else if (actionName === "mobileSideBarToggler") {
      $('body').toggleClass('sidebar-mobile-show');
      this.view().windowResized();
      return true;
    }
    return AppC.handleAction.call(this, actionName, selectedObj);
  };

})();
