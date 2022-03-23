const daily = document.getElementById("daily-btn")
const weekly = document.getElementById("weekly-btn")
const monthly = document.getElementById("monthly-btn")

const hours = document.getElementsByClassName("hrs")
const lastTime = document.getElementsByClassName("previous")

    dailyData = () =>{
        fetch("data.json")
        .then(res => {
            return res.json()
        })
        .then(loadedData => {
           Array.from(hours).forEach((element, index) => {
               hours[index].textContent =  `${loadedData[index].timeframes.daily.current}hrs`
               lastTime[index].textContent = `Last Week - ${loadedData[index].timeframes.daily.previous}hrs`
           });
        })
        .catch(err => {
            console.error(err)
        })
    }

    weeklyData = () =>{
        fetch("data.json")
        .then(res => {
            return res.json()
        })
        .then(loadedData => {
            Array.from(hours).forEach((element, index) => {
                hours[index].textContent =  `${loadedData[index].timeframes.weekly.current}hrs`
                lastTime[index].textContent = `Last Week - ${loadedData[index].timeframes.weekly.previous}hrs`
            });
        })
        .catch(err => {
            console.error(err)
        })
    }

    monthlyData = () =>{
        fetch("data.json")
        .then(res => {
            return res.json()
        })
        .then(loadedData => {
            Array.from(hours).forEach((element, index) => {
                hours[index].textContent =  `${loadedData[index].timeframes.monthly.current}hrs`
                lastTime[index].textContent = `Last Week - ${loadedData[index].timeframes.monthly.previous}hrs`
            });
        })
        .catch(err => {
            console.error(err)
        })
    }


    daily.addEventListener('click', ()=> {
        daily.classList.remove('text-muted')
        weekly.classList.add('text-muted')
        monthly.classList.add('text-muted')
        dailyData()
    })

    weekly.addEventListener('click', () => {
        weekly.classList.remove('text-muted')
        monthly.classList.add('text-muted')
        daily.classList.add('text-muted')
        weeklyData()
    })

    monthly.addEventListener('click', () => {
        monthly.classList.remove('text-muted')
        weekly.classList.add('text-muted')
        daily.classList.add('text-muted')
        monthlyData()
    })