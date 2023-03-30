const MANATIMEDATA = [
  {
    id: 1,
    userId: "011",
    category: "Congés payés",
    period: "2022",
    curSold: 200,
    takenSold: 50,
    futurSold: 150,
  },
  {
    id: 2,
    userId: "012",
    category: "RTT",
    period: "2023",
    curSold: 1000,
    takenSold: 300,
    futurSold: 700,
  },
  {
    id: 4,
    userId: "013",
    category: "Congés payés",
    period: "2023",
    curSold: 750,
    takenSold: 200,
    futurSold: 550,
  },
  {
    id: 5,
    userId: "014",
    category: "RTT",
    period: "2023",
    curSold: 1500,
    takenSold: 500,
    futurSold: 1000,
  },
  {
    id: 6,
    userId: "015",
    category: "Congés payés",
    period: "2023",
    curSold: 1000,
    takenSold: 700,
    futurSold: 300,
  },
  {
    id: 8,
    userId: "011",
    category: "RTT",
    period: "2023",
    curSold: 1200,
    takenSold: 900,
    futurSold: 300,
  },
  {
    id: 9,
    userId: "012",
    category: "Congés payés",
    period: "2023",
    curSold: 5000,
    takenSold: 2000,
    futurSold: 3000,
  },
  {
    id: 10,
    userId: "013",
    category: "RTT",
    period: "2023",
    curSold: 2500,
    takenSold: 1500,
    futurSold: 1000,
  },
  {
    id: 12,
    userId: "014",
    category: "Congés payés",
    period: "2024",
    curSold: 700,
    takenSold: 200,
    futurSold: 500,
  },
  {
    id: 13,
    userId: "015",
    category: "RTT",
    period: "2024",
    curSold: 100,
    takenSold: 50,
    futurSold: 50,
  },
];

const USERDATA = [
  {
    id: "011",
    name: "Darléne Menson Dujon",
  },
  {
    id: "012",
    name: "Marion Brandon",
  },
  {
    id: "013",
    name: "Sam Edson",
  },
  {
    id: "014",
    name: "Kevin D",
  },
  {
    id: "015",
    name: "Yvon G",
  },
];

const MENUDATA = [
  {
    id: "1",
    title: "Planning",
    img: "Module_Planning.svg",
    to: "planning",
  },
  {
    id: "2",
    title: "Absence",
    img: "Module_Absences.svg",
    to: "absence",
  },
  {
    id: "3",
    title: "Heures",
    img: "Module_Heures.svg",
    to: "heures",
  },
  {
    id: "4",
    title: "Note de frais",
    img: "Module_NotedeFrais.svg",
    to: "note",
  },
  {
    id: "5",
    title: "Présence",
    img: "Module_Presence.svg",
    to: "presence",
  },
  {
    id: "6",
    title: "Compétences",
    img: "Module_Competences.svg",
    to: "competences",
  },
  {
    id: "7",
    title: "Salaire et paie",
    img: "Module_SalaireetPAie.svg",
    to: "salaire",
  },
  {
    id: "8",
    title: "Entretiens",
    img: "Module_Entretiens.svg",
    to: "entretiens",
  },
  {
    id: "9",
    title: "Matériels",
    img: "Module_Materiels.svg",
    to: "materiels",
  },
  {
    id: "10",
    title: "Documents",
    img: "Module_Documents.svg",
    to: "documents",
  },
  {
    id: "11",
    title: "RH",
    img: "Module_RH.svg",
    to: "rh",
  },
];

const TABLE_HEAD = [
  { id: "name", label: "Utilisateurs", alignRight: false },
  { id: "category", label: "Catégorie", alignRight: false },
  { id: "period", label: "Période", alignRight: false },
  { id: "curSold", label: "Solde actuel", alignRight: false },
  { id: "takenSold", label: "Solde pris", alignRight: false },
  { id: "futurSold", label: "Solde futur", alignRight: false },
  { id: "" },
];

export { MANATIMEDATA, MENUDATA, USERDATA, TABLE_HEAD };
