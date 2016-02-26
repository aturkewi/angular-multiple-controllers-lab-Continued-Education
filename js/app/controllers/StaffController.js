function StaffController(){
  this.name = 'Ringo';
  this.email = 'ringo@music.com';
  this.phone = '555-0387'
}

angular
  .module('app')
  .controller('StaffController', StaffController)
