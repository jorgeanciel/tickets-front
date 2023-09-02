import PropTypes from "prop-types";
import {
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Scrollbar } from "src/components/scrollbar";
import axios from "axios";

const baseUrl = "http://localhost:8080/usuarios/";

const TablaUsuario = (props) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    empresa: "",
    area: "",
    perfil: "",
    estado: "",
  });

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  const {
    items = [],
    count = 0,
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  return (
    <>
      <Scrollbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Correo Electronico</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Empresa</TableCell>
              <TableCell>Area</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.nombre}>
                <TableCell>{user.nombre}</TableCell>
                <TableCell>{user.correo}</TableCell>
                <TableCell>{user.estado}</TableCell>
                <TableCell>{user.tipo}</TableCell>
                <TableCell>{user.empresa}</TableCell>
                <TableCell>{user.area}</TableCell>
                <TableCell padding="checkbox">
                  <SvgIcon fontSize="small" sx={{ cursor: "pointer" }}>
                    <Edit />
                  </SvgIcon>
                  &nbsp;&nbsp;&nbsp;
                  <SvgIcon fontSize="small" sx={{ cursor: "pointer" }}>
                    <Delete />
                  </SvgIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
    </>
  );
};

export default TablaUsuario;

TablaUsuario.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
