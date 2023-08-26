import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { getInitials } from "src/utils/get-initials";
import axios from "axios";
import { useEffect, useState } from "react";
import { Delete, Edit } from "@mui/icons-material";

export const CustomersTable = (props) => {
  const baseUrl = "https://pokeapi.co/api/v2/ability/?limit=10";
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

  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;

  const getData = async () => {
    try {
      const res = await axios.get(baseUrl);
      setData(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const peticionPost = async () => {
    await axios.post(baseUrl);
  };

  useEffect(() => {
    getData();
  }, []);

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">N°</TableCell>
                <TableCell>Titulo</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Prioridad</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Asignado</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((ticket) => {
                /*const createdAt = format(customer.createdAt, "dd/MM/yyyy");*/

                return (
                  <TableRow hover key={ticket.id}>
                    <TableCell padding="checkbox">{ticket.tipo}</TableCell>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">{ticket.subcategoria}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{ticket.tipo}</TableCell>
                    <TableCell>{ticket.prioridad}</TableCell>
                    <TableCell>{ticket.estado}</TableCell>
                    <TableCell>{ticket.asignado}</TableCell>
                    <TableCell>{ticket.fecha}</TableCell>
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
                );
              })}
            </TableBody>
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

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
};
