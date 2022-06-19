import { useEffect, useState } from "react";
import { getMana } from "../../services/mana";
import CircularProgress from "@mui/material/CircularProgress";

export default function VisualizarManas() {
  const [carregando, setCarregando] = useState(true);
  const [manas, setManas] = useState({});

  useEffect(() => {
    pegarManas();
  }, []);

  const pegarManas = async () => {
    const response = await getMana();
    setManas(response);
    setCarregando(false);
  };

  return (
    <>
      {carregando ? (
        <CircularProgress />
      ) : (
        <div>
          <h1>Manas</h1>
          {manas.map((mana) => {
            return (
              <div
                key={mana._id}
                style={{ border: "1px solid black", margin: "10px" }}
              >
                <h2>Tipo: {mana.tipo}</h2>
                <h2>Cor: {mana.cor}</h2>
                <img
                  src={mana.imgURL}
                  alt="mana"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
