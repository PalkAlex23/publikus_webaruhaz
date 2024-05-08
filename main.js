import { termekLISTA } from "./adat.js";
import {
  kartyaOsszeallit,
  kosarEsemeny,
  megjelenit,
  rendezEsemeny,
  szemelyesAdatFeltoltes,
  szuresEsemeny,
} from "./fuggvenyek.js";

init(termekLISTA);
szuresEsemeny(termekLISTA);
rendezEsemeny(termekLISTA);
szemelyesAdatFeltoltes();

export function init(lista) {
  megjelenit(kartyaOsszeallit(lista));
  kosarEsemeny(lista);
}
