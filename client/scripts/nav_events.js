if (Meteor.isClient) {
  Template.nav.events({
    'click a': function (e) {
      e.preventDefault();
      switch($(e.currentTarget).attr('data-route')){
        case 'dashboard':
          Router.go('dashboard');
          break;
        case 'home':
          Router.go('home');
          break;
        case 'logout':
          Meteor.logout();
          break;
      }
    }
  });

}