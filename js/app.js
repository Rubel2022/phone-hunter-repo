const searchPhone=()=>{
  document.getElementById('phone-area').innerHTML=""
  const phoneBoxInput=document.getElementById('input-box');
  const phoneBox=phoneBoxInput.value
  phoneBoxInput.value=""
  const url=` https://openapi.programming-hero.com/api/phones?search=${phoneBox}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayPhoneItems(data.data.slice(0,20)))
}
const displayPhoneItems=(phones)=>{
  // console.log(phones)
  if(phones.length===0){
    document.getElementById("error").style.display="block"
    
    
  }
    
      else{
        const parentPhoneArea=document.getElementById('phone-area')
        for(const phone of phones){
          // console.log(phone)
            const div=document.createElement("div")
            document.getElementById("error").style.display="none"
            div.classList.add('col')
            div.innerHTML=`
            <div class="card h-100 w-75 text-center mx-auto shadow">
                <img  src="${phone.image}" class="card-img-top p-4" alt="...">
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
  console.log(deatails.releaseDate)
const deatailsArea=document.getElementById('phone-deatails')
const div=document.createElement('div')
div.classList.add('col')
div.innerHTML=`
<div class="phone-details">
<img src="${deatails.image}" class="card-img-top p-4 w-50 img-style shadow" alt="...">
<h4 class="card-title text-primary text-center">${deatails.brand} ${deatails.name}</h4>
<table class="table table-bordered">
<tbody>
<tr>
  <th scope="row">Release</th>
  <td>${(deatails.releaseDate !=="") ? deatails.releaseDate:('no-released')}</td>
</tr>
<tr>
  <th scope="row">Storage</th>
  <td>${deatails.mainFeatures.storage}</td>
</tr>
<tr>
  <th scope="row">Memory</th>
  <td >${deatails.mainFeatures.memory}</td>
</tr>
<tr>
  <th scope="row">Display-size</th>
  <td >${deatails.mainFeatures.displaySize}</td>
</tr>
<tr>
  <th scope="row">ChipSet</th>
  <td >${deatails.mainFeatures.chipSet}</td>
</tr>
<tr>
  <th scope="row">Sensors</th>
  <td >${deatails.mainFeatures.sensors}</td>
</tr>
</tbody>
</table>
</div>

`
deatailsArea.appendChild(div)




}









// // {/* <div class="card h-100 mx-auto ">
// <img   src="${deatails.image}" class="card-img-top p-4 w-50 mx-auto shadow" alt="...">
// <div class="card-body  p-4">
//   <h4 class="card-title text-primary text-center">${deatails.name}</h4>
//   <h5 class="card-text text-center text-danger">${deatails.brand}</h5>
//   <h6 class="text-center"> ${(deatails.releaseDate !=="") ? deatails.releaseDate:('no-released')}</h6>
//   <h5>Storage:<small class="text-center">${deatails.mainFeatures.storage}</small></h5>
//   <h5>Memory:<small>${deatails.mainFeatures.memory}</small></h5>
//   <h5>Display-Size:<span>${deatails.mainFeatures.displaySize}</span></h5>
//   <h5>${deatails.mainFeatures.chipSet}</h5>
//   <h5>Sensore:<small>${deatails.mainFeatures.sensors}</small></h5> 
// </div>
// </div> */}