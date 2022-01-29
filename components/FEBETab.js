import * as React from "react";
import { Button, Box } from "@mui/material";
import Axios from "axios";
import css from "../styles/FEBETab.module.css";

export default function FEBETab() {
  const [greeting, setGreeting] = React.useState("");
  function onClick() {
    const fetchData = async () => {
      const response = await Axios.get("/api/hello");

      if (response.status === 200 && response) {
        setGreeting(response.data.greeting);
      }
    };
    fetchData();
  }

  return (
    <div className={css.container}>
      <Button className={css.button} onClick={onClick} variant="contained">
        Generera hälsning{" "}
      </Button>
      <Box>
        <p className={css.greeting}>{greeting}</p>
      </Box>
    </div>
  );
}
