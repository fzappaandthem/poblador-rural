const Days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
]
const Hours = [
    "0700", "1130", "1300", "1630", "1900", "2100"
]

const dias = [ "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado" ]
const meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre" ]

export const getTimeWithColonFromDddhhmm = function ( dddhhmm ) {
  return dddhhmm.slice ( 3, 5 ) + ":" + dddhhmm.slice ( 5, 7 ) ;
}



const getTimeFromDate = function ( fecha ) {
  const regexTime = /\d\d:\d\d/;
  return fecha.toString().match(regexTime)[0] ;
}

export const getMonthFromDate = ( fecha ) => {
  return meses [ fecha.getMonth( ) ] ;
}
export const getDayFromDddhhmm = ( dddhhmm ) => {
  const index = Days.indexOf ( dddhhmm.slice ( 0, 3 ) ) ;
  return dias [ index ] ;
}

const getTimeWithoutColon = (time) => {
  return time.slice(0, 2)+time.slice(3, 5);
}

const getTimeWithoutColonFromDate = function (date) {
  const regexTime = /\d\d:\d\d/;
  return getTimeWithoutColon(date.toString().match(regexTime)[0]);
}


const getDddFromDate = ( date ) => {
  return date.toString ( ).slice ( 0, 3 ) ;
}

const getDddhhmmFromDate = function ( fechaActual ) {
  return getDddFromDate ( fechaActual ) + getTimeWithoutColonFromDate ( fechaActual ) ;
}

export const getMesFromFecha = ( fecha ) => {
  
}

export const getDayOffset = ( ddd ) => {
  return Days.indexOf ( ddd ) ;
}

const getHourOffset = ( hour ) => {
  return Hours.indexOf ( hour ) ;
}

const getOffsetRelativoAFechaFromOffsetAbsolutoEmision = ( offsetAbsolutoFecha, offsetAbsolutoMPR ) => {
  let dayOffsetRelativoAFecha = offsetAbsolutoMPR.dayOffset - offsetAbsolutoFecha.dayOffset ;
  dayOffsetRelativoAFecha = dayOffsetRelativoAFecha >= 0 ? dayOffsetRelativoAFecha : dayOffsetRelativoAFecha + Days.length ;

  if( dayOffsetRelativoAFecha == 0 && offsetAbsolutoMPR.hourOffset < offsetAbsolutoFecha.hourOffset ) {
      dayOffsetRelativoAFecha = Days.length ;
  }

  return { dayOffset: dayOffsetRelativoAFecha, hourOffset: offsetAbsolutoMPR.hourOffset } ;
}

const getOffsetAbsolutoMPR = ( emision ) => {
  return { dayOffset: getDayOffset ( emision.slice ( 0,3 ) ), hourOffset: getHourOffset ( emision.slice ( 3,8 ) ) }
}

const getOffsetsAbsolutosMPR = ( emisiones ) => {
  return emisiones.map( e => getOffsetAbsolutoMPR ( e ) );
}

const getNextEmissionHourOffset = ( hhmm ) => {

  let currentIdxInHoursArr = 0;

  while ( hhmm >= Hours [ currentIdxInHoursArr ] && currentIdxInHoursArr < Hours.length ) {
      currentIdxInHoursArr++ ;
  }

  if ( currentIdxInHoursArr >= Hours.length )
      return - 1 ;

  return currentIdxInHoursArr ;
}
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

/***
 * [days] al menos tiene un elemento, que es el de la proxima emision
 */
const getEmisionAnteriorSistema = function () {
  //hallo hora actual en hours array y day actual en days array
  //resto uno a la emision próxima si pasaron mas de 45 minutos de la misma, sino pasaron 45 minutos desde que empezó
  //la emisión anterior, devuelvo la date de la emision anterior (si es Wed1140 devuelvo la fecha del Wed1130 del día actual)
}

const getEmisionAlAireSistema = function() {
  //devuelve la proxima emision si ya pasaron 45 minutos o mas desde la ultima emision empezada
}

