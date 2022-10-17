
document.querySelector("form").addEventListener("submit",fun1);
var arr =  JSON.parse(localStorage.getItem("user_arr")) || []
function fun1(e){
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var id = document.querySelector("#ID").value;
    var age = document.querySelector("#age").value;
    var priority = document.querySelector("#priority").value;
    var vaccine = document.querySelector("#vaccine").value;
    let designation = ""
    var ele = document.getElementsByName('designation');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                 designation = ele[i].value;
            }
        

            let obj = {
                id,
                name,
                age,
                designation,priority,vaccine
            }
            
            arr.push(obj)
            localStorage.setItem(`user_arr`,JSON.stringify(arr))
    
    //console.log(id,name,age,priority,vaccine,designation)
    
   
    
}