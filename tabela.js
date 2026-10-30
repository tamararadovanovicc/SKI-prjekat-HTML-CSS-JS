var poslednjesort = -1;
var asc = true;

function sort(indeks) {
  var tabela, redovi, menjaj, i, x, y, trebasort;
  tabela = document.getElementById("tabelica");
  menjaj = true;


  if (poslednjesort === indeks) {
    asc = !asc;
  } else {
    asc = true;
  }

  poslednjesort = indeks;
  while (menjaj) {
    menjaj = false;
    redovi = tabela.rows;

    for (i = 1; i < (redovi.length - 1); i++) {
      trebasort = false;

      x = redovi[i].getElementsByTagName("td")[indeks];
      y = redovi[i + 1].getElementsByTagName("td")[indeks];
      if(indeks==2){
        var xvr = getNumericCellValue(x);
        var yvr = getNumericCellValue(y);
      }
      else{
      var xvr = isNaN(x.innerHTML) ? x.innerHTML.toLowerCase() : x.innerHTML;
      var yvr = isNaN(y.innerHTML) ? y.innerHTML.toLowerCase() : y.innerHTML;}

      if (asc ? xvr > yvr : xvr < yvr) {
        trebasort = true;
        break;
      }
    }

    if (trebasort) {
      redovi[i].parentNode.insertBefore(redovi[i + 1], redovi[i]);
      menjaj = true;
    }
  }

}
function getNumericCellValue(celija) {
  var vrednost = celija.textContent;
  return parseFloat(vrednost);
}