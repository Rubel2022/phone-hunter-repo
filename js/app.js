const searchPhone=()=>{
  const phoneBox=document.getElementById('input-box').value
  const url=`https://openapi.programming-hero.com/api/phones?search=${phoneBox}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayPhoneItems(data.data))
}
const displayPhoneItems=(phones)=>{
  console.log(phones)
  const parentPhoneArea=document.getElementById('phone-area')
  for(const phone of phones){
    // console.log(phone)
    const div=document.createElement("div")
    div.classList.add('col')
    div.innerHTML=`
    <div class="card h-100 w-75 text-center">
        <img  src="${phone.image}" class="card-img-top p-3 " alt="...">
        <div class="card-body mx-auto">
          <h4 class="card-title">${phone.phone_name}</h4>
          <h5 class="card-text">${phone.brand}</h5>
          <button onclick="phoneDeatails('${phone.}')" class="btn btn-primary mx-auto">Deatails</button>
        </div>
      </div>
    
    `
    parentPhoneArea.appendChild(div)
  }
}