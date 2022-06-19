import { useState } from "react";

import { BasicTabs, TabPanel } from "../../components/tabs/index";
import CadastrarTipo from "./CadastrarTipo";
import VisualizarTipo from "./VisualizarTipo";

export function CrudTipo() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BasicTabs value={value} handleChange={handleChange}>
      <TabPanel value={value} index={0}>
        <CadastrarTipo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VisualizarTipo />
      </TabPanel>
    </BasicTabs>
  );
}
