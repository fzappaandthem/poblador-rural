const days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
]
const hours = [
    "0700", "1130", "1300", "1630", "1900", "2100"
]
/***
 * hour: hhmm
 */
const getHourIdxInHoursArray = (hour, dayIdx) => {

  let proximaEdicion = 0;

  while( proximaEdicion < hours.length && hour < hours[proximaEdicion] ) {
      proximaEdicion++;
  }

  for (let i = 0; i < hours.length; i++) {
    
    if(hours[i] >= hour - 15 && hours[i] <= hour ) 
    { 
      if(dayIdx === 0 && hours[i] === "1630")
        return i+1;
      else
        return i;
    }
    else if(hours[i] > hour){

    }
  }

  return idxDeLaHoraDeLaEmisionMasProxima;
}

const getTimeWithoutColon = (time) => {
    return time.slice(0, 2)+time.slice(3, 5);
}

const isItBetweenHours = (time, firstPoblador, lastPoblador) => {
  //devuelve true si time es entre las horas firstPoblador y lastPoblador
}

//esto es para getDiaMasProximoMensaje y para getDiaMasProximoSistema
const getDiaMasProximo = function(days=[]) {
  const fechaActual = new Date();
  if(days.length > 0){
    //obtengo el ddd actual, pregunto si days tiene al ddd actual, caso contrario
    //obtengo el indice del ddd actual y pregunto en el days arrays por el proximo ddd (lo llamamos next)
    //si days.any(next) me da true, entonces next es el ddd mas proximo
  }
  else
  {
    return getProximos3dias(getDiaFromDate(fechaActual), getTimeWithoutColonFromDate(fechaActual))[0];
  }
  //si days tiene una lista de dddhhmm's busco cual es el día más próximo
}

export const getUltimaEmisionMPR = (cantRepeticiones, daysIdxInDaysArray, hoursIdxInHoursArray) => {
  //a partir de la fecha actual (tengo el index en days arrays y el index en hours arrays: ez),
}

/***
 * Quien llama a esta función se tomó el laburo de separar el día de la hora y de enviarme 
 * un array con el indice del dia y el indice de la hora en los arrays que tienen los datos de las emisiones
 * [daysIdxInDaysArray] al menos tiene un elemento, que es el de la proxima emision
 * si quiero daysIdxInDaysArray ordenado a partir de la fecha actual
 */
export const getPrimerEmisionMPR = (emisionesDddhhrr) => {
  //fecha actual
  const fechaActual = new Date();

  //get day actual in days array
  const currentDayIdxInDaysArray = getindex;

  //get hora del poblador más próximo (puede haber empezado hace 15 minutos o menos)
  const closestPobladorIdxInHoursArray = getindex;

  /**
   * comparo currentDaayIdxInDaysArray y closestPobladorInHoursArray con las emisiones en emisionesDddhhrr
   * cuando encuentro la emision mas cercana a la fecha actual, que está en emisionesDddhhrr
   * devuelvo la fecha de cuando sería la emisión más cercana para que se pase en ese mensaje al poblador sistema
  */
  

  const fechaMasProxima = getFechaEmisionMasProxima(currentDayIdxInDaysArray, closestPobladorIdxInHoursArray, emisionesDddhhrr);

  return fechaMasProxima;

}


