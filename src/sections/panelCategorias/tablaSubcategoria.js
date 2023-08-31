import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  MenuItem,
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

const baseUrl = "http://localhost:8080/subcategorias/";

const TablaSubcategoria = (props) => {
  const [modal, setModal] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [data, setData] = useState([]);
  const [subcategory, setSubcategory] = useState({
    name: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubcategory((prevState) => ({
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
    await axios.post(baseUrl, subcategory).then((response) => {
      setData(data.concat(response.data));
      openModal();
    });
  };

  const peticionPut = async () => {
    await axios.put(baseUrl + subcategory.id, subcategory).then((response) => {
      var newData = data;
      newData.map((subcategoria) => {
        if (subcategory.id === subcategoria.id) {
          subcategoria.name = subcategory.name;
          subcategoria.category = subcategory.category;
        }
      });
      setData(newData);
      openModalEditar();
    });
  };

  const peticionDelete = async () => {
    await axios.delete(baseUrl + subcategory.id).then((response) => {
      setData(data.filter((subcategoria) => subcategoria.id !== subcategory.id));
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

  const seleccionarSubcategoria = (subcategory, caso) => {
    setSubcategory(subcategory);
    caso === "Editar" ? openModalEditar() : openModalEliminar();
  };

  const {
    items = [],
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
    width: 550,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 0,
  };

  return (
    <Card>
      <CardHeader title="Subcategoria" />
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
            Agregar Subcategoria
          </Button>
          <Modal open={modal} onClose={openModal}>
            <Card sx={style}>
              <CardHeader title="Nueva Subcategoria" />
              <Divider />
              <CardContent sx={{ padding: 1 }}>
                <Box
                  component="form"
                  autoComplete="off"
                  noValidate
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    justifyContent: "center",
                    px: 3,
                    m: 2,
                  }}
                >
                  <TextField
                    label="Selecciona Categoria"
                    size="medium"
                    sx={{ width: 250 }}
                    id="outlined-basic"
                    name="category"
                    onChange={handleChange}
                  />

                  <TextField
                    label="Nombre Subcategoria"
                    size="medium"
                    sx={{ width: 250 }}
                    name="name"
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
                <TableCell>Subcategoria</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((subcategory) => {
                return (
                  <TableRow key={subcategory.name}>
                    <TableCell>{subcategory.name}</TableCell>
                    <TableCell>{subcategory.category}</TableCell>
                    <TableCell padding="checkbox">
                      <SvgIcon fontSize="small" sx={{ cursor: "pointer" }}>
                        <Edit onClick={() => seleccionarSubcategoria(subcategory, "Editar")} />
                      </SvgIcon>
                      &nbsp;&nbsp;&nbsp;
                      <SvgIcon fontSize="small" sx={{ cursor: "pointer" }}>
                        <Delete onClick={() => seleccionarSubcategoria(subcategory, "Eliminar")} />
                      </SvgIcon>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <Modal open={modalEditar} onClose={openModalEditar}>
              <Card sx={style}>
                <CardHeader title="Editar Subcategoria" />
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
                      label="Nombre Categoria"
                      size="medium "
                      sx={{ width: 250 }}
                      variant="outlined"
                      //{...register("name")}
                      name="category"
                      onChange={handleChange}
                      value={subcategory && subcategory.category}
                    />
                    <TextField
                      label="Nombre Subcategoria"
                      size="medium"
                      sx={{ width: 250 }}
                      name="name"
                      onChange={handleChange}
                      value={subcategory && subcategory.name}
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
                  Estas seguro de eliminar la subcategoria <b>{subcategory && subcategory.name}?</b>
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

export default TablaSubcategoria;

TablaSubcategoria.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
