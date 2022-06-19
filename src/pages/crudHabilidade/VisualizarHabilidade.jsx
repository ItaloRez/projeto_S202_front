import { useEffect, useState } from "react";
import { getHabilidade } from "../../services/skill";
import CircularProgress from "@mui/material/CircularProgress";

export default function VisualizarHabilidade() {
  const [carregando, setCarregando] = useState(true);
  const [habilidades, setHabilidades] = useState({});

  useEffect(() => {
    pegarHabilidades();
  }, []);

  const pegarHabilidades = async () => {
    const response = await getHabilidade();
    setHabilidades(response);
    setCarregando(false);
  };

  return (
    <>
      {carregando ? (
        <CircularProgress />
      ) : (
        <div>
          <h1>Habilidades</h1>
          {habilidades.map((habilidade) => {
            return (
              <div
                key={habilidade._id}
                style={{ border: "1px solid black", margin: "10px" }}
              >
                <h2>Nome: {habilidade.nome}</h2>
                <h2>Efeito: {habilidade.efeito}</h2>
                <h2>Descrição: {habilidade.descricao}</h2>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
