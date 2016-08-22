class HeroController {
  /*@ngInject*/
  constructor(bancoService) {
    this.name = 'hero';
    this.value = 1;
    this.lista = bancoService.obterTodos();
  }

  teste() {
    this.submitted = true;
    alert('teste');
  }

  mensagem(elemento, touched) {
    console.log(this.value);
    this.value++;
    return elemento;

    if (!touched)
      return '';

    if (!this.submitted)
      return '';

    if (elemento.required)
      return 'Campo obrigatório';
  }
}

export default HeroController;
