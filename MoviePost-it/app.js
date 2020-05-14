//Movie Class for movies
class Movie {
    constructor(name,director,year){
        this.name = name;
        this.director = director;
        this.year = year;
    }
}

//Ui class will handle user interactions
class UI {
    static displayMovies(){
        const movies = Store.getMovies();

        movies.forEach((movie)=>UI.addMovieToList(movie));
    }

    static addMovieToList(movie){
        const list = document.querySelector('#movie-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${movie.name}</td>
        <td>${movie.director}</td>
        <td>${movie.year}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteMovie(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields(){
        document.querySelector('#name').value=' ';
        document.querySelector('#director').value=' ';
        document.querySelector('#year').value=' ';
    }

    static showAlert(message,className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#movie-form');
        container.insertBefore(div,form);
        //disappear
        setTimeout(()=> document.querySelector('.alert').remove(),2500);
    }
}

//Store class handles the local storage

class Store{
   static getMovies(){
        let movies;
        if(localStorage.getItem('movies')===null){
            movies=[];
        }else{
            movies = JSON.parse(localStorage.getItem('movies'));
        }
        return movies;
    }

   static addMovies(movie){
        const movies = Store.getMovies();

        movies.push(movie);

        localStorage.setItem('movies',JSON.stringify(movies));
    }

   static removeMovies(name){
        const movies = Store.getMovies();

        movies.forEach((movie,index)=>{
            if(movie.name === name){
                movies.splice(index,1);
            }            
        });

        localStorage.setItem('movies',JSON.stringify(movies));
    }
}


//Event for displaying a list
document.addEventListener('DOMContentLoaded',UI.displayMovies);


//event for adding a movie
document.querySelector('#movie-form').addEventListener('submit',(e)=>{

    e.preventDefault();

    const name = document.querySelector('#name').value;
    const director = document.querySelector('#director').value;
    const year = document.querySelector('#year').value;

    //validation
    if(name===''||director===''||year===''){
        UI.showAlert('Please fill in all fields!','danger');
    }else{
        //instantiate a movie 
        const movie = new Movie(name,director,year);
        
        //add to Ui
        UI.addMovieToList(movie);

        //add movie to store
        Store.addMovies(movie);

        //msg
        UI.showAlert('Movie added!','success');

        //clear fields
        UI.clearFields();
    }
  
});

//event for removing a movie
document.querySelector('#movie-list').addEventListener('click',(e)=>{

    //Remove movie from UI
    UI.deleteMovie(e.target);

    //remove from local storage
    console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    Store.removeMovies(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    //msg notifier
    UI.showAlert('Movie removed!','success');
});