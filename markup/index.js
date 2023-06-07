// let marvelHeroes = [
// 	{
// 		name: "Thor"
// 	},
// 	{
// 		name: "Spider Man"
// 	}
// ];

// let dcHeroes = [
// 	{
// 		name: "Superman"
// 	},
// 	{
// 		name: "Batman"
// 	},
// 	{
// 		name: "Deadpool"
// 	}
// ];

// Array.prototype.heroesRender = function(folderName) {
// 	let tableHTML = '<table>';
// 	tableHTML += '<thead><tr><th>Name</th><th>Icon</th></tr></thead>';
// 	tableHTML += '<tbody>';

// 	this.forEach(function(hero) {
// 		tableHTML += '<tr>';
// 		tableHTML += '<td>' + hero.name + '</td>';
// 		tableHTML += '<td>';
// 		let imageName = hero.name.replace(/\s/g, '').toLowerCase() + '.svg';
// 		let imagePath = 'images/' + folderName + '/' + imageName;
// 		tableHTML += `<img src= ${imagePath}>`;
// 		tableHTML += '</td>';
// 		tableHTML += '</tr>';
// 	});

// 	tableHTML += '</tbody>';
// 	tableHTML += '</table>';

// 	document.write(tableHTML);
// };

// marvelHeroes.heroesRender('marvel');
// dcHeroes.heroesRender('dc');



const marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

const dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function(folderName) {
	const tableRows = this.map(function(hero) {
		const imageName = hero.name.replace(/\s/g, '').toLowerCase() + '.svg';
		const imagePath = 'images/' + folderName + '/' + imageName;
		return '<tr>\
			<td>' + hero.name + '</td>\
			<td>\
				<img src="' + imagePath + '">\
			</td>\
		</tr>';
	});

	const tableHTML = '<table>\
		<thead>\
			<tr>\
				<th>Name</th>\
				<th>Icon</th>\
			</tr>\
		</thead>\
		<tbody>\
			' + tableRows.join('') + '\
		</tbody>\
	</table>';

	document.write(tableHTML);
};

marvelHeroes.heroesRender('marvel');
dcHeroes.heroesRender('dc');