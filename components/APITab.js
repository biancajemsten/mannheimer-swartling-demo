import * as React from "react";
import {
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  TextField
} from "@mui/material";
import Axios from "axios";
import css from "../styles/APITab.module.css";

export default function APITab() {
  const [date, setDate] = React.useState("");
  const [imageData, setImageData] = React.useState();

  function onClick() {
    const fetchData = async () => {
      const response = await Axios.post("/api/nasa", {
        date: date
      });

      if (response.status === 200 && response) {
        setImageData(response.data);
      }
    };
    fetchData();
  }

  return (
    <div className={css.container}>
      <Button className={css.button} onClick={onClick} variant="contained">
        Hämta bild
      </Button>
      <Box>
        <TextField
          label="datum"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </Box>
      {imageData && (
        <Card className={css.imageDataContainer}>
          <CardMedia
            component="img"
            image={imageData.img_url}
            alt={imageData.title}
          />
          <CardContent>
            <h2>{imageData.title}</h2>
            <p>{imageData.description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
