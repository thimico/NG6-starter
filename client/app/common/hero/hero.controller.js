class HeroController {
  /*@ngInject*/

  constructor(toastr, $http, cfpLoadingBar, usSpinnerService, bancoService) {
    this.name = 'hero';
    this.usSpinnerService = usSpinnerService;
    this.$http = $http;
    this.toastr = toastr;
    this.cfpLoadingBar = cfpLoadingBar;
    this.value = 0.45;
    this.bancoService = bancoService;
    this.lista = bancoService.obterTodos().$object;
  }

  startSpin(){
    this.usSpinnerService.spin('spinner-1');
  }

  stopSpin(){
    this.usSpinnerService.stop('spinner-1');
  }

  filtro() {
    this.lista = this.bancoService.obterTodos({nome: 'a'}).$object;
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

  teste4() {
    this.cfpLoadingBar.start();
  }

  teste1() {
    let x = {teste:'teste'};
    let y = {teste2:'teste2'};
    _.merge(x,y);
    console.log(x);
  }
}

export default HeroController;
