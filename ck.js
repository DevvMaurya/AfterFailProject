const ids = [1,2,3,4,5];
const mem = [1,2,3,4,5];
var i =0;
var j =0;
var namedata = document.getElementById('name');
var emaildata = document.getElementById('email');
var op = document.getElementById(mem[0]);
function getdata()
{
    if(namedata.value != null && emaildata.value != null)
   { localStorage.setItem(ids[i],JSON.stringify(emaildata.value));
    i = i +1;
    namedata.value = null;
    emaildata.value = null;
   }
   else
   {
       alert("Somthing is not filled properly🔴🔴");
    }
}
function alertdo()
{
    if(j < 5){
     op = document.getElementById(mem[j]);
    // alert(JSON.parse(localStorage.getItem(ids[j]) ));
    op.innerHTML = localStorage.getItem(ids[j]);
    j = j+1;
    }
    else
    {
        alert("OUT oF DATA");
    }
}
