/**
 * Como en la db voy a tener el día de modificación del mensaje al poblador rural (que puede ser la misma fecha que la fecha de creación), y como a su vez
 * voy a tener la cantidad de veces que se repite el mensaje (lo cual voy a tener que ir actualizando cada vez que el mensaje es mostrado en el home)
 * 
 * respecto a las actualizaciones de los pobladores, tiene una dificultad que es que si no se ejecutó la página no va a haber restado, o si se ejecutó
 * mas de una vez podría haber restado dos veces, guardiola con eso
 * 
 * cada vez que se edita un poblador y se vuelve a poner una cantidad de veces que se repite, es a partir del momento en que se edita el mismo
 * 
 * necesito funciones de fechas que me permitan obtener tanto el primer 
 * 
 * tengo que aprovechar las expresiones regulares para poder definir en la db qué días se va a pasar el mensaje en base a la fecha actual, 
 * osea al día en que se está pidiendo pasar el mensaje... no importa si la aplicación se ejecutó o no
 * 
 * lo importante es que si el mensaje fue creado (editado) tal día, se seteo para tales días, y transcurrieron tantos días, entonces 
 */