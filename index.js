
function product(){
   
   const style = document.createElement("style");
   style.innerHTML =
   ` body{
        background-color:black;
   }
   `
//    " body{ background-color:black;}"
   document.head.appendChild(style)
}
// function product(){

//     // const toggleHight = document.getElementById("text");
//     // toggleHight.classList.toggle("hightLight")
//     const displayProduct = `
//                     <div class=" ">
//                     <ul>
//                         <li> AgriBusiness </li>
//                         <li> AgriLoans </li>
//                         <li> Service </li>
//                         <li> Service </li>
//                     </ul>
                   
                    
//                     </div>
               
//                 `;
                
                
//                 document.getElementById("displayProduct").innerHTML = displayProduct;
//                 document.getElementById("displayProduct").style = "border: solid 2px none;"
//                 document.getElementById("displayProduct").style = "box-shadow: 2px 2px 2px 3px silver;"

// }

// function product(){
//     const displayProduct = document.getElementById("displayProduct");
//     displayProduct.style.backgroundColor = "red"
//     displayProduct.style.border ="20px solid red"
//     displayProduct.style.height ="200px"
//     displayProduct.style.width ="120px"

//     displayProduct.innerHTML =`
//                 <option value ="Loan">Loan</li>
//                 <option value ="Loan">Loan</li>
//                 <option value ="Loan">Loan</li>
//     `
// }

document.getElementById("button").addEventListener("click", ()=>{
   let firstName = document.getElementById("firstName").value;
   let middleName = document.getElementById("middleName").value;
   let lastName = document.getElementById("lastName").value;
   let phoneNumber = document.getElementById("phoneNumber").value;
   let addressDetails = document.getElementById("addressDetails").value;
   let dateOfBirth = document.getElementById("dateOfBirth").value;
   let  emailAddress= document.getElementById("emailAddress").value;
   
   let objUser ={
      firstName,
      middleName,
      lastName,
      phoneNumber,
      addressDetails,
      dateOfBirth,
      emailAddress
   }
})