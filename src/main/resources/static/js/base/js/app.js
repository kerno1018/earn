define(["jquery","knockout","acs-nav","user","./init_menu","modules/init_modules","ko-validation-util"],function(e,t,n,u,r,s){function i(){function s(){function u(t,n,r){e.each(n,function(e,n){n.favoriteMenu&&(r[t]=r[t]||[],r[t].push(n)),n.submenus&&n.submenus.length>0&&u(t,n.submenus,r)})}function s(t){var n={};return e.each(t,function(t,r){var s={};u(r.menuText,r.submenus,s),e.extend(n,s)}),n}this.menuItems=t.observableArray(),this.favoriteMenus=t.observable(),this.sideMenus=t.observableArray(),this.currentModule=t.observable(),this.showSideMenu=t.observable(),this.topMenus=t.observableArray(),this.navhtml=t.observable(""),this.createMenuList=t.observableArray(),this.showSideMenu.subscribe(function(t){t?e("#main").addClass("col-sm-9 col-md-10"):e("#main").removeClass("col-sm-9 col-md-10")}),this.generateMenu=function(n){var u=[],i=e.extend(!0,{},n),o="Create";e.each(i,function(e,t){t.menu&&r.insertMenuItem(u,t)}),t.utils.arrayPushAll(this.createMenuList,r.getCreateMenuList(u,o)),u=u.filter(function(e){return e.menuText!==o}),this.menuItems(u),this.favoriteMenus(s(u)),this.navhtml(r.constructMenuLayout(u))},this.reloadSideMenuOfModule=function(e,t){var n=e.split("|")[0].trim();if(n!=this.currentModule()&&!t){var u=findMenuItem(this.menuItems(),n);this.sideMenus(u.submenus.sort(function(e,t){var n=e.subMenuGroup||"",u=t.subMenuGroup||"";return n==u?(e.order=e.order||-1,t.order=t.order||-1,e.order-t.order):n.localeCompare(u)})),this.currentModule(n),this.initMenu()}this.showSideMenu(!t)},this.initMenu=function(){n.initNavigationMenu()}}var i=this;return console.log("define global template object, initialize to login..."),i.user=u,i.logout=function(){u.userLoggedIn(!1),u.userName(null),u.userId(null),window.location.href="rest/user/user_logout"},i.isLocalUser=function(){return u.userType()>0},i.fullName=t.computed(function(){return u.firstName()+" "+u.lastName()},i),i.initials=t.computed(function(){var e="";return u.firstName()&&u.lastName()&&(e=u.firstName().charAt(0).toUpperCase()+""+u.lastName().charAt(0).toUpperCase()),e},i),i.nagivationMenu=new s,i}return new i});