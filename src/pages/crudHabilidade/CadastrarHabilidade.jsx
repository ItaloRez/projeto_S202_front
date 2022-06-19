import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { createHabilidade } from "../../services/skill";

export default function CadastrarHabilidade() {
  const [nome, setNome] = useState("");
  const [efeito, setEfeito] = useState("");
  const [descricao, setDescricao] = useState("");

  const criarHabilidade = () => {
    createHabilidade({
      nome,
      efeito,
      descricao,
    });
    limparCampos();
  };

  const limparCampos = () => {
    setNome("");
    setEfeito("");
    setDescricao("");
  };
  return (
    <Stack spacing={2}>
      {/* Criar Textfield nome, efeito e descricao */}
      <TextField
        id="nome_tipo"
        label="Nome"
        variant="outlined"
        placeholder="Digite o nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        id="nome_efeito"
        label="Efeito"
        variant="outlined"
        placeholder="Digite o efeito"
        value={efeito}
        onChange={(e) => setEfeito(e.target.value)}
      />
      <TextField
        id="nome_descricao"
        label="Descrição"
        variant="outlined"
        placeholder="Digite a descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <Button variant="contained" onClick={criarHabilidade}>
        Cadastrar Habilidade
      </Button>
    </Stack>
  );
}
