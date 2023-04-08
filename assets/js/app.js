//------------------ define variable ------------------------//

let form = document.getElementById('form');
let text  = form.querySelector('#tweet');
let putDataDiv = form.parentElement.nextElementSibling;
let tBody = document.querySelector('#tableBody');

//--------------------event listener -------------------------//
eventLitener();

function eventLitener()
{
      form.addEventListener("submit",setData);
}

//---------------------- function ----------------------------------//

function setData(event)
{
     if(text.value != "")
     {
        createTableRow();
        text.value = "";
     }
}

function createTableRow()
{
    let tr = document.createElement('tr');
    tr.innerHTML= 
    `
       <td scope="row">${text.value}</td>
       <td><img src="assets/img/dete_icon.png" alt="no image" height="20px" onclick="removeElement(this)"></td>
     `;

     tBody.appendChild(tr);
 
}

//---------------------remove item ------------------------//
function removeElement(event)
{
     event.parentElement.parentElement.remove()

}
