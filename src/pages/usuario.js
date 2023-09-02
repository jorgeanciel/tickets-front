import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Head from "next/head";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  InputAdornment,
  MenuItem,
  Modal,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TablaUsuario from "src/sections/usuario/tablaUsuario";

const area = [
  {
    value: "ventas",
    label: "ventas",
  },
  {
    value: "ventas Pdv05",
    label: "ventas Pdv05",
  },
  {
    value: "ventas Pdv06",
    label: "ventas Pdv06",
  },
  {
    value: "ventas Pdv07",
    label: "ventas Pdv07",
  },
  {
    value: "ventas Pdv09",
    label: "ventas Pdv09",
  },
  {
    value: "caja",
    label: "caja",
  },
  {
    value: "caja Pdv02",
    label: "caja Pdv02",
  },
  {
    value: "caja Pdv05",
    label: "caja Pdv05",
  },
  {
    value: "caja Pdv06",
    label: "caja Pdv06",
  },
  {
    value: "caja Pdv07",
    label: "caja Pdv07",
  },
  {
    value: "caja Pdv09",
    label: "caja Pdv09",
  },
  {
    value: "caja Pdv10",
    label: "caja Pdv10",
  },
  {
    value: "Almacen Pdv02",
    label: "Almacen Pdv02",
  },
  {
    value: "Almacen Pdv05",
    label: "Almacen Pdv05",
  },
  {
    value: "Almacen Pdv06",
    label: "Almacen Pdv06",
  },
  {
    value: "Almacen Pdv07",
    label: "Almacen Pdv07",
  },
  {
    value: "Almacen Pdv09",
    label: "Almacen Pdv09",
  },
  {
    value: "Almacen Pdv10",
    label: "Almacen Pdv10",
  },
  {
    value: "Administracion",
    label: "Administracion",
  },
  {
    value: "Creco",
    label: "Compras",
  },
  {
    value: "Compras",
    label: "Compras",
  },
  {
    value: "Contabilidad",
    label: "Contabilidad",
  },
  {
    value: "Comercial",
    label: "Comercial",
  },
  {
    value: "Almacen Pdv02",
    label: "Almacen Pdv02",
  },
  {
    value: "Distribucion",
    label: "Distribucion",
  },
  {
    value: "Finanzas",
    label: "Finanzas",
  },
  {
    value: "Gerencia",
    label: "Gerencia",
  },
  {
    value: "Importación",
    label: "Importación",
  },
  {
    value: "Inventario",
    label: "Inventario",
  },
  {
    value: "Logistica",
    label: "Logistica",
  },
  {
    value: "RR.HH",
    label: "RR.HH",
  },
  {
    value: "Secretaria",
    label: "Secretaria",
  },
  {
    value: "Sistemas",
    label: "Sistemas",
  },
  {
    value: "SS.GG",
    label: "SS.GG",
  },
  {
    value: "Seguridad",
    label: "Seguridad",
  },
];

const perfiles = [
  {
    value: "Administrador",
    label: "Administrador",
  },
  {
    value: "Jefatura",
    label: "Jefatura",
  },
  {
    value: "Usuario",
    label: "Usuario",
  },
  {
    value: "U-Administrativo",
    label: "U-Administrativo",
  },
  {
    value: "U-Venta y Caja",
    label: "U-Venta y Caja",
  },
];

const Page = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };
  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 0,
  };
  return (
    <>
      <Head>
        <title>Usuario | Devias Kit</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container>
          <Stack spacing={3}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">Usuarios</Typography>
              <Button
                startIcon={
                  <SvgIcon fontSize="medium">
                    <PlusIcon />
                  </SvgIcon>
                }
                variant="contained"
                onClick={openModal}
              >
                Agregar Usuario
              </Button>
              <Modal open={modal} onClose={openModal}>
                <Card sx={style}>
                  <CardHeader title="Usuario Nuevo" />
                  <Divider />
                  <Grid container sx={{ px: 4, py: 2 }}>
                    <Grid xs={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Nombres" variant="standard" />
                      </Box>
                    </Grid>
                    <Grid xs={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Apellidos" variant="standard" />
                      </Box>
                    </Grid>
                    <Grid xs={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Email" variant="standard" />
                      </Box>
                    </Grid>
                    <Grid xs={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                        <TextField
                          id="input-with-sx"
                          label="Contraseña"
                          variant="standard"
                          type="password"
                        />
                      </Box>
                    </Grid>
                    <Grid xs={6}>
                      <TextField
                        select
                        label="Selecciona Empresa"
                        helperText="Please select your currency"
                        variant="standard"
                      >
                        <MenuItem value="as">Freddy</MenuItem>
                        <MenuItem value="ae">GCI</MenuItem>
                        <MenuItem value="as">INDECASA</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid xs={6}>
                      <TextField
                        select
                        label="Selecciona area"
                        SelectProps={{
                          native: true,
                        }}
                        variant="standard"
                      >
                        {area.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid xs={6}>
                      <TextField
                        select
                        label="Selecciona perfil"
                        SelectProps={{
                          native: true,
                        }}
                        helperText="Please select your currency"
                        variant="standard"
                      >
                        {perfiles.map((perfil) => (
                          <option key={perfil.value} value={perfil.value}>
                            {perfil.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid xs={6}>
                      <TextField
                        select
                        label="Selecciona estado"
                        SelectProps={{
                          native: true,
                        }}
                        helperText="Please select your currency"
                        variant="standard"
                      >
                        <option value="as">Activo</option>
                        <option value="ae">Desactivo</option>
                      </TextField>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                    <Button color="success" variant="contained" size="small" sx={{ p: 1 }}>
                      Guardar
                    </Button>
                    <Button variant="contained" sx={{ p: 1 }} onClick={openModal}>
                      Cerrar
                    </Button>
                  </Box>
                </Card>
              </Modal>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Typography variant="div1">Nombre o Email</Typography>
              <TextField type="texto" size="small" />
              <Button variant="contained">Buscar</Button>
            </Stack>
            <Stack>
              <TablaUsuario />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
