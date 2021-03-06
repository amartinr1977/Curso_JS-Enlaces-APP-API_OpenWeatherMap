// 1) Variables
ciudad = $("#ciudad");
consultar = $("#consultar");
contenido = $("#contenido");
const weatherIcons = {
  "200": {
    label: "thunderstorm with light rain",
    icon: "storm-showers"
  },

  "201": {
    label: "thunderstorm with rain",
    icon: "storm-showers"
  },

  "202": {
    label: "thunderstorm with heavy rain",
    icon: "storm-showers"
  },

  "210": {
    label: "light thunderstorm",
    icon: "storm-showers"
  },

  "211": {
    label: "thunderstorm",
    icon: "thunderstorm"
  },

  "212": {
    label: "heavy thunderstorm",
    icon: "thunderstorm"
  },

  "221": {
    label: "ragged thunderstorm",
    icon: "thunderstorm"
  },

  "230": {
    label: "thunderstorm with light drizzle",
    icon: "storm-showers"
  },

  "231": {
    label: "thunderstorm with drizzle",
    icon: "storm-showers"
  },

  "232": {
    label: "thunderstorm with heavy drizzle",
    icon: "storm-showers"
  },

  "300": {
    label: "light intensity drizzle",
    icon: "sprinkle"
  },

  "301": {
    label: "drizzle",
    icon: "sprinkle"
  },

  "302": {
    label: "heavy intensity drizzle",
    icon: "sprinkle"
  },

  "310": {
    label: "light intensity drizzle rain",
    icon: "sprinkle"
  },

  "311": {
    label: "drizzle rain",
    icon: "sprinkle"
  },

  "312": {
    label: "heavy intensity drizzle rain",
    icon: "sprinkle"
  },

  "313": {
    label: "shower rain and drizzle",
    icon: "sprinkle"
  },

  "314": {
    label: "heavy shower rain and drizzle",
    icon: "sprinkle"
  },

  "321": {
    label: "shower drizzle",
    icon: "sprinkle"
  },

  "500": {
    label: "light rain",
    icon: "rain"
  },

  "501": {
    label: "moderate rain",
    icon: "rain"
  },

  "502": {
    label: "heavy intensity rain",
    icon: "rain"
  },

  "503": {
    label: "very heavy rain",
    icon: "rain"
  },

  "504": {
    label: "extreme rain",
    icon: "rain"
  },

  "511": {
    label: "freezing rain",
    icon: "rain-mix"
  },

  "520": {
    label: "light intensity shower rain",
    icon: "showers"
  },

  "521": {
    label: "shower rain",
    icon: "showers"
  },

  "522": {
    label: "heavy intensity shower rain",
    icon: "showers"
  },

  "531": {
    label: "ragged shower rain",
    icon: "showers"
  },

  "600": {
    label: "light snow",
    icon: "snow"
  },

  "601": {
    label: "snow",
    icon: "snow"
  },

  "602": {
    label: "heavy snow",
    icon: "snow"
  },

  "611": {
    label: "sleet",
    icon: "sleet"
  },

  "612": {
    label: "shower sleet",
    icon: "sleet"
  },

  "615": {
    label: "light rain and snow",
    icon: "rain-mix"
  },

  "616": {
    label: "rain and snow",
    icon: "rain-mix"
  },

  "620": {
    label: "light shower snow",
    icon: "rain-mix"
  },

  "621": {
    label: "shower snow",
    icon: "rain-mix"
  },

  "622": {
    label: "heavy shower snow",
    icon: "rain-mix"
  },

  "701": {
    label: "mist",
    icon: "sprinkle"
  },

  "711": {
    label: "smoke",
    icon: "smoke"
  },

  "721": {
    label: "haze",
    icon: "day-haze"
  },

  "731": {
    label: "sand, dust whirls",
    icon: "cloudy-gusts"
  },

  "741": {
    label: "fog",
    icon: "fog"
  },

  "751": {
    label: "sand",
    icon: "cloudy-gusts"
  },

  "761": {
    label: "dust",
    icon: "dust"
  },

  "762": {
    label: "volcanic ash",
    icon: "smog"
  },

  "771": {
    label: "squalls",
    icon: "day-windy"
  },

  "781": {
    label: "tornado",
    icon: "tornado"
  },

  "800": {
    label: "clear sky",
    icon: "sunny"
  },

  "801": {
    label: "few clouds",
    icon: "cloudy"
  },

  "802": {
    label: "scattered clouds",
    icon: "cloudy"
  },

  "803": {
    label: "broken clouds",
    icon: "cloudy"
  },

  "804": {
    label: "overcast clouds",
    icon: "cloudy"
  },

  "900": {
    label: "tornado",
    icon: "tornado"
  },

  "901": {
    label: "tropical storm",
    icon: "hurricane"
  },

  "902": {
    label: "hurricane",
    icon: "hurricane"
  },

  "903": {
    label: "cold",
    icon: "snowflake-cold"
  },

  "904": {
    label: "hot",
    icon: "hot"
  },

  "905": {
    label: "windy",
    icon: "windy"
  },

  "906": {
    label: "hail",
    icon: "hail"
  },

  "951": {
    label: "calm",
    icon: "sunny"
  },

  "952": {
    label: "light breeze",
    icon: "cloudy-gusts"
  },

  "953": {
    label: "gentle breeze",
    icon: "cloudy-gusts"
  },

  "954": {
    label: "moderate breeze",
    icon: "cloudy-gusts"
  },

  "955": {
    label: "fresh breeze",
    icon: "cloudy-gusts"
  },

  "956": {
    label: "strong breeze",
    icon: "cloudy-gusts"
  },

  "957": {
    label: "high wind, near gale",
    icon: "cloudy-gusts"
  },

  "958": {
    label: "gale",
    icon: "cloudy-gusts"
  },

  "959": {
    label: "severe gale",
    icon: "cloudy-gusts"
  },

  "960": {
    label: "storm",
    icon: "thunderstorm"
  },

  "961": {
    label: "violent storm",
    icon: "thunderstorm"
  },

  "962": {
    label: "hurricane",
    icon: "cloudy-gusts"
  }
};

