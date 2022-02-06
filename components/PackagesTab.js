import * as React from "react";
import { Button } from "@mui/material";
import css from "../styles/FEBETab.module.css";

export default function PackageTab() {
  function onClick() {
    // add confetti code here
  }

  return (
    <div className={css.container}>
      <Button className={css.button} onClick={onClick} variant="contained">
        Ladda överraskning
      </Button>
    </div>
  );
}
