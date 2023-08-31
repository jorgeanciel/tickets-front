import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Modal,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Scrollbar } from "src/components/scrollbar";
import { Edit, Delete } from "@mui/icons-material";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import axios from "axios";

const baseUrl = "http://localhost:8080/tipos/";

const TablaTipo = (props) => {
  const [data, setData] = useState([]);
  const [tipo, setTipo] = useState({
    name: "",
    description: "",
  });

  const [modal, setModal] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTipo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  const peticionPost = async () => {
    await axios.post(baseUrl, tipo).then((response) => {
      setData(data.concat(response.data));
      openModal();
    });
  };

  const peticionPut = async () => {
    await axios.put(baseUrl + tipo.id, tipo).then((response) => {
      var newData = data;
      newData.map((type) => {
        if (tipo.id === type.id) {
          type.name = tipo.name;
          type.user = tipo.user;
        }
      });
      setData(newData);
      openModalEditar();
    });
  };

  const peticionDelete = async () => {
    await axios.delete(baseUrl + tipo.id).then((response) => {
      setData(data.filter((type) => type.id !== tipo.id));
      openModalEliminar();
    });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  const openModal = () => {
    setModal(!modal);
  };

  const openModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const openModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const seleccionarTipo = (tipo, caso) => {
    setTipo(tipo);
    caso === "Editar" ? openModalEditar() : openModalEliminar();
  };

  const {
    items = 0,
    count = 0,
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 0,
  };

  return (
    <Card>
      <CardHeader title="Tipo" />
      <Scrollbar>
        <Box>
          <Button
            variant="contained"
            sx={{ p: 1 }}
            startIcon={
              <SvgIcon fontSize="small">
                <PlusIcon />
              </SvgIcon>
            }
            onClick={openModal}
          >
            Agregar Tipo
          </Button>
          <Modal open={modal} onClose={openModal}>
            <Card sx={style}>
              <CardHeader title="Agrege nuevo Tipo" />
              <Divider />
              <CardContent sx={{ padding: 1 }}>
                <Box
                  component="form"
                  autoComplete="off"
                  noValidate
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    alignItems: "flex-start",
                    px: 3,
                    m: 2,
                  }}
                >
                  <TextField
                    label="Nombre"
                    size="medium "
                    sx={{ width: 250 }}
                    variant="outlined"
                    id="outlined-basic"
                    name="name"
                    onChange={handleChange}
                  />
                  <TextField
                    label="Descripción"
                    size="medium"
                    sx={{ width: 250 }}
                    name="description"
                    onChange={handleChange}
                  />
                </Box>
                <Divider />
                <Box sx={{ p: 1, display: "flex", justifyContent: "flex-end" }}>
                  <Button variant="contained" onClick={() => peticionPost()}>
                    Guardar
                  </Button>
                  <Button onClick={() => openModal()}>Cancelar</Button>
                </Box>
              </CardContent>
            </Card>
          </Modal>
          <Table sx={{ mt: 2 }}>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((tipo) => {
                return (
                  <TableRow key={tipo.name}>
                    <TableCell>{tipo.name}</TableCell>
                    <TableCell>{tipo.description}</TableCell>
                    <TableCell padding="checkbox">
                      <SvgIcon fontSize="small" sx={{ cursor: "pointer" }}>
                        <Edit onClick={() => seleccionarTipo(tipo, "Editar")} />
                      </SvgIcon>
                      &nbsp;&nbsp;&nbsp;
                      <SvgIcon fontSize="small" sx={{ cursor: "pointer" }}>
                        <Delete onClick={() => seleccionarTipo(tipo, "Eliminar")} />
                      </SvgIcon>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <Modal open={modalEditar} onClose={openModalEditar}>
              <Card sx={style}>
                <CardHeader title="Editar Tipo" />
                <Divider />
                <CardContent sx={{ padding: 1 }}>
                  <Box
                    component="form"
                    autoComplete="off"
                    noValidate
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      alignItems: "flex-start",
                      px: 3,
                      m: 2,
                    }}
                  >
                    <TextField
                      label="Nombre Tipo"
                      size="medium "
                      sx={{ width: 250 }}
                      variant="outlined"
                      //{...register("name")}
                      name="name"
                      onChange={handleChange}
                      value={tipo && tipo.name}
                    />
                    <TextField
                      label="Descripción"
                      size="medium"
                      sx={{ width: 250 }}
                      name="description"
                      onChange={handleChange}
                      value={tipo && tipo.description}
                    />
                    <Divider />
                    <Box sx={{ p: 1, display: "flex", justifyContent: "flex-end" }}>
                      <Button variant="contained" onClick={() => peticionPut()}>
                        Editar
                      </Button>
                      <Button onClick={() => openModalEditar()}>Cancelar</Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Modal>

            <Modal open={modalEliminar} onClose={openModalEliminar}>
              <Card sx={style}>
                <Typography sx={{ p: 3 }}>
                  Estas seguro de eliminar el tipo <b>{tipo && tipo.name}?</b>
                </Typography>
                <Divider />
                <Box sx={{ p: 1, display: "flex", justifyContent: "flex-end" }}>
                  <Button variant="contained" color="secondary" onClick={() => peticionDelete()}>
                    Si
                  </Button>
                  <Button onClick={() => openModalEliminar()}>No</Button>
                </Box>
              </Card>
            </Modal>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default TablaTipo;

TablaTipo.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
