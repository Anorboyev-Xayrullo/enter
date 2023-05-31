let inp = document.querySelector(".form-control")
let cityName = document.querySelector(".cityName")
let gradus = document.querySelector(".gradus")
let body = document.querySelector("body")
let btn = document.querySelector(".pora")

btn.addEventListener("click" ,  () => {
    let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=${key}`
            )
        .then(res => res.json())
        .then(data => {
            let name = data?.name
            let temp =Math.floor(data?.main?.temp)
            cityName.innerHTML = name
            gradus.innerHTML = temp + "°C"
            body.style.background = "url(https://source.unsplash.com/1600x900/?" + inp.value + ")"
        })
})