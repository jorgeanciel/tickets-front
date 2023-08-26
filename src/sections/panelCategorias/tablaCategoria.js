import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Scrollbar } from "src/components/scrollbar";
import { Delete, Edit } from "@mui/icons-material";

const TablaCategoria = (props) => {
  const { category } = props;
  return (
    <Card>
      <CardHeader title="Categoria" />
      <Scrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre Categoria</TableCell>
                <TableCell>Usuario Asignado</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={category.categoria}>
                <TableCell>{category.categoria}</TableCell>
                <TableCell>{category.usuario}</TableCell>
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
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card>
  );
};

export default TablaCategoria;

TablaCategoria.propTypes = {
  category: PropTypes.object.isRequired,
};
