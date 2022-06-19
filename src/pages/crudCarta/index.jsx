import { useState } from "react";

import "../../fonts/Beleren/Beleren2016-Bold.ttf";

import whitecard from "../../assets/cards/whitecard.jfif";
import blackcard from "../../assets/cards/blackcard.jfif";
import bluecard from "../../assets/cards/bluecard.jfif";
import greencard from "../../assets/cards/greencard.jfif";
import redcard from "../../assets/cards/redcard.jfif";
import goldcard from "../../assets/cards/goldcard.jfif";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import styles from "./styles.module.css";
import { useEffect } from "react";
import { getMana } from "../../services/mana";
import { getType } from "../../services/type";
import { getSubtype } from "../../services/subtype";
import { getHabilidade } from "../../services/skill";
import { createCard } from "../../services/card";

export function CrudCarta() {
  //useState nome, cor, manas, imgURL, tipo, subtipo, habilidade, raridade, dano, resistencia, textoIlustrativo
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState(whitecard);
  const [imgURL, setImgURL] = useState("");
  const [manas, setManas] = useState([]);
  const [tipo, setTipo] = useState("");
  const [tipos, setTipos] = useState([]);
  const [subtipo, setSubtipo] = useState("");
  const [subtipos, setSubtipos] = useState([]);
  const [habilidade, setHabilidade] = useState("");
  const [habilidades, setHabilidades] = useState([]);
  const [raridade, setRaridade] = useState("");
  const [dano, setDano] = useState("");
  const [resistencia, setResistencia] = useState("");
  const [textoIlustrativo, setTextoIlustrativo] = useState("");

  const [qtdMana, setQtdMana] = useState([]);

  const [carregandoMana, setCarregandoMana] = useState(true);
  const [carregandoTipo, setCarregandoTipo] = useState(true);
  const [carregandoSubtipo, setCarregandoSubtipo] = useState(true);
  const [carregandoHabilidade, setCarregandoHabilidade] = useState(true);
  useEffect(() => {
    pegarManas();
    pegarType();
    pegarSubtype();
    pegarHabilidades();
  }, []);

  const pegarManas = async () => {
    const response = await getMana();
    setManas(response);
    var manas = [];
    response.map((mana) => {
      manas.push({
        nome: mana.tipo,
        qtd: 0,
      });
    });
    setQtdMana(manas);
    setCarregandoMana(false);
  };

  const pegarType = async () => {
    const response = await getType();
    setTipos(response);
    setTipo(response[0]._id);
    setCarregandoTipo(false);
  };

  const pegarSubtype = async () => {
    const response = await getSubtype();
    setSubtipos(response);
    setSubtipo(response[0]._id);
    setCarregandoSubtipo(false);
  };

  const pegarHabilidades = async () => {
    const response = await getHabilidade();
    setHabilidades(response);
    setHabilidade(response[0]._id);
    setCarregandoHabilidade(false);
  };

  const getQtdMana = (tipo) => {
    var qtd = qtdMana.filter((item) => {
      return item.nome === tipo;
    });

    console.log(qtd);
    return qtd[0].qtd;
  };

  const getTipoSubtipo = (tipo, subtipo) => {
    var nomeTipo = tipos.filter((item) => {
      return item._id === tipo;
    });

    var nomeSubtipo = subtipos.filter((item) => {
      return item._id === subtipo;
    });
    console.log(subtipo, nomeSubtipo);
    const resposta = nomeTipo[0].nome + " - " + nomeSubtipo[0].nome;
    return resposta;
  };

  const cadastrarCarta = async () => {
    createCard({
      id: "",
      nome,
      cor,
      imgURL,
      manas: qtdMana,
      type: tipo,
      tipo,
      subtipos: subtipo,
      habilidades: habilidade,
      raridade,
      dano,
      resistencia,
      texto_ilustrativo: textoIlustrativo,
    });
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ p: 3, width: "100%" }}
      >
        <Stack sx={{ pr: 3, width: "100%" }} spacing={2}>
          <Typography variant="h4" component="h1">
            Cadastro de cartas
          </Typography>
          <TextField
            fullWidth
            label="Nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <FormControl fullWidth>
            <InputLabel id="select-cor">Cor</InputLabel>
            <Select
              labelId="select-cor"
              value={cor}
              label="Cor"
              onChange={(e) => setCor(e.target.value)}
            >
              <MenuItem value={whitecard}>Branco</MenuItem>
              <MenuItem value={redcard}>Vermelho</MenuItem>
              <MenuItem value={bluecard}>Azul</MenuItem>
              <MenuItem value={greencard}>Verde</MenuItem>
              <MenuItem value={goldcard}>Ouro</MenuItem>
              <MenuItem value={blackcard}>Preto</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="URL da imagem"
            variant="outlined"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
          />

          {carregandoMana ? (
            <CircularProgress />
          ) : (
            <>
              <Stack direction="row" spacing={2} alignItems="center">
                {manas.map((mana) => (
                  <ManaBox key={mana._id} mana={mana} setManas={setQtdMana} />
                ))}
              </Stack>
            </>
          )}

          {carregandoTipo ? (
            <CircularProgress />
          ) : (
            <>
              <FormControl fullWidth>
                <InputLabel id="select-tipo">Tipo</InputLabel>
                <Select
                  labelId="select-tipo"
                  value={tipo}
                  label="Tipo"
                  onChange={(e) => setTipo(e.target.value)}
                >
                  {tipos.map((tipo) => (
                    <MenuItem value={tipo._id}>{tipo.nome}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}

          {carregandoSubtipo ? (
            <CircularProgress />
          ) : (
            <>
              <FormControl fullWidth>
                <InputLabel id="select-subtipo">Subtipo</InputLabel>
                <Select
                  labelId="select-subtipo"
                  value={subtipo}
                  label="Subtipo"
                  onChange={(e) => setSubtipo(e.target.value)}
                >
                  {subtipos.map((subtipo) => (
                    <MenuItem value={subtipo._id}>{subtipo.nome}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}

          {carregandoHabilidade ? (
            <CircularProgress />
          ) : (
            <>
              <FormControl fullWidth>
                <InputLabel id="select-habilidade">Habilidade</InputLabel>
                <Select
                  labelId="select-habilidade"
                  value={habilidade}
                  label="Habilidade"
                  onChange={(e) => setHabilidade(e.target.value)}
                >
                  {habilidades.map((habilidade) => (
                    <MenuItem value={habilidade._id}>
                      {habilidade.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}

          <TextField
            fullWidth
            label="Texto Ilustrativo"
            variant="outlined"
            value={textoIlustrativo}
            onChange={(e) => setTextoIlustrativo(e.target.value)}
          />

          <TextField
            fullWidth
            label="Raridade"
            variant="outlined"
            value={raridade}
            onChange={(e) => setRaridade(e.target.value)}
          />

          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              label="Dano"
              variant="outlined"
              value={dano}
              onChange={(e) => setDano(e.target.value)}
            />
            <TextField
              fullWidth
              label="Resistência"
              variant="outlined"
              value={resistencia}
              onChange={(e) => setResistencia(e.target.value)}
            />
          </Stack>
          <Button variant="contained" color="primary" onClick={cadastrarCarta}>
            Cadastrar Carta
          </Button>
        </Stack>
        <div className={styles.containerCarta}>
          <p className={styles.titulo}>{nome ? nome : ""}</p>
          <img src={imgURL} alt="imgcarta" className={styles.imgCarta} />
          <p className={styles.tipo}>
            {tipo && subtipo ? getTipoSubtipo(tipo, subtipo) : ""}
          </p>
          {/*
          {manas.map((mana) => (
            <p key={mana._id}>
              {mana.tipo} - {getQtdMana(mana.tipo)}
            </p>
          ))} */}

          <p className={styles.textoIlustrativo}>{textoIlustrativo}</p>

          <p className={styles.danoResistencia}>
            {dano}/{resistencia}
          </p>

          <img
            className={styles.carta}
            src={cor}
            alt="carta"
            style={{ width: "400px", height: "560px" }}
          />
        </div>
      </Stack>
    </>
  );
}

function ManaBox({ mana, setManas }) {
  const [qtdMana, setQtdMana] = useState(0);

  const handleChange = (e) => {
    setManas((oldManas) => {
      return oldManas.map((item) => {
        if (item.nome === mana.tipo) {
          return { ...item, qtd: e.target.value };
        }
        return item;
      });
    });
    setQtdMana(e.target.value);
  };

  return (
    <div>
      <p>{mana.tipo}</p>
      <TextField
        label="Qtd mana"
        variant="outlined"
        type="number"
        value={qtdMana}
        onChange={handleChange}
      />
    </div>
  );
}
