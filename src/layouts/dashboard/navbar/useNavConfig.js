import React from "react";
import SvgIconStyle from "src/components/SvgIconStyle";
import Home from "../../../assets/Accueil.svg";
import Add from "../../../assets/Add.svg";
import Card from "../../../assets/espace.svg";
import Checkmark from "../../../assets/Validation.svg";
import ListCheck from "../../../assets/Indicateurs.svg";
import Search from "../../../assets/Recherche.svg";
import Balance from "../../../assets/Soldes.svg";

const ICON_STYLE = { height: 20, width: 20, color: "#FFFFFF" };

const ICONS = {
  home: <SvgIconStyle src={Home} sx={ICON_STYLE} />,
  add: <SvgIconStyle src={Add} sx={ICON_STYLE} />,
  card: <SvgIconStyle src={Card} sx={ICON_STYLE} />,
  checkmark: <SvgIconStyle src={Checkmark} sx={ICON_STYLE} />,
  listCheck: <SvgIconStyle src={ListCheck} sx={ICON_STYLE} />,
  search: <SvgIconStyle src={Search} sx={ICON_STYLE} />,
  balance: <SvgIconStyle src={Balance} sx={ICON_STYLE} />,
};

const useNavConfig = () => {
  return [
    {
      id: "001",
      items: [
        {
          title: "Accueil",
          path: "",
          icon: ICONS.home,
        },
        {
          icon: ICONS.add,
          path: "",
          title: "Ajouter",
        },
        {
          icon: ICONS.card,
          path: "",
          title: "Mon espace",
          children: [],
        },
        {
          icon: ICONS.checkmark,
          path: "",
          title: "Validation",
          children: [],
        },
        {
          icon: ICONS.listCheck,
          path: "",
          title: "Indicateurs",
          children: [],
        },
        {
          icon: ICONS.balance,
          path: "",
          title: "Soldes",
          children: [
            {
              title: "Gestion des soldes",
              path: "/absence/solde",
            },
            {
              title: "Ajuster un solde",
              path: "",
            },
            { title: "Compteurs", path: "" },
            { title: "Historique", path: "" },
          ],
        },
        {
          icon: ICONS.search,
          path: "",
          title: "Recherche",
          children: [],
        },
      ],
    },
  ];
};

export default useNavConfig;
