export function rendez(lista, irany) {
  eredetiLISTA = lista;
}

export function szures(lista, keresoSzoveg) {
  /* A keresőmezőben beírt szöveget keresi a lista objektumainak név mezőjében. */

  const szurtLISTA = lista.filter(function (jatek) {
    return jatek.cim.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });

  return szurtLISTA;
}
