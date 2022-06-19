import { useState } from "react";

import { BasicTabs, TabPanel } from "../../components/tabs/index";
import CadastrarSubtipo from "./CadastrarSubtipo";
import VisualizarSubtipo from "./VisualizarSubtipo";

export function CrudSubtipo() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BasicTabs value={value} handleChange={handleChange}>
      <TabPanel value={value} index={0}>
        <CadastrarSubtipo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VisualizarSubtipo />
      </TabPanel>
    </BasicTabs>
  );
}
