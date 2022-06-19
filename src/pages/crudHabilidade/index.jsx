import { useState } from "react";

import { BasicTabs, TabPanel } from "../../components/tabs/index";
import CadastrarHabilidade from "./CadastrarHabilidade";
import VisualizarHabilidade from "./VisualizarHabilidade";

export function CrudHabilidade() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BasicTabs value={value} handleChange={handleChange}>
      <TabPanel value={value} index={0}>
        <CadastrarHabilidade />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VisualizarHabilidade />
      </TabPanel>
    </BasicTabs>
  );
}
