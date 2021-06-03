import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      //Utilizamdo o componente de container e suas propriedades fica mais simples de trabalhar o layout do formulario.
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          Formulário de cadastro
        </Typography>
        <FormularioCadastro  aoEnviar={aoEnviarForm} validarCpf={validarCpf}/>
      </Container>
    );
  }
}
function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCpf(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"O CPF DEVE TER 11 DIGITOS"}
  }else{
    return{valido:true, texto:""}
  }
}

export default App;
//Podemos escrever componentes como classes ou funções
/*Um function component é mais simples de ler e normalmente possui menos código do que um class component.
Normalmente a leitura e o entendimento de um function component é são mais simples do que em um class component. 
Isso porque, sem usarmos o state e outros métodos de ciclo de vida do react um function component é apenas uma função JS simples que retorna um elemento JSX.*/

/*cria componentes extremamente customizáveis a partir de um conjunto de propriedades. 
Na hora que você estiver criando seus componentes pense em usar propriedades de maneira que eles sejam mais reutilizáveis. */