export function rendezAr(lista, irany) {
  lista.sort(function (j1, j2) {
    return (j1.ar - j2.ar) * irany;
  });
  return lista;
}

export function rendezNev(lista, irany) {
  lista.sort(function (j1, j2) {
    let eredmeny = 1;
    if (j1.cim < j2.cim) {
      eredmeny = -1;
    }
    return eredmeny * irany;
  });
  return lista;
}

export function szures(lista, keresoSzoveg) {
  /* A keresőmezőben beírt szöveget keresi a lista objektumainak név mezőjében. */

  const szurtLISTA = lista.filter(function (jatek) {
    return jatek.cim.toUpperCase().includes(keresoSzoveg.toUpperCase()) || jatek.leiras.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });

  return szurtLISTA;
}

export function torol(lista, id) {
  lista.splice(id, 1);
  return lista;
}
