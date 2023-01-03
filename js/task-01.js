const categoriesEl = document.getElementById("categories");
console.log('Number of categories:', categoriesEl.children.length);

const itemEl = categoriesEl.querySelectorAll('.item')
for (const item of itemEl) {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
}



