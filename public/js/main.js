const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp_real");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
const dayElement = document.getElementById("day");
const todayData = document.getElementById("today_data");
const months = ["Jan","Feb","March","April","May","June","July","August","Sep","Oct","Nov","Dec"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const now = new Date();
const day = days[now.getDay()];
const todayDate = now.getDate();
const month = months[now.getMonth()]; 
dayElement.innerText=day;
todayData.innerText = `${todayDate} ${month}`;
const getInfo = async(e)=>{
    e.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText=`Please Enter  city name and search`;
        datahide.classList.add("data_hide");
    }else{
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=035ed877b2814511e22e902f04553fdb`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempStatus = arrData[0].weather[0].main;
            
            if(tempStatus=="Sunny"){
                temp_status.innerHTML=`<h2><i class="fas fa-sun" style="color: #eccc68;"></i> ${tempStatus}</h2>`;
            }else if(tempStatus=="Clouds"){
                temp_status.innerHTML=`<h2><i class="fas fa-cloud" style="color: #f1f2f6;"></i> ${tempStatus}</h2>`;
            }
            else if(tempStatus=="Rainy"){
                temp_status.innerHTML=`<h2><i class="fas fa-cloud-rain" style="color: #a4b0be;"></i> ${tempStatus}</h2>`;
            }
            else{
                temp_status.innerHTML=`<h2><i class="fas fa-sun" style="color: #44c3de;"></i> ${tempStatus}</h2>`;
            }
            datahide.classList.remove("data_hide");
        } catch (error) {
            city_name.innerText=`Please Enter Valid city name and search`;
            datahide.classList.add("data_hide");
        }
    }
};
submitBtn.addEventListener('click',getInfo);
