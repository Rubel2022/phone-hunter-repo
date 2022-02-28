const searchPhone=()=>{
  const phoneBox=document.getElementById('input-box').value
  const url=`https://openapi.programming-hero.com/api/phones?search=${phoneBox}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>console.log(data.data))
}
const displayPhoneItems=(phones)=>{
  console.log(phones)
}