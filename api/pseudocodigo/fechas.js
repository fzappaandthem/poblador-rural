/**
 * 
 * campos de un poblador rural
 * 
 * fecha de creación, 
 * fecha de modificación, 
 * qué día y horario debe emitirse el mensaje al poblador, 
 * la cantidad de emisiones para ese poblador,
 * si el poblador sigue activo o no
 *  
 * necesito saber qué día (semana ej: lunes) y hora es al momento de ir a /create-poblador (si es que soy un usuario autorizado),
 * gracias a esto voy a poder chequear los 3 pobladores siguientes (o el actual y dos más)
 * 
 * 
 *  para luego determinar en qué checkbox de fecha me paro a la hora de crear un poblador
 * 
 * Como en la db voy a tener el día de modificación del mensaje al poblador rural (que puede ser la misma fecha que la fecha de creación), y como a su vez
 * voy a tener la cantidad de veces que se repite el mensaje
 * 
 * respecto a las actualizaciones de los pobladores, tiene una dificultad que es que si no se ejecutó la página no va a haber restado, o si se ejecutó
 * mas de una vez podría haber restado dos veces, guardiola con eso
 * 
 * cada vez que se edita un poblador y se vuelve a poner una cantidad de veces que se repite, es a partir del momento en que se edita el mismo
 * 
 * necesito funciones de fechas que me permitan obtener tanto el primer día como el último, cuando se pasa el poblador en la ultima emisión
 * 
 * tengo que aprovechar las expresiones regulares para poder definir en la db qué días se va a pasar el mensaje en base a la fecha actual, 
 * osea al día en que se está pidiendo pasar el mensaje... no importa si la aplicación se ejecutó o no
 * 
 * lo importante es que si el mensaje fue creado (editado) tal día, se seteo para tales días, y transcurrieron tantos días, entonces 
 * 
 * 
 * 
 */