import { termekLISTA } from "./adat.js";
import { kartyaOsszeallit, kosarEsemeny, megjelenit, szuresEsemeny, torolEsemeny } from "./fuggvenyek.js";

init(termekLISTA);
szuresEsemeny(termekLISTA);

export function init(lista) {
  megjelenit(kartyaOsszeallit(lista));
  kosarEsemeny(lista);
}
