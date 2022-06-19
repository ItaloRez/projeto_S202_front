import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { createMana } from "../../services/mana";

export default function CadastrarMana() {
  const [tipo, setTipo] = useState("");
  const [cor, setCor] = useState("");
  const [imgURL, setImgURL] = useState("");

  const criarMana = () => {
    createMana({
      tipo,
      cor,
      imgURL,
    });
    limparCampos();
  };

  const limparCampos = () => {
    setTipo("");
    setCor("");
    setImgURL("");
  };
  return (
    <Stack spacing={2}>
      <TextField
        id="nome_tipo"
        label="Tipo"
        variant="outlined"
        placeholder="Digite o tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      />
      <TextField
        id="nome_cor"
        label="Cor"
        variant="outlined"
        placeholder="Digite o tipo"
        value={cor}
        onChange={(e) => setCor(e.target.value)}
      />
      <TextField
        id="nome_url"
        label="URL da imagem"
        variant="outlined"
        placeholder="Digite a URL da imagem"
        value={imgURL}
        onChange={(e) => setImgURL(e.target.value)}
      />
      <Button variant="contained" onClick={criarMana}>
        Cadastrar Mana
      </Button>
    </Stack>
  );
}
