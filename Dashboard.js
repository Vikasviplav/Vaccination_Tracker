
let arr = localStorage.getItem(`user_arr`) 
console.log(arr)
arr = JSON.parse(arr)

arr.forEach((e) => {
    let tag1 = document.createElement("td");
    let tag2 = document.createElement("td");
    let tag3 = document.createElement("td");
    let tag4 = document.createElement("td");
    let tag5 = document.createElement("td");
    let tag6 = document.createElement("td");
    let tag7 = document.createElement("td");
    let tag8 = document.createElement("td");
console.log(e)
    tag1.innerText = e.id
    tag2.innerText = e.name
    tag3.innerText = e.age
    tag4.innerText = e.designation
    tag5.innerText = e.priority
    tag6.innerText = e.vaccine
    tag7.innerText = "Vaccinate"
    tag8.innerText = "delete"
    let tr = document.createElement("tr")
    tag8.style.color = "red";
    tag8.style.cursor = "pointer";
    tag8.addEventListener("click" , fun2)
    tr.append(tag1,tag2,tag3,tag4,tag5,tag6,tag7,tag8)
    document.querySelector("tbody").append(tr);

});
    
function fun2(){
    this.parentElement.remove();
}