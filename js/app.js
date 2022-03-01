const searchPhone=()=>{
  document.getElementById('phone-area').innerHTML=""
  const phoneBoxInput=document.getElementById('input-box');
  const phoneBox=phoneBoxInput.value
  phoneBoxInput.value=""
  const url=` https://openapi.programming-hero.com/api/phones?search=${phoneBox}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayPhoneItems(data.data))
}
const displayPhoneItems=(phones)=>{
  // console.log(phones)
  const parentPhoneArea=document.getElementById('phone-area')
  for(const phone of phones){
    console.log(phone)
      const div=document.createElement("div")
      div.classList.add('col')
      div.innerHTML=`
      <div class="card h-100 w-75 text-center mx-auto">
          <img  src="${phone.image}" class="card-img-top p-3 " alt="...">
          <div class="card-body mx-auto">
            <h4 class="card-title">${phone.phone_name}</h4>
            <h5 class="card-text">${phone.brand}</h5>
            <button onclick="phoneDeatails('${phone.slug}')" class="btn btn-primary mx-auto">Deatails</button>
          </div>
        </div>
      
      `
      parentPhoneArea.appendChild(div)
    }
   
  }

const phoneDeatails=(deatails)=>{
  document.getElementById('phone-deatails').innerHTML=""
  const url=` https://openapi.programming-hero.com/api/phone/${deatails}`
  // console.log(url)
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayPhoneDeatails(data.data))
}
const displayPhoneDeatails=(deatails)=>{
  console.log(deatails)
const deatailsArea=document.getElementById('phone-deatails')
const div=document.createElement('div')
div.classList.add('col')
div.innerHTML=`
<div class="card h-100 w-75 text-center mx-auto">
<img  src="${deatails.image}" class="card-img-top p-5 " alt="...">
<div class="card-body mx-auto p-4">
  <h4 class="card-title text-primary">${deatails.name}</h4>
  <h5 class="card-text">${deatails.brand}</h5>
  <p> ${deatails.releaseDate}</p>
  <h6>${deatails.mainFeatures.storage}</h6>
  <h6>${deatails.mainFeatures.memory}</h6>
  <h6>${deatails.mainFeatures.displaySize}</h6>
  <h6>${deatails.mainFeatures.chipSet}</h6>
  <button onclick="sensorbtn('${deatails.mainFeatures.sensors}')">Sensor</button>
    
  
  
</div>
</div>
`
deatailsArea.appendChild(div)

}

const sensorbtn=(sensors)=>{
  console.log(sensors)
  const phoneSensore=document.getElementById('phone-sensore')
   phoneSensore.innerHTML=`
   <h2>${sensors}</h2>
  `
}