// 2) Funciones

const LlamarAPI = url => {
  $.ajax({
    url: url,
    //dataType: "json",
    success: function(response) {
      console.log(response);
      let micontenido = "";
      let lugar = response.name;
      let pais = response.sys.country;
      let temperatura = response.main.temp;
      let descripcion = response.weather[0].description;
      let rutaicon = `http://openweathermap.org/img/w/${
        response.weather[0].icon
      }.png`;
      micontenido =
        /*html*/
        `
        <figure class="figure">
          <img src="${rutaicon}" width="200px" class="figure-img img-fluid rounded" alt="${lugar}">
            <figcaption class="figure-caption text-center">
            <b>${lugar}</b> (${pais}) <span class="temperatura rounded">${temperatura}</span>
            <br>
            [<i> ${descripcion} </i>]
            </figcaption>
        </figure>
      `;
      //contenido.html(micontenido);
      document.getElementById("contenido").innerHTML = micontenido;
      ciudad.val("");
    },
    error: function() {
      let micontenido =
        /*html*/
        `
      <div class="bg-danger p-5 rounded">
        Ha habido un error en la solicitud a la API.
        <br>
        Tal vez la localidad <b>${ciudad.val()}</b> no exista ...
      </div>
      `;
      document.getElementById("contenido").innerHTML = micontenido;
      ciudad.val("");
    }
  });
};

const PrepararURL = () => {
  let key = "e0f4cce14db65beddcff912b303641c8";
  let url = "https://api.openweathermap.org/data/2.5/weather?";
  url += `q=${ciudad.val()},es`;
  url += `&appid=${key}`;
  url += `&units=metric`;
  url += `&lang=es`;
  LlamarAPI(url);
};

const DetectarTecla = e => {
  // console.log(e.keyCode);
  if (e.keyCode === 13) PrepararURL();
};

// 3) Eventos
consultar.on("click", PrepararURL);
ciudad.on("keyup", DetectarTecla);
