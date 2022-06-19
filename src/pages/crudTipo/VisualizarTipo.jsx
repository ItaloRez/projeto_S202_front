import { useEffect, useState } from "react";
import { getType, updateType, deleteType } from "../../services/type";
import CircularProgress from "@mui/material/CircularProgress";

export default function VisualizarTipo() {
  const [carregando, setCarregando] = useState(true);
  const [tipos, setTipos] = useState({});

  useEffect(() => {
    pegarType();
  }, []);

  const pegarType = async () => {
    const response = await getType();
    setTipos(response);
    setCarregando(false);
  };

  const editarType = async (type) => {
    const tipo = {
      _id: type._id,
      nome: "mudado",
    };
    await updateType(tipo);
    pegarType();
  };

  const excluirType = async (type) => {
    await deleteType(type._id);
    pegarType();
  };

  return (
    <>
      {carregando ? (
        <CircularProgress />
      ) : (
        <div>
          <h1>Tipos</h1>
          {tipos.map((tipo) => {
            return (
              <div key={tipo._id}>
                <h2>- {tipo.nome}</h2>
                <button onClick={() => editarType(tipo)}>Editar</button>
                <button onClick={() => excluirType(tipo)}>Excluir</button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
