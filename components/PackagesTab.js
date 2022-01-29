import * as React from "react";
import { Button } from "@mui/material";
import css from "../styles/FEBETab.module.css";
import JSConfetti from "js-confetti";

export default function PackageTab() {
  function onClick() {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }

  return (
    <div className={css.container}>
      <Button className={css.button} onClick={onClick} variant="contained">
        Ladda överraskning
      </Button>
    </div>
  );
}
