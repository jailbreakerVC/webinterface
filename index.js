//maryam -e web api 127.0.0.1 1313
var count = 0;

const form = document.querySelector("#searchform");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("submitted");
  const queryTerm = form.elements.search.value;
  const res = await axios.get(`http://localhost:3000/api`);
  // const res = await req;
  console.log(res);

  const results = res.data.output.results;
  console.log(results);

  for (let index = 0; index < 10; index++) {
    const searchResult = results[index].t;
    console.log(searchResult);
    var ul = document.querySelector("#results");
    console.log(ul);
    var li = document.createElement("li");
    li.innerHTML = searchResult;
    ul.appendChild(li);
  }
});