const getProximas3Horas = (horaActual, diaActual) => {
    
  let proximas3Horas = [];
  let proximaEdicion = 0;

  while( proximaEdicion < Hours.length && Hours[proximaEdicion] < horaActual ) {
      proximaEdicion++;
  }

  // son las 13 o menos
  if(Hours.length > proximaEdicion + 2) 
  {
      if(diaActual === 0)
      {
        if(proximaEdicion === 0){
          proximas3Horas = [Hours[proximaEdicion], Hours[proximaEdicion+1], Hours[proximaEdicion+2]];
        }
        else if(proximaEdicion === 1) 
        {
          proximas3Horas = [Hours[proximaEdicion], Hours[proximaEdicion+1], Hours[proximaEdicion+3]];
        }
        else if(proximaEdicion === 2)
        {
          proximas3Horas = [Hours[proximaEdicion], Hours[proximaEdicion+2], Hours[proximaEdicion+3]];
        }
        else if ( proximaEdicion === 3 )
        {
          proximas3Horas = [Hours[proximaEdicion+1], Hours[proximaEdicion+2], Hours[0]];
        }
      } 
      else 
      {
        proximas3Horas = [Hours[proximaEdicion], Hours[proximaEdicion+1], Hours[proximaEdicion+2]];
      }
  } 
  //son las 1630
  else if (Hours.length > proximaEdicion + 1) 
  {
      proximas3Horas = [Hours[proximaEdicion], Hours[proximaEdicion+1], Hours[0]];
  } 
  else if ( Hours.length > proximaEdicion)
  {
      proximas3Horas = [Hours[proximaEdicion], Hours[0], Hours[1]];
  }
  else 
  {
      proximas3Horas = [Hours[0], Hours[1], Hours[2]];
  }

  return proximas3Horas;

}
const getProximos3dias = (dayParam, horaActualSinDosPuntos) => {
  const diaActualIndexInDaysArr = Days.indexOf(dayParam);
  const proximas3Horas = getProximas3Horas(horaActualSinDosPuntos, diaActualIndexInDaysArr);

  if(proximas3Horas[0] < horaActualSinDosPuntos && horaActualSinDosPuntos > "0700") {
    if(diaActualIndexInDaysArr === 6) {
      return [Days[0], Days[0], Days[0]];
    }
    return [Days[diaActualIndexInDaysArr+1], Days[diaActualIndexInDaysArr+1], Days[diaActualIndexInDaysArr+1]];
  }
  else if(proximas3Horas[1] < horaActualSinDosPuntos)
  {
    if(diaActualIndexInDaysArr === 6) {
      return [Days [ diaActualIndexInDaysArr ], Days [ 0 ] , Days[0]];
    }
      return [ Days [ diaActualIndexInDaysArr ], Days[diaActualIndexInDaysArr+1], Days[diaActualIndexInDaysArr+1]];
  }
  else if(proximas3Horas[2] < horaActualSinDosPuntos)
  {
    if(diaActualIndexInDaysArr === 6) {
      return [Days[diaActualIndexInDaysArr], Days[diaActualIndexInDaysArr], Days[0]];
    }
      return [Days[diaActualIndexInDaysArr], Days[diaActualIndexInDaysArr], Days[diaActualIndexInDaysArr+1]];
  }
  else
  {
      return [Days[diaActualIndexInDaysArr], Days[diaActualIndexInDaysArr], Days[diaActualIndexInDaysArr]];
  }
}

const getOffsetAbsolutoProximaEmisionFromDate = ( fecha ) => {
  const hhmm = getTimeWithoutColonFromDate ( fecha ) ;
  const ddd = getDddFromDate ( fecha ) ;

  let dayOffset = getDayOffset ( ddd ) ;
  
  let currentIdxInHoursArr = getNextEmissionHourOffset ( hhmm ) ;

  //si no hay una emision posterior el mismo día, hay que avanzar el dia
  if ( currentIdxInHoursArr == -1 ) {

      if ( dayOffset == 6 ) {
          dayOffset = 0 ;
      } else {
          dayOffset++ ;
      }
      
      currentIdxInHoursArr = getNextEmissionHourOffset ( "0000" ) 
  }

  if( dayOffset == 0 && Hours [ currentIdxInHoursArr ] === "1630" )
      currentIdxInHoursArr++ ;

  return { dayOffset: dayOffset, hourOffset: currentIdxInHoursArr };
}

const offsetCompare = ( offset1, offset2 ) => {
  const dayOffset_1 = parseInt ( offset1.dayOffset  ) ;
  const dayOffset_2 = parseInt ( offset2.dayOffset  ) ;
  const hourOffset_1 = parseInt ( offset1.hourOffset  ) ;
  const hourOffset_2 = parseInt ( offset2.hourOffset  ) ;

  if( dayOffset_1 < dayOffset_2 ){
      return -1 ;
  } else {
      if( dayOffset_1 == dayOffset_2 ) {
          if( hourOffset_1 < hourOffset_2 ) {
              return -1 ;
          }
          return 1 ;
      }
      return 1;
  }
}

