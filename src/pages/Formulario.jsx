import { Box, Card, CardContent, CardHeader, Grid, TextField, Button } from "@mui/material";
import { Stack, margin } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
};

const tipos = [
  {
    value: "Incidente",
    label: "Incidente",
  },
  {
    value: "Requerimiento",
    label: "Requerimiento",
  },
  {
    value: "Capacitacion",
    label: "Capacitacion",
  },
];

const categorias = [
  {
    value: "Factus",
    label: "Factus",
  },
  {
    value: "Flex Business",
    label: "Flex Business",
  },
  {
    value: "Soporte Tecnico",
    label: "Soporte Tecnico",
  },
  {
    value: "Sys",
    label: "Sys",
  },
];

const Formulario = () => {
  const baseUrl = "http://localhost:8080";
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({
    tipo: "",
    categoria: "",
    subcategoria: "",
    respuesta: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((newTarget) => ({
      ...newTarget,
      [name]: value,
    }));
    console.log(info);
  };

  const peticionPost = async () => {
    try {
      const res = await axios.post(baseUrl, info);
      setData(data.concat(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    peticionPost();
  }, []);

  return (
    <Card sx={style}>
      <CardHeader title="New Tickets" sx={{ px: 3, pl: 4 }} />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ m: 0 }}>
          <Grid container>
            <Grid md={100} py>
              <TextField
                label="Ingrese Nombre"
                type="texto"
                fullWidth
                required
                size="small"
                select
                SelectProps={{ native: true }}
                name="nombre"
              >
                {" "}
              </TextField>
            </Grid>
            <Grid py pr>
              <TextField
                label="Tipo"
                type="texto"
                size="small"
                select
                SelectProps={{ native: true }}
                name="tipo"
                onChange={handleChange}
              >
                {tipos.map((tipo) => (
                  <option key={tipo.value} value={tipo.value}>
                    {tipo.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid py pl>
              <TextField
                label="Categoria"
                type="select"
                size="small"
                select
                SelectProps={{ native: true }}
                name="categoria"
                onChange={handleChange}
              >
                {categorias.map((categoria) => (
                  <option key={categoria.value} value={categoria.value}>
                    {categoria.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid md={100} py>
              <TextField
                label="Sub categoria"
                size="small"
                name="subcategoria"
                onChange={handleChange}
                value={info.subcategoria}
              />
            </Grid>
            <Grid py pr>
              <TextField label="Empresa" type="texto" size="small" />
            </Grid>
            <Grid py pl>
              <TextField label="Area" type="texto" size="small" />
            </Grid>
            <Grid md={100} py>
              <TextField
                label="Titulo"
                type="texto"
                fullWidth
                size="small"
                name="respuesta"
                onChange={handleChange}
              />
            </Grid>
            <Grid md={100} py>
              <TextField
                label="Descripcion"
                type="texto"
                fullWidth
                size="large"
                name="respuesta"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Stack direction="row" spacing={1}>
        <Button variant="container">Insertar</Button>
        <Button>Cancelar</Button>
      </Stack>
    </Card>
  );
};

export default Formulario;
