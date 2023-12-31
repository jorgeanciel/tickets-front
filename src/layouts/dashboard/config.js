import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";

/// vista de Panel

export const items = [
  {
    title: "Dashboard",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tickets",
    path: "/tickets",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Base de conocimientos",
    path: "/bc",
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    ),
  },

  {
    title: "Mantenimiento",
    path: "/mantenimiento",
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Usuarios",
    path: "/usuario",
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
  },

  {
    title: "Inventario",
    path: "/404",
    icon: (
      <SvgIcon fontSize="small">
        <XCircleIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Login",
    path: "/auth/login",
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    ),
  },
];