const getFechaEmisionMasProximaPosterior = ( fecha, offsetAbsolutoProximaEmision ) => {
  const offsetAbsolutoDiasNextEmision = offsetAbsolutoProximaEmision.dayOffset != Days.indexOf ( fecha.slice( 0, 3) ) ? 1 : 0 ;
  
  const emisionMasProxima = new Date ( ) ;
  emisionMasProxima.setDate ( fecha.getDate ( ) + offsetAbsolutoDiasNextEmision  ) ;
  
  const hhmm = Hours [ offsetAbsolutoProximaEmision.hourOffset ] ;
  const horas = hhmm.slice ( 0, 2 ) ;
  const minutos = hhmm.slice ( 2, 4 ) ;
  
  const horaProximaEmision = [horas, minutos, "00"];
  emisionMasProxima.setHours(...horaProximaEmision);

  return emisionMasProxima ;

}

const getOffsetsRelativosAFechaFromOffsetsAbsolutosEmisiones = ( offsetAbsolutoEmisionMasProxima, offsetsAbsolutosEmisiones ) => {
  return offsetsAbsolutosEmisiones.map ( offsetEmision => getOffsetRelativoAFechaFromOffsetAbsolutoEmision ( offsetAbsolutoEmisionMasProxima, offsetEmision ) );
}

const getFechaFrom_fecha_offsetDays_hourIndex = ( fecha, dayOffset, hourIndex ) => {
  const fechaEmisionBuscada = new Date ( );
  fechaEmisionBuscada.setDate ( fecha.getDate() + dayOffset );

  const hhmm = Hours[ hourIndex ] ;
  
  const hourEmisionBuscada = [ hhmm.slice( 0, 2 ), hhmm.slice( 2, 4 ), '00' ];
  fechaEmisionBuscada.setHours ( ...hourEmisionBuscada );
  
  return fechaEmisionBuscada;
}

const getFechaFrom_fecha_weeksOffset_time = ( fecha, weeksOffset, hhmm ) => {
  const fechaEmisionBuscada = new Date ( );
  fechaEmisionBuscada.setDate ( fecha.getDate() + weeksOffset * 7 );

  const hourEmisionBuscada = [ hhmm.slice( 0, 2 ), hhmm.slice( 2, 4 ), '00' ];
  fechaEmisionBuscada.setHours ( ...hourEmisionBuscada );
  // console.log("getFechaFrom_fecha_weeksOffset_time") ;
  // console.log( getDddFromDate( fechaEmisionBuscada ) + " " + getTimeWithoutColonFromDate( fechaEmisionBuscada ) ); ;
  // console.log( "En Argentina: " + fechaEmisionBuscada ) ;
  
  return fechaEmisionBuscada;
}

export const getFechaEmisionProximaSistema = ( fecha ) => {
  const offsetAbsolutoEmisionMasProxima = getOffsetAbsolutoProximaEmisionFromDate ( fecha ) ;
  const fechaDeEmisionMasProxima = getFechaEmisionMasProximaPosterior ( fecha, offsetAbsolutoEmisionMasProxima ) ;
  return fechaDeEmisionMasProxima;
}


export function getDddhhmmEmisionProximaSistema ( fecha ) {
  const offsetAbsolutoProxEmision = getOffsetAbsolutoProximaEmisionFromDate ( fecha ) ;
  return Days [ offsetAbsolutoProxEmision.dayOffset ] + Hours [ offsetAbsolutoProxEmision.hourOffset ] ;
}

