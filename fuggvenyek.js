export function kartyaOsszeallit(lista) {
  let txt = "";
  for (let i = 0; i < lista.length; i++) {
    txt += `<div class = "card col m-2">
            <img class="card-img-top" src="${lista[i].kep}" alt="${lista[i].cim}">
            <div class="card-body">
                <h4 class="card-title">${lista[i].cim}</h4>
                <p class="card-text">${lista[i].ar} Ft</p>
                <p class="card-text">${lista[i].leiras}</p>
                <a href="#" class="btn btn-primary">Kosárba</a>
            </div>
        </div>`;
  }
  console.log(txt);
  return txt;
}

export function megjelenit(txt) {
  const articleELEM = $(".row");
  articleELEM.html(txt);
}

export function szuresEsemeny() {
  /* Mindez akkor fut le, ha beírunk valamit a keresőmezőbe. */
  const keresoELEM = $("#szuro");
  console.log(keresoELEM);
  keresoELEM.on("keyup", function () {
    let keresoSzoveg = keresoELEM.val();
    const szLISTA = szures(emberekLISTA, keresoSzoveg);
    console.log(szLISTA);
    init(szLISTA);
  });
}
