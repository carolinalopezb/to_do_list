var itemsArray = [];
let checked = true;
//------------------------------------------------Delete Items

function deleteItem(p){
  item = document.getElementById(p)
  itemsArray.splice(p, 1);
  item.remove();

}
 //------------------------------------------------add new item
 document.getElementById("add-item").addEventListener("click", function(){

    let newItem = {
        input: document.getElementById("item-to-add").value
    };

        itemsArray.push(newItem);
        document.getElementById("item-to-add").value = "";
        showItems(itemsArray);


});
//------------------------------------------------Done

function check(p){

    let i =  document.getElementById(p);
    let test = i.classList.contains('cross-out');

    if(test){

        i.classList.remove("cross-out");
    }else{

        i.classList.add("cross-out");

    }

}

//------------------------------------------------Show Items
 function showItems(array){
    let htmlContentToAppend = "";


        for (let i = 0; i < array.length; i++){

            let item = array[i];
    
                htmlContentToAppend +=  `    
                <li class="li" id="`+i+`">
                <p class="p">`+ item.input +`</p>
                <button id="liButton1" onClick="check(`+i+`)"><i class="fas fa-check"></i></button>
                <button id="liButton2" onClick="deleteItem(`+i+`)"><i class="fas fa-times"></i></button>
                 </li> 
          
                 `
                 document.getElementById("todos-list").innerHTML = htmlContentToAppend;   
    
        }
    }






