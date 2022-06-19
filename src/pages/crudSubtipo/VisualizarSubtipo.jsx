import { useEffect, useState } from "react";
import { getSubtype } from "../../services/subtype";
import CircularProgress from "@mui/material/CircularProgress";

export default function VisualizarSubtipo() {
  const [carregando, setCarregando] = useState(true);
  const [subtipos, setSubtipos] = useState({});

  useEffect(() => {
    pegarType();
  }, []);

  const pegarType = async () => {
    const response = await getSubtype();
    setSubtipos(response);
    setCarregando(false);
  };

  return (
    <>
      {carregando ? (
        <CircularProgress />
      ) : (
        <div>
          <h1>Subtipos</h1>
          {subtipos.map((subtipo) => {
            return (
              <div key={subtipo._id}>
                <h2>- {subtipo.nome}</h2>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
