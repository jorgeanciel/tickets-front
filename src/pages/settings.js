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
  TabPanel,
  TabContext,
  TabList,
} from "@mui/material";
import { SettingsNotifications } from "src/sections/settings/settings-notifications";
import { SettingsPassword } from "src/sections/settings/settings-password";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { useState } from "react";
import TablaCategoria from "src/sections/panelCategorias/TablaCategoria";

const items = [
  {
    categoria: "flex",
    usuario: "luis",
  },
  {
    categoria: "syc",
    usuario: "carlos",
  },
];

const Page = () => {
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
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid xs={12} sm={4}>
              <Card>
                <CardHeader title="Categoria" />
              </Card>
            </Grid>
            <Grid xs={12} sm={4}>
              <Card>
                <CardHeader title="SubCategoria" />
              </Card>
            </Grid>
            <Grid xs={12} sm={4}>
              <Card>
                <CardHeader title="Tipo" />
              </Card>
            </Grid>
            <Grid xs={12}>
              {items.map((category) => (
                <TablaCategoria category={category} />
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
