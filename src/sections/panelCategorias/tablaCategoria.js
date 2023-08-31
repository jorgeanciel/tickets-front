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
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Scrollbar } from "src/components/scrollbar";
import { Delete, Edit } from "@mui/icons-material";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { useForm } from "react-hook-form";
import axios from "axios";

const baseUrl = "http://localhost:8080/categorias/";

const TablaCategoria = (props) => {
  // const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState({
    name: "",
    user: "",
  });
  const [modal, setModal] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(category);
  };

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  const peticionPost = async () => {
    await axios.post(baseUrl, category).then((response) => {
      setData(data.concat(response.data));
      openModal();
    });
  };

  const peticionDelete = async () => {
    await axios.delete(baseUrl + category.id).then((response) => {
      setData(data.filter((categoria) => categoria.id !== category.id));
      openModalEliminar();
    });
  };

  const peticionPut = async () => {
    await axios.put(baseUrl + category.id, category).then((response) => {
      var newData = data;
      newData.map((categoria) => {
        if (category.id === categoria.id) {
          categoria.name = category.name;
          categoria.user = category.user;
        }
      });
      setData(newData);
      openModalEditar();
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

  const seleccionarCategoria = (category, caso) => {
    setCategory(category);
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
    width: 450,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 0,
  };

  return (
    <Card>
      <CardHeader title="Categoria" />

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
            onClick={() => openModal()}
          >
            Agregar Categoria
          </Button>
          <Modal open={modal} onClose={openModal}>
            <Card sx={style}>
              <CardHeader title="Nueva Categoria" />
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
                  // onSubmit={handleSubmit(onSubmit)}
                >
                  <TextField
                    label="Nombre Categoria"
                    size="medium "
                    sx={{ width: 250 }}
                    variant="outlined"
                    //{...register("name")}
                    name="name"
                    onChange={handleChange}
                  />
                  <TextField
                    label="Asignado Principal"
                    size="medium"
                    sx={{ width: 250 }}
                    //{...register("user")}
                    name="user"
                    onChange={handleChange}
                  />
                  <Divider />
                  <Box sx={{ p: 1, display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      variant="contained"
                      onClick={() => peticionPost()}
                      //type="submit"
                    >
                      Guardar
                    </Button>
                    <Button onClick={() => openModal()}>Cancelar</Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Modal>
          <Table sx={{ mt: 2 }}>
            <TableHead>
              <TableRow>
                <TableCell>Nombre Categoria</TableCell>
                <TableCell>Usuario Asignado</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((category) => {
                return (
                  <TableRow key={category.name}>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>{category.user}</TableCell>
                    <TableCell padding="checkbox">
                      <SvgIcon fontSize="small" sx={{ cursor: "pointer" }}>
                        <Edit onClick={() => seleccionarCategoria(category, "Editar")} />
                      </SvgIcon>
                      &nbsp;&nbsp;&nbsp;
                      <SvgIcon fontSize="small" sx={{ cursor: "pointer" }}>
                        <Delete onClick={() => seleccionarCategoria(category, "Eliminar")} />
                      </SvgIcon>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <Modal open={modalEditar} onClose={openModalEditar}>
              <Card sx={style}>
                <CardHeader title="Editar Categoria" />
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
                      name="name"
                      onChange={handleChange}
                      value={category && category.name}
                    />
                    <TextField
                      label="Asignado Principal"
                      size="medium"
                      sx={{ width: 250 }}
                      name="user"
                      onChange={handleChange}
                      value={category && category.user}
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
                  Estas seguro de eliminar la categoria <b>{category && category.name}?</b>
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

export default TablaCategoria;

TablaCategoria.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
