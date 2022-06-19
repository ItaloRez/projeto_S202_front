import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { createSubtype } from "../../services/subtype";

export default function CadastrarSubtipo() {
  const [nome, setNome] = useState("");

  const criarTipo = () => {
    createSubtype({
      nome: nome,
    });
    setNome("");
  };
  return (
    <Stack spacing={2}>
      <TextField
        id="nome_subtipo"
        label="Subtipo"
        variant="outlined"
        placeholder="Digite o subtipo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Button variant="contained" onClick={criarTipo}>
        Cadastrar Subtipo
      </Button>
    </Stack>
  );
}
