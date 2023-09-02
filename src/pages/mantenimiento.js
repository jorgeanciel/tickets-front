import Head from "next/head";
import {
  Box,
  Card,
  CardHeader,
  Container,
  Grid,
  Stack,
  Typography,
  AppBar,
  Tabs,
  Tab,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import * as React from "react";
import { SettingsNotifications } from "src/sections/settings/settings-notifications";
import { SettingsPassword } from "src/sections/settings/settings-password";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { useCallback, useMemo, useState } from "react";

import { applyPagination } from "src/utils/apply-pagination";
import TablaSubcategoria from "src/sections/panelCategorias/tablaSubcategoria";
import TablaCategoria from "src/sections/panelCategorias/tablaCategoria";
import TablaTipo from "src/sections/panelCategorias/tablaTipo";

const data = [
  {
    categoria: "Flex Business",
    usuario: "Noel Rivera",
    subcategoria: "Modulo de Ventas",
    value: "select",
    label: "--Selecciona Categoria--",
  },
  {
    categoria: "Syc",
    usuario: "Noel Rivera",
    subcategoria: "Freddy",
  },
  {
    categoria: "Soporte Tecnico",
    usuario: "Edwin Armas",
    subcategoria: "Toner",
  },
  {
    categoria: "Factus",
    usuario: "Noel Rivera",
    subcategoria: "Factus",
  },
  {
    categoria: "Soporte Tecnico",
    usuario: "Edwin Armas",
    subcategoria: "Redes",
  },
  {
    categoria: "Soporte Tecnico",
    usuario: "Edwin Armas",
    subcategoria: "Proyector",
  },
];

const type = [
  {
    nombre: "Requerimiento",
    descripcion: "Nueva funcionalidad servicio producto.",
  },
  {
    nombre: "Incidente",
    descripcion: "Interrupciones del servicio o falla de algún componente.",
  },
  {
    nombre: "Capacitación",
    descripcion:
      "Solicitud para asesorar o capacitar sobre servicios relacionados al área de Sistemas.",
  },
];
const useCustomers = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useType = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(type, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const tipos = useType(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const [value, setValue] = React.useState("1");

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Subcategorias| Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Tab label="Categoria" value="1" sx={{ px: 10 }} />
              <Tab label="Subcategoria" value="2" sx={{ px: 10 }} />
              <Tab label="Tipo" value="3" sx={{ px: 10 }} />
            </TabList>
          </Box>
          <TabPanel value="1">
            {
              <TablaCategoria
                count={data.length}
                items={customers}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            }
          </TabPanel>
          <TabPanel value="2">
            <TablaSubcategoria
              count={data.length}
              items={customers}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          </TabPanel>
          <TabPanel value="3">
            <TablaTipo
              count={type.length}
              items={tipos}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
