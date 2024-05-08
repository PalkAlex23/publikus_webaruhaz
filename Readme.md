# Publikus oldalhoz tervek

## Adatszerkezetek
termekLISTA = [{}, {}] - itt tároljuk a termékeket, a benne rejlő adataikkal együtt
kosarLISTA = [] - itt tároljuk a kosárba rakott termékeket

## Metódusok

1. **kartyaOsszeallit(lista)** - A paraméterben megadott lista alapján összeállítja a HTML oldal "kártyás" tartalmát
2. **megjelenit(txt)** - A paraméterben megadott szöveg alapján megjeleníti az oldalhoz elkészített HTML kódot (a kartyaOsszeallit visszatérési értéke).
3. **rendezAr(lista, irany)** - A rendezi a lista elemeinek a részeit ÁR szerint növekvő vagy csökkenő sorrendbe.
4. **rendezNev(lista, irany)** - A rendezi a lista elemeinek a részeit NÉV szerint növekvő vagy csökkenő sorrendbe.
5. **rendezEsemeny(lista)** - A görgőből kiválasztott opció szerint rendezi a paraméterül megadott listát.
6. **szures(lista, keresoSzoveg)** - Szűr a felhasználó által beírt karakterekből, ami megtalálható vagy a paraméterül adott lista címében vagy leírásában.
7. **szuresEsemeny(lista)** - A keresőszövegben írt karakterek szerint szűri és jeleníti meg az elemeket a paraméterben megadott listából.
8. **szemelyesAdatFeltoltes()** - Ha a felhasználó a megfelelő adatokkal kitöltötte az űrlapot, akkor a felhasználó összes adatát felküldi egy listába.
9. **kosarFrissit(lista)** - A paraméterben megadott lista tartalmát frissíti azáltal, hogy meghívja a megfelelő metódusokat.
10. **kosarEsemeny(lista)** - A "Kosárba" gombra kattintva egy esemény történik meg. Feltölti a termék adatait egy paraméterben megadott listába. 
11. **kosarMegjelenit(lista)** - Megjeleníti egy táblázatban, hogy milyen termékeket raktunk bele a paraméterben megadott listába.
12. **osszegSzamitasEsMegjelenites(lista)** - A paraméterben megadott lista árait összesíti és megjeleníti az oldalon.
13. **torol(lista, id)** - Kitöröl a lista azon sorát, amely a paraméterül adott id-val rendelkezik
14. **torolEsemeny(lista)** - Kitörli a kosárban lévő adatsort, ha a kuka ikonra kattintunk.