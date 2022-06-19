import { useState } from "react";

import { BasicTabs, TabPanel } from "../../components/tabs/index";
import CadastrarMana from "./CadastrarMana";
import VisualizarMana from "./VisualizarMana";

export function CrudMana() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BasicTabs value={value} handleChange={handleChange}>
      <TabPanel value={value} index={0}>
        <CadastrarMana />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VisualizarMana />
      </TabPanel>
    </BasicTabs>
  );
}
