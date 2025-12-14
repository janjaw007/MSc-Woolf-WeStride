const api_url = "https://api.jikan.moe/v4/anime";

const formEl = document.getElementById("searchForm");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const query = formEl.elements.query.value;
  renderAnimeCard(query);
});

const getAnimeName = async (search) => {
  const limit = 10;
  try {
    const res = await axios.get(api_url + `?q=${search}&limit=${limit}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

const renderAnimeCard = async (query) => {
  const containerEl = document.getElementById("anime-render");
  containerEl.innerHTML = "";
  try {
    const data = await getAnimeName(query);
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      const background = data[i].background
        ? data[i].background.slice(0, 100) + "..."
        : "No description available";
      const cardEl = `
      <div class="col-3">
          <div class="card h-100" >
            <img
              src="${data[i].images.jpg.large_image_url}"
              class="card-img-top"
              alt="${data[i].title}-img"
              style="height:300px; object-fit:cover;"
            />
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title text-truncate">${data[i].title}</h5>
              <p class="card-text small text-muted">${background}</p>
              <a href="${data[i].url}" class="btn btn-primary">Go to MyAnimeList.net</a>
            </div>
          </div>
        </div>`;
      containerEl.insertAdjacentHTML("beforeend", cardEl);
    }
  } catch (error) {
    containerEl.append("<h1>Error load data</h1>");
  }
};
