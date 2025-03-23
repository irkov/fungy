const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");

const currentFilter = {
  season: "all",
  edible: "all",
};

seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilter[filterType] = e.target.value;

  filterCards();
}

function filterCards() {
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const matchesSeason = currentFilter.season === season;
    const matchesEdible = currentFilter.edible === edible;

    if ((matchesEdible || currentFilter.edible === "all") && (matchesSeason || currentFilter.season === "all")) {
         card.hidden = false;
    } else {
        card.hidden = true;
    }
  });
}