const getFechaEmisionMasProxima = (currentDayIdxInDaysArray, closestPobladorIdxInHoursArray, emisionesDddhhrr) => {
  /**uso aritmetica de fechas para irle sumando 1 dia a la fecha actual cada vez que agote tanto
   * la emision actual como las siguientes hasta encontrar en emisionesDddhhrr la emision mas cercana
   * a la fecha actual, una vez que la encuentro la convierto en fecha y la devuelvo
   */

  //lo primero es preguntar si la primera emisión no es la que empezó hace menos de 15, luego es preguntar si no es la
  //próxima y así pero ya después es con el buble, por qué no empiezo el bucle desde la emisión anterior en caso de que...
  let emisionMasProxima = null;

  //hay que calcular daysoffset para sumarle la cantidad de días a la fecha actual, y el offset respecto 

  //tendría que calcular la cantidad de días a partir de la fecha, que a lo sumo pueden ser 7 osea que es un for de 1 a 7

  for (let i = 0; i < days.length ; i++) {
    // const idxDeLaHoraDeLaEmisionMasCercana = getHourIdxInHoursArray(hours[closestPobladorIdxInHoursArray]);
    // for(let j = idxDeLaHoraDeLaEmisionMasCercana; j < hours.length ; j++){
      //const theBigDay = new Date(1962, 6, 7, 12); -> noon of 1962-07-07 (7th of July 1962, month is 0-indexed)

      /**Si la ultima emisión, comenzó hace 15 minutos o menos, comienzo el for en la emision anterior, recordar
       * que la emisión anterior solo nos interesa para el día de la semana actual, porque ninguna emisión 15 minutos anterior
       * corresponde a un día anterior
       * 
       * si... en la hora actual hhmm 
       * */
      // if(emisionesDddhhrr.indexOf(`${days[i]}${hours[j]}`) !== -1){
        // emisionMasProxima = new Date(`${days[i]} ${hours[j]}`);
      // }
      // else if(){

      // }

      //si j+1 != 1630 y i != Sun
      // if(j+1)

    // }
    // if( i + 1 === days.length  ){
      // i = 0;
    // }
  }
    // currentDayIdxInDaysArray


  /**mientras la hora actual sin dos puntos sea menor a la hora de la emision mas cercana desde hours[0]
   * tener en cuenta la obvia excepción de los domingos antes de chequear si la emision mas cercana es un domingo
   * respecto de la emision de las 1630
   * 
   * sumar un día cuando se llega a la ultima emisión del día y la hora actual es 15 minutos o mas mayor a la hora de la ultima
   * emisión del día actual
   * */



  /**
   * Cuando generalice este comportamiento para n emisiones, voy agregando a un array las emisiones a medida que voy restando
    * segun la cantidad de repeticiones el cual va quedando ordenado, y elimino de emisionesDddhhrr las emisiones que ya matchee con fecha concreta en el array
    * 
   */
  

}


/***
 * day: Ddd
 */
const getDayIdxInDaysArray = (day) => {
  return days.indexOf(day);
}


/***
 * [days] al menos tiene un elemento, que es el de la proxima emision
 */
const findUltimaEmisionMPR = function(cantRepeticiones, days){
  //a partir de la fecha actual (tengo el index en days arrays y el index en hours arrays: ez), 
  //busco la proxima emision y resto uno a cantRepeticiones, si es 0, la anterior emision encontrada es la ultima
  //caso contrario busco la siguiente emision y resto uno a cantRepeticiones
}

const getEmisionAnteriorSistema = function () {
  //hallo hora actual en hours array y day actual en days array
  //resto uno a la emision próxima si pasaron mas de 45 minutos de la misma, sino pasaron 45 minutos desde que empezó
  //la emisión anterior, devuelvo la date de la emision anterior (si es Wed1140 devuelvo la fecha del Wed1130 del día actual)
}

const getEmisionAlAireSistema = function() {
  //devuelve la proxima emision si ya pasaron 45 minutos o mas desde la ultima emision empezada
}

//aritmetica de fechas necesito saber si las fechas siguientes son o no mayores o menores respecto de las mismas

//emisionPautada, isEnabled, fechaPrimerEmision <= fechaActual <= fechaUltimaEmision
//Necesito saber si un mensaje al poblador debería ser incluido en la emision actual

//ordenar segun la fecha actual los checkboxes true, no debería ser tan dificil teniendo en cuenta que ya estoy obteniendo
//de prepo los 3 siguientes, siempre

//ESO ES TODO LO QUE ME FALTA DE LAS FECHAS Y PARA TERMINAR EL SISTEMA


