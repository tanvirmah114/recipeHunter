

const searchFood = () => {
  const searchField = document.getElementById('search-field');
  let searchText = searchField.value;

  console.log(searchText);
  searchField.value = '';
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals));

  console.log(data.meals);

}

const displayMeal = meals => {
  const searchResult = document.getElementById('search-result');

  // clear previous data
  searchResult.innerText = '';

  meals.forEach(meal => {
    console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML =
      `<div onclick="loadMealID(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
            `;

    searchResult.appendChild(div);
  });

}

const loadMealID = mealid => {
  console.log(mealid);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;

  fetch(url)
    .then(res => res.json())
    .then(data => displaymealDetails(data.meals[0]));
}

const displaymealDetails = meal => {
  console.log(meal);
  const foodinfo = document.getElementById('foodDetails');
  const div = document.createElement('div');

  div.innerHTML =
    `
    
      <div class="col-md-4">
       <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
  
    `;
  foodinfo.appendChild(div);

}