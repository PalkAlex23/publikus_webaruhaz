import { termekLISTA } from "./adat.js";
import { kartyaOsszeallit, megjelenit, szuresEsemeny } from "./fuggvenyek.js";

init(termekLISTA);
szuresEsemeny();

export function init(lista) {
  megjelenit(kartyaOsszeallit(lista));
}
