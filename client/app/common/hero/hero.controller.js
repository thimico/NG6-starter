class HeroController {
  /*@ngInject*/
  constructor(bancoService) {
    this.title = 'hero';
    this.value = 1;
    this.lista = bancoService.findAll();
  }

  teste2() {
    (this.submitted) = true;
    alert('teste');
  }

  mensagem(elemento) {
    this.value++;
    return elemento;
  }
}

export default HeroController;
