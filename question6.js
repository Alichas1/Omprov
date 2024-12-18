// 6. Todos (5p)

// Skapa en lista med TODOs som hämtas från: https://jsonplaceholder.typicode.com/todos
// Listan ska placeras i div-elementet med id todos på index.html

// Visa de första 10 TODOs i listan.
// För varje TODO ska följande visas:
// Titeln på TODO:n
// Om den är klar eller inte "completed" eller "not completed"
// Markera TODOs som är klara genom att visa dem med en grön textfärg.

getToDos();

const parent = document.querySelector("#todos");

async function getToDos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  const dataGetId = data.slice(0, 10);

  console.log(dataGetId);

  dataGetId.forEach((postdata) => {
    const getId = document.createElement("h2");
    const title = document.createElement("h1");
    const complete = document.createElement("h2");

    getId.textContent = postdata.id;
    title.textContent = postdata.title;
    complete.textContent = postdata.completed;

    if (postdata.completed === true) {
      title.style.backgroundColor = "#00FF00";
    }

    parent.appendChild(getId);
    parent.appendChild(title);
    parent.appendChild(complete);
  });
}

getToDos();