const getProximas3Horas = (horaActual, diaActual) => {
    
    let proximas3Horas = [];
    let proximaEdicion = 0;

    while( proximaEdicion < hours.length && hours[proximaEdicion] < horaActual ) {
        proximaEdicion++;
    }

    // son las 13 o menos
    if(hours.length > proximaEdicion + 2) 
    {
        if(diaActual === 0)
        {
          if(proximaEdicion === 0){
            proximas3Horas = [hours[proximaEdicion], hours[proximaEdicion+1], hours[proximaEdicion+2]];
          }
          else if(proximaEdicion === 1) 
          {
            proximas3Horas = [hours[proximaEdicion], hours[proximaEdicion+1], hours[proximaEdicion+3]];
          }
          else if(proximaEdicion === 2)
          {
            proximas3Horas = [hours[proximaEdicion], hours[proximaEdicion+2], hours[proximaEdicion+3]];
          }
          else if ( proximaEdicion === 3 )
          {
            proximas3Horas = [hours[proximaEdicion+1], hours[proximaEdicion+2], hours[0]];
          }
        } 
        else 
        {
          proximas3Horas = [hours[proximaEdicion], hours[proximaEdicion+1], hours[proximaEdicion+2]];
        }
    } 
    //son las 1630
    else if (hours.length > proximaEdicion + 1) 
    {
        proximas3Horas = [hours[proximaEdicion], hours[proximaEdicion+1], hours[0]];
    } 
    else if ( hours.length > proximaEdicion)
    {
        proximas3Horas = [hours[proximaEdicion], hours[0], hours[1]];
    }
    else 
    {
        proximas3Horas = [hours[0], hours[1], hours[2]];
    }

    return proximas3Horas;

}
const getProximos3dias = (dayParam, horaActualSinDosPuntos) => {
    const diaActualIndexInDaysArr = days.indexOf(dayParam);
    const proximas3Horas = getProximas3Horas(horaActualSinDosPuntos, diaActualIndexInDaysArr);

    if(proximas3Horas[0] < horaActualSinDosPuntos && horaActualSinDosPuntos > "0700") {
      if(diaActualIndexInDaysArr === 6) {
        return [days[0], days[0], days[0]];
      }
      return [days[diaActualIndexInDaysArr+1], days[diaActualIndexInDaysArr+1], days[diaActualIndexInDaysArr+1]];
    }
    else if(proximas3Horas[1] < horaActualSinDosPuntos)
    {
      if(diaActualIndexInDaysArr === 6) {
        return [days[diaActualIndexInDaysArr], days[0], days[0]];
      }
        return [days[diaActualIndexInDaysArr], days[diaActualIndexInDaysArr+1], days[diaActualIndexInDaysArr+1]];
    }
    else if(proximas3Horas[2] < horaActualSinDosPuntos)
    {
      if(diaActualIndexInDaysArr === 6) {
        return [days[diaActualIndexInDaysArr], days[diaActualIndexInDaysArr], days[0]];
      }
        return [days[diaActualIndexInDaysArr], days[diaActualIndexInDaysArr], days[diaActualIndexInDaysArr+1]];
    }
    else
    {
        return [days[diaActualIndexInDaysArr], days[diaActualIndexInDaysArr], days[diaActualIndexInDaysArr]];
    }
}

const getDiaFromDate = (date) => {
  return date.toString().slice(0, 3);
}

const getTimeWithoutColonFromDate = function (date) {
  const regexTime = /\d\d:\d\d/;
  return getTimeWithoutColon(date.toString().match(regexTime)[0]);
}


export const getNext3CheckBoxesIds = () => {

    const date = new Date();
    console.log(date);
    const dia = getDiaFromDate(date);
    const hora = getTimeWithoutColonFromDate(date);

    const [dia1, dia2, dia3] = getProximos3dias(dia, hora);
    const [hora1, hora2, hora3] = getProximas3Horas(hora, days.indexOf(dia));
    return [dia1+hora1, dia2+hora2, dia3+hora3];
}


// const time = new Date().toString();
// console.log(time);

// const onlyHoursAndMinutes = time.match(regexTime)[0];

// console.log("onlyHoursAndMinutes: "+onlyHoursAndMinutes)

//outputs
// console.log(`A partir de la fecha y hora actuales (${new Date().toString()}), el horario es: ${ getTimeWithoutColon(onlyHoursAndMinutes) }`);
// console.log(getProximas3Horas(getTimeWithoutColon()));
// console.log(getNext3CheckBoxesIds());

// console.log(getNext3CheckBoxesIds("Sun", "1630"));

