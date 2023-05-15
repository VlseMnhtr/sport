const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const sportItem = recentNews._recentNewsList.find(item => item.id === id);
const name = sportItem ? sportItem.name : "Unknown";

const sportName = document.getElementById("sport-name");
sportName.textContent = name;
