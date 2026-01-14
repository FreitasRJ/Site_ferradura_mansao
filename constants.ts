
export const MANSION_DATA = {
  price: "R$ 6.000.000",
  location: "Praia da Ferradura, Búzios, RJ",
  area: "600 m² construídos",
  land: "1.000 m² de terreno",
  suites: "5 Suítes (4 com vista mar)",
  highlights: [
    "Piscina 36 m³ com borda infinita",
    "Acesso privativo ao mar",
    "Sauna seca panorâmica",
    "Energia solar completa",
    "Escritório de vidro vista mar",
    "Garagem para 3 carros"
  ],
  whatsapp: "+351914435017",
  email: "fabiofsrj43@gmail.com",
  secondaryEmail: "silvania.li@hotmail.com"
};

export const PHOTO_ORDER = [
  0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 35, 36, 37, 38, 39, 40, 41, 42, 66, 67, 68,
  43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65
];

export const CATEGORIES = [
  { min: 35, max: 42, label: "Bar e Churrasqueira" },
  { min: 43, max: 48, label: "Suíte Master" },
  { min: 49, max: 52, label: "Suíte 4" },
  { min: 53, max: 56, label: "Suíte 3" },
  { min: 57, max: 61, label: "Suíte 2" },
  { min: 62, max: 65, label: "Suíte 5" },
  { min: 66, max: 68, label: "Entrada e Hall" }
];

export const PINS: Record<number, { x: number; y: number }> = {
  1: { x: 58, y: 68 }, 2: { x: 59, y: 69 }, 3: { x: 56, y: 72 }, 
  4: { x: 57, y: 70 }, 5: { x: 57, y: 71 }, 6: { x: 54, y: 65 }, 
  7: { x: 56, y: 73 }, 8: { x: 92, y: 58 }, 9: { x: 22, y: 55 }, 
  10: { x: 57, y: 60 }, 11: { x: 60, y: 62 }
};
