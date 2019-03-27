// 1) Variables
ciudad = $("#ciudad");
consultar = $("#consultar");

// 2) Funciones

const LlamarAPI = url => {
  $.ajax({
    url: url,
    //dataType: "json",
    success: function(response) {
      console.log(response);
    }
  });
};

const PrepararURL = () => {
  let key = "e0f4cce14db65beddcff912b303641c8";
  let url = "https://api.openweathermap.org/data/2.5/weather?";
  url += `q=${ciudad.val()},es`;
  url += `&appid=${key}`;
  url += `&units=metric`;
  LlamarAPI(url);
};

// 3) Eventos
consultar.on("click", PrepararURL);
