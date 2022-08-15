const item = document.querySelectorAll('.item');
console.log(`Number of categories: ${item.length}`);

for(const el of item ){
console.log(`Category: ${el.querySelector('h2').textContent}`)
console.log(`Elements: ${el.querySelectorAll('li').length}`)
}