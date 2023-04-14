//------------------ define variable ------------------------//
let form = document.getElementById('form');
let input = form.querySelector('#tweet');
let putDataDiv = form.parentElement.nextElementSibling;
let tBody = document.querySelector('#tableBody');
let localStorageitam = getFromLocalStorage();
//--------------------event listener -------------------------//
eventLitener();

function eventLitener()
{
      form.addEventListener("submit",setData);
      input.addEventListener('keyup',headenFunction);
      document.addEventListener('DOMContentLoaded', putListToLocalStorage);
}

//---------------------- function ----------------------------------//


function headenFunction(event)
{
     let  actualvalue  = event.target.value; 
     let result = actualvalue.replace(/\s+/g,'_')

     document.querySelector('#FormText').innerText = result;
}



function setData(event)
{


     let text =  event.target.querySelector('#tweet').value;
      if (text != "")
      {

          text = text.replace(/\s+/g,'_')

           setLocalStorage(text);
           createTableRow(text);
           event.target.querySelector('#tweet').value = "";
           document.querySelector('#FormText').innerText = "";
     }
}

function createTableRow(val)
{
    
    let tr = document.createElement('tr');
    tr.innerHTML= 
    `
       <td scope="row">${val}</td>
       <td><img src="assets/img/dete_icon.png" alt="no image" height="20px" onclick="removeElement(this)"></td>
     `;

     tBody.appendChild(tr);
 
}

//---------------------remove item ------------------------//
function removeElement(event)
{
     let data = event.parentElement.parentElement.firstElementChild.innerText;
     removeFromLocal(data);
      event.parentElement.parentElement.remove()

}

function removeFromLocal(data)
{
     localStorageitam.forEach((value,index)=>{

          if(value == data)
          {
               localStorageitam.splice(index , 1);
          }
          localStorage.clear();
          localStorage.setItem('itam',JSON.stringify(localStorageitam));
     })
}



//----------------------localstorage -----------------------//
function putListToLocalStorage()
{
     localStorageitam.forEach((val) => {
          createTableRow(val);
     });
}

function getFromLocalStorage()
{
     let   itam = localStorage.getItem('itam');
     if(!itam)
     {
           return [];
     }else 
     {
          return JSON.parse(itam);
     }
}
function setLocalStorage(itam)
{
     localStorageitam.push(itam);
     localStorage.setItem('itam',JSON.stringify(localStorageitam));
}
