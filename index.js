class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "AVADA KEDAVRA";
        break;
      case "guerreiro":
        ataque = "MARTELADA DOS DEUSES";
        break;
      case "arqueiro":
        ataque = "FLECHA DA MORTE";
        break;
      case "ninja":
        ataque = "RASEGAN SHURIKEN";
        break;
      default:
        ataque = "ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Personagens
const mago = new Heroi("Alvo Dumbledore", 77, "Mago");
const guerreiro = new Heroi("Thor", 35, "Guerreiro");
const arqueiro = new Heroi("Oliver Queen", 32, "Arqueiro");
const ninja = new Heroi("Uzumaki Naruto", 17, "Ninja");

// Testando os ataques
mago.atacar();
guerreiro.atacar();
arqueiro.atacar();
ninja.atacar();