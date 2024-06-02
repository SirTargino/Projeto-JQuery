function getWeather(){
    let city = $("#cidade").val();

    if (!city) {
        alert('Por favor, insira o nome da cidade.');
        return;
    }

    $.ajax({
        type: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2172d8be65e71595cd745c5887fbad10`,
        dataType: "jsonp",
        crossDomain: true,
        success: function(data) {
            var clima = `
                <p>Temperatura: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Descrição: ${data.weather[0].description}</p>
                <p>Pressão atmosférica: ${data.main.pressure} hPa</p>
                <p>Humedade: ${data.main.humidity}%</p>
            `;
            $('#clima').html(clima);
        },
        error: function(error) {
            console.error('Erro ao buscar dados do clima:', error);
        }
    });
}