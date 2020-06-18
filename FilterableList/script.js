//get input element from dom
let filterInput = document.getElementById('filterInput');

//listening for event
filterInput.addEventListener('keyup',filterNames);

function filterNames() {
    //Getting input value
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    

    //get Names ul
    let ul = document.getElementById('names');

    //get items(lis) from ul
    let li = ul.querySelectorAll('li.collection-item');
    
    // loop through collection items lis

    for(let i =0;i<li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];

        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1 ){

            li[i].style.display = '';
            
        }else {

            li[i].style.display = 'none';
        }
    }
}