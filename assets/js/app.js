//------------------ define variable ------------------------//

let form = document.getElementById('form');
let text  = form.querySelector('#tweet');
let putDataDiv = form.parentElement.nextElementSibling;
let tBody = document.querySelector('#tableBody');
let localStorageitam = getFromLocalStorage();
//--------------------event listener -------------------------//
eventLitener();

function eventLitener()
{
      form.addEventListener("submit",setData);
      document.addEventListener('DOMContentLoaded', putListToLocalStorage);
}

//---------------------- function ----------------------------------//



function setData(event)
{
     if(text.value != "")
     {
        setLocalStorage(text.value);
        createTableRow(text.value);
        text.value = "";
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
