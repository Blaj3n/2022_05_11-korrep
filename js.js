function $(elem) {
  return document.querySelectorAll(elem);
}

window.addEventListener("load", function () {
  // console.log($("button"))
  // console.log( $("button")[0])
  beolvas(lepkekTomb, "adatok.json", "pillangok",megjelenit);
  //   $("button")[0].addEventListener("click", megjelenit);
});

function megjelenit() {
  //article tagbe kiír div-be számokat 10db-ot
  const tarolo = $("article")[0];
  let txt = "";
  for (let index = 0; index < lepkekTomb.length; index++) {
    txt += `<div>${lepkekTomb[index].fajta},${lepkekTomb[index].szin}</div>`;
  }
  tarolo.innerHTML = txt;
}
const lepkekTomb = [];

function beolvas(tomb, fajlnev, kulcs, callbackfv) {
  fetch(fajlnev) //aszinkron hívás: arra várunk, hogy megérkezzenek az adatok
    .then((valasz) => valasz.json())
    .then((adat) => {
      console.log(adat);
      //a lepkék adatai beteszem a tömbbe
      //bejárjuk a json fájlban lévő tömböt
      console.log(adat[kulcs]); //ez a tömb
      //minden elemét betesszük a tömbbe
      adat[kulcs].forEach((lepke) => {
        console.log(lepke);
        tomb.push(lepke);
      });
      console.log(tomb);
      console.log(lepkekTomb);
      callbackfv(); //callback függvény hívás
    })
    .catch((err) => {
      console.log(err);
    });
}
