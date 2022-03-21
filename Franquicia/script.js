var peli = [
	[
		'SHREK',
		'Es un ogro verde, gruñón y solitario, que vive felizmente en su ciénaga.',
		'shrek.jpg'
	],

	[
		'FIONA',
		'Es la princesa de Muy, Muy, Lejano, que está encerrada en una torre muy alta tras un hechizo.',
		'fiona.jpg'
	],
	[
		'ASNO',
		'Es un burro parlante muy pesado, que acompaña a Shrek en sus aventuras, haciéndose grandes amigos.',
		'asno.jpg'
	],

	[
		'DRAGONA',
		'Es la dragona que custodia el castillo donde está encerrada la princesa Fiona, y quien se enamorará de Asno.',
		'dragona.jpg'
	],

	[
		'GATO',
		'Gato es un gato espadachín que lleva botas, y tiene una adorable mirada que deja a todo el mundo ensimmismado.',
		'gato.jpg'
	],
	[
		'PINOCHO',
		'Su padre dice que es una marioneta parlante, pero él sueña con ser un niño de verdad, y cada vez que dice mentiras le crece la nariz.',
		'pinocho.jpg'
	],
	
	[
		'JENGI',
		'Es una galleta de jengibre que fue horneada por Jero el Pastelero. Tiene alta capacidad para resistir interrogatorios.',
		'jengibre.jpg'
	],

	[
		`RAMPEL`,
		'Es un pequeño negociador de magia negra que llega a un acuerdo con Shrek, aunque engaña al ogro sin que éste se de cuenta.',
		'rampel.jpg'
	]
]

let foto = " ";

for (let i = 0; i < peli.length; i++) {
	foto += "<li>";	
	foto += '<img src="' + "img/" + peli[i][2] + '">';
	foto += "<h2>" + peli[i][0] + "</h2>";
	foto += "<p>" + peli[i][1] + "</h2>";
	foto += "</li>";

}

document.getElementById('listado').innerHTML = foto;

