import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { createType } from "../../services/type";

export default function CadastrarTipo() {
  const [nome, setNome] = useState("");

  const criarTipo = () => {
    createType({
      nome: nome,
    });
    setNome("");
  };
  return (
    <Stack spacing={2}>
      <TextField
        id="nome_tipo"
        label="Tipo"
        variant="outlined"
        placeholder="Digite o tipo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Button variant="contained" onClick={criarTipo}>
        Cadastrar Tipo
      </Button>
    </Stack>
  );
}
