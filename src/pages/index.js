import Head from "next/head";
import { subDays, subHours } from "date-fns";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Unstable_Grid2 as Grid,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";
import { Stack } from "@mui/system";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";
import AlignHorizontalLeftRoundedIcon from "@mui/icons-material/AlignHorizontalLeftRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { AccountProfile } from "src/sections/account/account-profile";
import { AccountProfileDetails } from "src/sections/account/account-profile-details";

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>Overview | Devias Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} lg={3}>
            <Card>
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <Stack>
                  <Typography variant="h2">x</Typography>
                  <Typography color="text.secondary">Pendientes</Typography>
                </Stack>
                <SvgIcon sx={{ fontSize: 80 }}>
                  <DiscountRoundedIcon />
                </SvgIcon>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <Card>
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <Stack>
                  <Typography variant="h2">x</Typography>
                  <Typography>Tipos</Typography>
                </Stack>
                <SvgIcon sx={{ fontSize: 80 }}>
                  <AlignHorizontalLeftRoundedIcon />
                </SvgIcon>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <Card>
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <Stack>
                  <Typography variant="h2">x</Typography>
                  <Typography>Categorias</Typography>
                </Stack>
                <SvgIcon sx={{ fontSize: 80 }}>
                  <CategoryRoundedIcon />
                </SvgIcon>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <Card>
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <Stack>
                  <Typography variant="h2">x</Typography>
                  <Typography>Usuarios</Typography>
                </Stack>
                <SvgIcon sx={{ fontSize: 80 }}>
                  <PeopleAltRoundedIcon />
                </SvgIcon>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} lg={4}>
            <Card>
              <AccountProfile />
            </Card>
          </Grid>
          <Grid xs={12} md={6} lg={8}>
            <Card>
              <AccountProfileDetails />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
