

 export default class Cliente {
    constructor(id = null, nome = null, cpf = null){
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
    }

    toString(){
    return "Id: "+ this.id + ", Nome: " + this.nome + ", CPF: " + this.cpf;
    }
  }