function getFechasEmisionesPrimerSemanaCalendario ( fecha, offsetAbsolutoPrimerEmision, offsetsAbsolutosEmisiones ) {
  
  const offsetsRelativosAPrimerEmision = getOffsetsRelativosAFechaFromOffsetsAbsolutosEmisiones ( offsetAbsolutoPrimerEmision, offsetsAbsolutosEmisiones ) ;
  const offsetsRelativosOrdenados = offsetsRelativosAPrimerEmision.toSorted ( offsetCompare ) ;
  const fechasDeEmisionesOrdenadas1erSemanaCalendario = new Array ( offsetsRelativosOrdenados.length );
  
  for (let i = 0; i < offsetsRelativosOrdenados.length ; i++) {
    const offsetRelativoActual = offsetsRelativosOrdenados [ i ] ;
    let hourIndex = offsetRelativoActual.hourOffset ;
    fechasDeEmisionesOrdenadas1erSemanaCalendario [ i ] = getFechaFrom_fecha_offsetDays_hourIndex ( fecha, offsetRelativoActual.dayOffset, hourIndex )
  }
  
  return fechasDeEmisionesOrdenadas1erSemanaCalendario ;
}

export const getFechaUltimaEmision = ( fecha, emisiones, cantRepeticiones ) => {

  const haceQuince = new Date( );
  haceQuince.setTime ( fecha.getTime() - 15 * 1000 * 60 ) ;

  const offsetAbsolutoProxEmision = getOffsetAbsolutoProximaEmisionFromDate ( haceQuince ) ;
  const offsetsAbsolutosEmisiones = getOffsetsAbsolutosMPR ( emisiones ) ;
  const fechasDeEmisionesOrdenadas = getFechasEmisionesPrimerSemanaCalendario ( haceQuince, offsetAbsolutoProxEmision, offsetsAbsolutosEmisiones ) ;
  console.log(fechasDeEmisionesOrdenadas);

  const semanas = Math.floor ( ( cantRepeticiones - 1 ) / fechasDeEmisionesOrdenadas.length ) ;
  let dayOrdenadoOffset =  (cantRepeticiones - 1) % fechasDeEmisionesOrdenadas.length ;
  // dayOrdenadoOffset = dayOrdenadoOffset < 0 ? 0 : dayOrdenadoOffset ;
  const fechaUltimaEmision = new Date ( ) ;

  const hhmm = getTimeWithoutColonFromDate ( fechasDeEmisionesOrdenadas [ dayOrdenadoOffset ] ) ;
  
  const hourEmisionBuscada = [ hhmm.slice( 0, 2 ), hhmm.slice( 2, 4 ), '00' ];
  fechaUltimaEmision.setHours ( ...hourEmisionBuscada );
  fechaUltimaEmision.setDate ( fechasDeEmisionesOrdenadas [ dayOrdenadoOffset ].getDate ( ) + semanas * 7  ) ;

  return fechaUltimaEmision ;

}
function imprimirTodasLasEmisionesMPR ( fechasEmisionesPrimerSemanaCalendario, cantRepeticiones ) {

  let repeticion = 0 ;
  let emisionSemanal = 0 ;
  let semanaAnalizada = 0 ;

  while ( repeticion < cantRepeticiones ) {
      
      for ( let emisionSemanal = 0 ; emisionSemanal < fechasEmisionesPrimerSemanaCalendario.length && repeticion < cantRepeticiones ; emisionSemanal++ ) {
          let fechaEmision = fechasEmisionesPrimerSemanaCalendario [ emisionSemanal ] ;
          if ( semanaAnalizada == 0 ) {
              console.log( "imprimirTodasLasEmisionesMPR week 0: " + repeticion ) ;
              console.log( "En Argentina: " + fechasEmisionesPrimerSemanaCalendario [ emisionSemanal ] ) ;
          } else {
              let time = getTimeWithoutColonFromDate ( fechaEmision ) ;
              fechaEmision = getFechaFrom_fecha_weeksOffset_time ( fechaEmision, semanaAnalizada, time ) ;
              console.log( "imprimirTodasLasEmisionesMPR: " + repeticion ) ;
              console.log( "En Argentina: " + fechaEmision ) ;
          }
          repeticion ++ ;
      }
      semanaAnalizada++ ;
  }
}


export const getNext3CheckBoxesIds = () => {
  const ahora = new Date ( ) ;
  const haceQuince = new Date( );
  haceQuince.setTime ( ahora.getTime() - 15 * 1000 * 60 ) ;
  console.log("getNext3CheckBoxesIds-Time:")
  console.log(haceQuince);
  const dia = getDddFromDate(haceQuince);
  const hora = getTimeWithoutColonFromDate(haceQuince);

  const [dia1, dia2, dia3] = getProximos3dias(dia, hora);
  const [hora1, hora2, hora3] = getProximas3Horas(hora, Days.indexOf(dia));
  return [dia1+hora1, dia2+hora2, dia3+hora3];
}
