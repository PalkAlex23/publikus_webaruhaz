# Publikus oldalhoz tervek

## Adatszerkezetek
termekLISTA = [{}, {}] - itt tároljuk a termékeket, a benne rejlő adataikkal együtt
kosarLISTA = [] - itt tároljuk a kosárba rakott termékeket

## Metódusok

1. **kartyaOsszeallit(lista)** - A paraméterben megadott lista alapján összeállítja a HTML oldal "kártyás" tartalmát
2. **megjelenit(txt)** - A paraméterben megadott szöveg alapján megjeleníteni az oldalhoz elkészített HTML kódot (a kartyaOsszeallit visszatérési értéke).
3. **rendez(lista)** - A rendezi a lista elemeinek a részeit növekvő vagy csökkenő sorrendbe.
4. **szuro(lista)** - A szűr a felhasználó által beírt karakterekből, ami megtalálható vagy a címben vagy annak a leírásában.
5. **szemelyesAdatFeltoltes()** - Ha a felhasználó a megfelelő adatokkal kitöltötte az űrlapot, akkor a felhasználó összes adatát felküldi egy listába.
6. **kosarbaFeltoltes()** - A "Kosárba" gombra kattintva feltölti a termék adatait egy "KOSARLISTA" nevű listába.
7. **kosarMegjelenit(lista)** - Megjeleníti egy táblázatban, hogy milyen termékeket raktunk bele a paraméterben megadott listában.
8. **osszegSzamitasEsMegjelenites(lista)** - A paraméterben megadott lista árait összesíti és megjeleníti az oldalon.
9. **kosarTorol(lista)** - Kitörli a kosárban lévő adatsorát, ha a kuka ikonra kattintunk.