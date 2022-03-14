class animais {
    constructor(nome, idade, sexo, cor, dono, data, obs) {
      this.nome = nome; this.idade = idade;this.sexo = sexo;
      this.cor = cor;this.dono = dono;this.data = data;
      this.obs = obs;
    }
}


function cadastroAnimais(){

    nome= document.getElementsByName("NomeAnimal")[0].value;
    idade= document.getElementsByName("IdadeAnimal")[0].value;
    sexo= document.getElementsByName("SexoAnimal")[0].value;
    cor= document.getElementsByName("CorAnimal")[0].value;
    dono= document.getElementsByName("DonoAnimal")[0].value;
    data= document.getElementsByName("DataAtendimento")[0].value;
    obs= document.getElementsByName("ObsAnimal")[0].value;

    //NovoAnimal = new animais(nome, idade, sexo, cor, dono, data, obs);
    NovoAnimal= [nome, idade, sexo, cor, dono, data, obs]

    localStorage.setItem("animal", NovoAnimal);

    alert("Animal Cadastrado com Sucesso");

}

function animaisCadastrados(){
    Animal= localStorage.getItem("animal");
    //texto=document.getElementById("Cadastrados").innerHTML = Animal;
    alert(Animal);
      

}

function cadastroContatos(){

    nome= document.getElementsByName("NomeContato")[0].value;
    email= document.getElementsByName("Email")[0].value;
    obs= document.getElementsByName("Assunto")[0].value;

    //NovoAnimal = new animais(nome, idade, sexo, cor, dono, data, obs);
    contato= [nome, email, obs]

    localStorage.setItem("contato", contato);

    alert("mensagem enviada com sucesso");

}



  
