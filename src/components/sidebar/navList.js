import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import Person from "@mui/icons-material/Person";
import Forum from "@mui/icons-material/Forum";
import Analytics from "@mui/icons-material/Analytics";
import FolderOpen from "@mui/icons-material/FolderOpen";
import BorderColor from "@mui/icons-material/BorderColor";

const navbarList = [
  {
    icon: DashboardOutlined,
    desc: "CRUD Tipo",
    secondDesc: "",
    badge: 0,
    subList: [],
    route: "/",
  },
  {
    icon: Person,
    desc: "CRUD Subtipo",
    secondDesc: "",
    badge: 0,
    subList: [],
    route: "subtipo",
  },
  {
    icon: Forum,
    desc: "CRUD Carta",
    secondDesc: "Message from andi",
    badge: 0,
    subList: [],
    route: "carta",
  },
  {
    icon: Analytics,
    desc: "CRUD Habilidade",
    secondDesc: "",
    badge: 0,
    subList: [],
    route: "habilidade",
  },
  {
    icon: FolderOpen,
    desc: "CRUD Mana",
    secondDesc: "",
    badge: 0,
    subList: [],
    route: "mana",
  },
];

export default navbarList;
