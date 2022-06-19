import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CrudTipo } from "./pages/crudTipo";
import { CrudSubtipo } from "./pages/crudSubtipo";
import { CrudMana } from "./pages/crudMana";
import { CrudHabilidade } from "./pages/crudHabilidade";
import { CrudCarta } from "./pages/crudCarta";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<CrudTipo />} />
          <Route path="subtipo" element={<CrudSubtipo />} />
          <Route path="mana" element={<CrudMana />} />
          <Route path="habilidade" element={<CrudHabilidade />} />
          <Route path="carta" element={<CrudCarta />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
