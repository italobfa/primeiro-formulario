import React, { useState } from "react";
import { Switch, TextField, Button, FormControlLabel } from "@material-ui/core";

//funcoes nao devem guardar estados
//Hooks nao podem estar dentro de estruturas condicionais
//Estudar mais regras de Hooks

function FormularioCadastro({ aoEnviar, validarCpf }) {
  /*Chamamos diretamente o objeto que vai receber as propriedade passadas por essa nossa funcao, 
  essa técnica é chamada de desconstrução de objetos e podemos fazer ela com Arrays também.
  Recebendo a função de validação (validarCpf) por propriedades conseguimos fazer com que nosso formulário seja mais flexível.*/
  const [nome, setNome] = useState(""); //Utilizamos o useState, para receber e atualizar as informcoes na variavel quando ela for modificada, assim eu guardo um mesmo valor em duas variaveis.
  const [sobrenome, setSobrenome] = useState(""); //Estou criando um array e salvando a variavel sobrenome na posicao [0] e o setSobrenome na posicao [1]
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = validarCpf(event.target.value); //Coloquei validarCPF no nome da funcao e nao estava funfionando, tiver que colocar validarCpf para funcionar
          setErros({ cpf: ehValido });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="Promoções"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="Novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
