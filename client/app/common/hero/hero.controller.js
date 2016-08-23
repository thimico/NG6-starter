class HeroController {
  /*@ngInject*/
  constructor(bancoService) {
    this.name = 'hero';
    this.value = 1;
    this.lista = bancoService.obterTodos();
  }

  teste() {
    (this.submitted) = true;
    alert('teste');
  }

  mensagem(elemento) {
    this.value++;
    return elemento;
  }
}

export default HeroController;
