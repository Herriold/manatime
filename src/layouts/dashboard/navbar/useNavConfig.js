import React from "react";
import SvgIconStyle from "src/components/SvgIconStyle";

const ICON_STYLE = { height: 20, width: 20, color: "#FFFFFF" };

const ICONS = {
  home: <SvgIconStyle src="/assets/Accueil.svg" sx={ICON_STYLE} />,
  add: <SvgIconStyle src="/assets/Add.svg" sx={ICON_STYLE} />,
  card: <SvgIconStyle src="/assets/espace.svg" sx={ICON_STYLE} />,
  checkmark: <SvgIconStyle src="/assets/Validation.svg" sx={ICON_STYLE} />,
  listCheck: <SvgIconStyle src="/assets/Indicateurs.svg" sx={ICON_STYLE} />,
  search: <SvgIconStyle src="/assets/Recherche.svg" sx={ICON_STYLE} />,
  balance: <SvgIconStyle src="/assets/Soldes.svg" sx={ICON_STYLE} />,
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
