import { termekLISTA } from "./adat.js";
import {
  kartyaOsszeallit,
  kosarEsemeny,
  megjelenit,
  rendezEsemeny,
  szuresEsemeny,
} from "./fuggvenyek.js";

init(termekLISTA);
szuresEsemeny(termekLISTA);
rendezEsemeny(termekLISTA);

export function init(lista) {
  megjelenit(kartyaOsszeallit(lista));
  kosarEsemeny(lista);
}
