const articles = document.querySelectorAll(".news-block");
const filter = document.querySelector(".filter");

filter.addEventListener("change", () => {
    const selectedCategory = filter.value;

articles.forEach(article => {
    const articleCategory = article.dataset.category;

if (selectedCategory === 'all' || articleCategory === selectedCategory) {
      article.classList.remove('hidden');
    } else {
      article.classList.add('hidden');
    }
  });
});
