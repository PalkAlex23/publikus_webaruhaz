import { init } from "./main.js";
import { szures, torol } from "./adatkezelo.js";

const kosarLISTA = [];
const szemelyLISTA = [];

export function kartyaOsszeallit(lista) {
  let txt = "";
  for (let i = 0; i < lista.length; i++) {
    txt += `<div class = "card col m-2">
            <img class="card-img-top" src="${lista[i].kep}" alt="${lista[i].cim}">
            <div class="card-body">
                <h4 class="card-title">${lista[i].cim}</h4>
                <p class="card-text">${lista[i].ar} Ft</p>
                <p class="card-text">${lista[i].leiras}</p>
                <a href="#" class="btn btn-primary" id="${i}">Kosárba</a>
            </div>
        </div>`;
  }
  // console.log(txt);
  return txt;
}

export function megjelenit(txt) {
  const articleELEM = $(".row");
  articleELEM.html(txt);
}

export function szuresEsemeny(lista) {
  /* Mindez akkor fut le, ha beírunk valamit a keresőmezőbe. */
  const keresoELEM = $("#szuro");
  console.log(keresoELEM);
  keresoELEM.on("keyup", function () {
    let keresoSzoveg = keresoELEM.val();
    const szLISTA = szures(lista, keresoSzoveg);
    console.log(szLISTA);
    init(szLISTA);
  });
}

export function kosarFrissit(lista) {
  kosarMegjelenit(lista);
  osszegSzamitasEsMegjelenites(lista);
  torolEsemeny(lista);
}

export function kosarEsemeny(lista) {
  const gombELEMEK = $(".card-body .btn");
  gombELEMEK.on("click", function (event) {
    /* console.log(event.target.id)
    console.log(lista[event.target.id]) */
    kosarLISTA.push(lista[event.target.id]);
    // console.log(kosarLISTA);
    kosarFrissit(kosarLISTA);
  });
}

export function kosarMegjelenit(lista) {
  let txt = "";
  for (let i = 0; i < lista.length; i++) {
    txt += `<tr>
      <td><img src="${lista[i].kep}" style="width:100px" alt="${lista[i].cim}"></td>
      <td>${lista[i].cim}</td>
      <td>${lista[i].leiras}</td>
      <td>${lista[i].ar} Ft</td>
      <td class="torol" id="${i}">🗑️</td>
    </tr>`;
  }
  const tbELEM = $("tbody");
  tbELEM.html(txt);
}

export function osszegSzamitasEsMegjelenites(lista) {
  const osszegELEM = $("#osszeg");
  let osszeg = 0;
  for (let i = 0; i < lista.length; i++) {
    osszeg += lista[i].ar;
  }
  osszegELEM.html(`Összeg: ${osszeg} Ft`);
}

export function torolEsemeny(lista) {
  const torolGOMB = $(".torol");
  torolGOMB.on("click", function (event) {
    /* event.target az az elem, amelyik kiváltotta az eseményt */
    let id = event.target.id;
    const LISTA = torol(lista, id);
    kosarFrissit(LISTA);
  });
}

/*
export function szemelyesAdatFeltoltes() {
  const vNevELEM = $("#vnev")
  const kNevELEM = $("#knev")
  const tSzamELEM = $("#tszam")
  const szlaSzamELEM = $("#szlaszam")
  const adatOBJ = {
    vnev: "",
    knev: "",
    tszam: 0,
    szlaszam: 0
  }

  const kuldELEM = $("#kuld")
  kuldELEM.on("click", function(event) {
    event.preventDefault()

    adatOBJ.vnev = vNevELEM.val()
    adatOBJ.knev = kNevELEM.val()
    adatOBJ.tszam = Number(tSzamELEM.val())
    adatOBJ.szlaszam = Number(szlaSzamELEM.val())
    console.log(adatOBJ)
    const validELEM = $(".valid-feedback")
        
    if (validELEM) {
      szemelyLISTA.push(adatOBJ)
      console.log(szemelyLISTA)
    } else {
      console.log("Hibás adatok!")
    }
  })
}
*/
