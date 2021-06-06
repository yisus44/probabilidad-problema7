let problema7_string = `87 99 75 88 79 75 62 100 92 74 63 98 70 79 69 65 80 67 62 63 75 82 92 92 87 88 83 65 78 83 76 100 95 90 74 69 63 77 89 87 70 73 82 88 45 81 96 74 90 85`;
// displayInfo(string1);
function problema7(string) {
  //convertirlos en arrays
  const str = string.split(" ");
  const n = str.length;
  const nclases = Math.sqrt(n);
  const maximo = Math.max(...str);
  const minimo = Math.min(...str);
  const rango = maximo - minimo;
  //el ancho tambien se llama amplitud del intervalo
  const anchoDeClase = Math.round(rango / nclases);
  console.log("Numero de elementos", n);
  console.log("Numero de clases", nclases);
  console.log("Minimo", minimo);
  console.log("Maximo", maximo);
  console.log("Ancho de clase", anchoDeClase);

  console.log("i__Li-Ls_Xi__fa__fr__fc__vesp");
  let inicioDeIntervalo = minimo;
  let finDelIntervalo = minimo + anchoDeClase;
  let marcaDeClase = undefined;

  let frecuenciaAbsoluta = undefined;
  let frecuentaRelativa = undefined;
  let frecuenciaAcumulada = 0;
  let valorEsp = 0;
  let valorEspTotal = 0;
  for (let i = 0; i < Math.round(nclases); i++) {
    //
    frecuenciaAbsoluta = problema7_rango(
      str,
      inicioDeIntervalo,
      finDelIntervalo
    );
    ////
    frecuentaRelativa = frecuenciaAbsoluta / n;
    ///
    frecuenciaAcumulada += frecuenciaAbsoluta;
    //
    marcaDeClase = (inicioDeIntervalo + finDelIntervalo) / 2;
    valorEsp = (marcaDeClase - 73) ^ 2;
    valorEspTotal += valorEsp;
    console.log(
      `${
        i + 1
      }=>${inicioDeIntervalo}-${finDelIntervalo}|-|${marcaDeClase}|-|${frecuenciaAbsoluta}|-|ye ${frecuentaRelativa}|-|${frecuenciaAcumulada}|-|${valorEsp}`
    );
    //
    inicioDeIntervalo = finDelIntervalo;
    finDelIntervalo += anchoDeClase;
  }
  console.log(valorEsp);
}

function problema7_rango(array, limiteinf, limitsup) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= limiteinf && array[i] < limitsup) count++;
  }
  return count;
}

console.log("PROBLEMA 7");
problema7(problema7_string);
