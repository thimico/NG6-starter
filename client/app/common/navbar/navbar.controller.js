class NavbarController {
  /*@ngInject*/
  constructor($state, $window, $stateParams){
    this.name = 'navbar';
    this.$state = $state;
    this.$window = $window;
  }

  isAuthed() {
    return true;
    // return !this.$state.includes('login') && this.authService.isAuthed();
  }

  logout() {
    this.userService.logout();
  }

  newPage(state) {
    this.$window.open(this.$state.href(state, {hideNavbar: true}), '_blank', "height=700,width=900,menubar=false, toolbar=false");
  }
}

export default NavbarController;
