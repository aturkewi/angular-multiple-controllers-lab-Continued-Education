function ContactController(){
  var vm = this;
  this.name = 'Avi';
  this.email = 'aviturkewitz@gmail.com';
  this.phone = '617-909-8751'
  this.changeName = function () {
    vm.name = 'Something else!';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
