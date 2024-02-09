const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let searchString = "";

function search(str) {
	let results = [];
	for(let item of fruit){
		if(item.toLowerCase().includes(str))
		results.push(item);
	}
	return results;
}

function searchHandler(e) {
	while(suggestions.firstChild)
			suggestions.removeChild(suggestions.firstChild);
	if(e.code.includes('Key'))
		searchString += e.key.toLowerCase();
	else if(e.code.includes('Backspace'))
		searchString = searchString.slice(0, (searchString.length-1));
	showSuggestions(search(searchString));
	}

function showSuggestions(results) {
	for(let item of results){
		let addFruit = document.createElement("li");
		suggestions.appendChild(addFruit);
		addFruit.innerText = item;		
	}
}

function useSuggestion(e) {
	const replaceText = document.querySelector('.search-container');
	replaceText.innerHTML = '<input type="text" name="fruit" id="fruit" placeholder="' + e.target.innerText + '">';
	while(suggestions.firstChild)
			suggestions.removeChild(suggestions.firstChild);
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
