///level 100////////
const getShowEpisode = async () => {
    const response = await axios.get("https://api.tvmaze.com/shows/82/episodes");
    datas = await response.data.map((element) => element);
    return response.data;
};
const container = document.querySelector(".container");
const pTag = document.querySelector("#pTag");
const search = document.querySelector(".search");
const Card = (data) => {
    data.forEach((episod) => {
        myCard(episod);
    });
};
getShowEpisode()
.then((data) => {
    optionElement(data);
    Card(data);
})
let datas;
const myCard = (episod) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const a = document.createElement("a");
    img.src = episod.image.medium;
    h2.append(episod.name);
    h4.append(`S0${episod.season}${episod.number < 10 ? "E0" + episod.number : "E" + episod.number}`);

    p.innerHTML = episod.summary;
    a.href = episod.url;
    div.append(img, h2 ,h4, p, a );
    container.append(div);}
  ///level 200///////
  //search-box
  search.addEventListener("input", (e) => {
    container.innerHTML = "";
    datas.forEach((ele) => {
      if (ele.name.toLowerCase().includes(e.target.value.toLowerCase()) || ele.summary.toLowerCase().includes(e.target.value.toLowerCase())) {
        myCard(ele)
      }
    });
  });
  ///level 300////// 
  const optionElement = (episodesList) => {
    const option = document.createElement("option");
    option.append(`All Episods`);
    select.append(option);
    episodesList.forEach((episod) => {
      const option = document.createElement("option");
      option.value = episod.name;
      option.append(`S0${episod.season}${episod.number < 10 ? "E0" + episod.number : "E" + episod.number}- ${episod.name}`);
      select.append(option);
    });
  };
  select.addEventListener("change", function (e) {
    if (e.target.value === "All Episods") {
      container.innerHTML = "";
      myCard(datas);
    } else {
      container.innerHTML = "";
      myCard(datas[e.target.selectedIndex - 1]);
    }
  });
  