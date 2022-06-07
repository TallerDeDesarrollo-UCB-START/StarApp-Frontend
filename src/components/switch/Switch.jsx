import * as React from "react";
import { Switch, FormControlLabel } from "@material-ui/core/";

export default function MySwitch({checked, onClick}) {
  return (
		<>
      <FormControlLabel      
        control={
          <Switch
            checked={checked}
            onClick={onClick}
            color="secondary"
          />
        }
        label={checked ? "Estoy disponible" : "No disponible"}
      />
		</>
  );
}