import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  Table,
  TableHead,
  TableRow,
  Card,
  TableCell,
  TableBody,
  SvgIcon,
  Button,
  TextField,
  Modal,
  CardHeader,
  CardContent,
  Divider,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { AccountProfile } from "src/sections/account/account-profile";
import { AccountProfileDetails } from "src/sections/account/account-profile-details";
import { Scrollbar } from "src/components/scrollbar";
import { Edit, Delete } from "@mui/icons-material";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { padding } from "@mui/system";
import { useState } from "react";

const categorias = [
  {
    name: "Sys",
    responsible: "Noel Rivera",
  },
  {
    name: "Soporte Tecnico",
    responsible: "Edwin Armas",
  },
  {
    name: "Flex Business",
    responsible: "Noel Rivera",
  },
  {
    name: "Factus",
    responsible: "Noel Rivera",
  },
];

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#ffff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

const Page = () => {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const [categoria, setCategoria] = useState("");
  const [usuario, setUsuario] = useState("");
  const [name, setName] = useState("");

  const categorias = [
    {
      name: { categoria },
      responsible: { name },
    },
  ];

  const cerrarModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const news = e.target.value;
    setValue(news);
  };

  const submitcategoria = () => {
    setCategoria(value);
    setName(usuario);
    cerrarModal();
  };

  const handleUsuario = (e) => {
    const news = e.target.value;
    setUsuario(news);
  };

  return (
    <>
      <Head>
        <title>Account | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">Categoria</Typography>
              <Button
                variant="contained"
                startIcon={
                  <SvgIcon>
                    <PlusIcon />
                  </SvgIcon>
                }
                onClick={cerrarModal}
              >
                Agregar Categoria
              </Button>
              <Modal open={modal} onClose={cerrarModal}>
                <Card sx={style}>
                  <CardHeader title="Nueva Categoria" />
                  <Divider />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      paddingLeft: 8,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Typography>Nombre</Typography>
                      <TextField
                        id="outlined-categoria"
                        size="small"
                        label="Nombre Categoria"
                        variant="outlined"
                        value={value}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Typography>Usuario</Typography>
                      <TextField
                        size="small"
                        id="outline-usuario"
                        label="Usuario Asignado"
                        variant="outlined"
                        value={usuario}
                        onChange={handleUsuario}
                      />
                    </Box>
                  </CardContent>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" type="submit" onClick={submitcategoria}>
                      Insertar
                    </Button>
                    <Button>Cancelar</Button>
                  </Stack>
                </Card>
              </Modal>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
              <Typography>Nombre</Typography>
              <TextField size="small" type="text" sx={{ height: 35 }} />
              <Button variant="contained">Buscar</Button>
            </div>

            <div>
              <Card>
                <Scrollbar>
                  <Box>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Nombre de la Categoria</TableCell>
                          <TableCell>Usuario Asignado</TableCell>
                          <TableCell>Acciones</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {categorias.map((data) => (
                          <TableRow key={data.name}>
                            <TableCell>{categoria}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell sx={{ cursor: "pointer" }}>
                              <SvgIcon fontSize="small">
                                <Edit />
                              </SvgIcon>
                              &nbsp;&nbsp;&nbsp;
                              <SvgIcon fontSize="small">
                                <Delete />
                              </SvgIcon>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </Scrollbar>
              </Card>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
