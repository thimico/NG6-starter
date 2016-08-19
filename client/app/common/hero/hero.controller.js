class HeroController {
  /*@ngInject*/

  constructor(toastr, $http, cfpLoadingBar) {
    this.name = 'hero';
    this.$http = $http;
    this.toastr = toastr;
    this.cfpLoadingBar = cfpLoadingBar;
    this.value = 0.45;
  }

  teste2() {
    swal({
        title: `Remover ${this.entityName}`,
        text: "Tem certeza que deseja remover o Registro?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, remover!",
        cancelButtonText: "Não, cancelar!",
      },
      (isConfirm) => {
        if (isConfirm)
          swal("Removido!", "O Registro foi removido com sucesso.", "success");
      }
    ).then(() => {
      swal(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      );
    });
  }

  teste3() {
    this.toastr.success('I don\'t need a title to live');
  }

  teste() {
    this.cfpLoadingBar.start();
  }
}

export default HeroController;
