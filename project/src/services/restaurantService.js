import {API_URL , API_FETCH_URL} from "./config"


 function fetchRestaurants(currentPage,pageSize,nameSearch) {
    let url =
    API_FETCH_URL + currentPage;
    url += "&pagesize=" + pageSize;
    url += "&name=" + nameSearch;
    
    return fetch(url)

  }

  function addRestaurant(event) {
    // Récupération du formulaire. Pas besoin de document.querySelector
    // ou document.getElementById puisque c'est le formulaire qui a généré
    // l'événement
    let form = event.target;
    // Récupération des valeurs des champs du formulaire
    // en prévision d'un envoi multipart en ajax/fetch
    let donneesFormulaire = new FormData(form);

    //let id = form._id.value; // on peut aller chercher la valeur
    // d'un champs d'un formulaire
    // comme cela, si on connait le nom
    // du champ (valeur de son attribut name)


    return fetch(API_URL, {
      method: "POST",
      body: donneesFormulaire,
    })
      .then((responseJSON) => {
        responseJSON.json().then((res) => {
          console.log("done !");
          console.log(res.msg);
          //this.getRestaurantsFromServer(); // mise a jour de la vue
        });
      })
      .catch((err) => {
        console.log(err.msg);
      });


  }

  function deleteRestaurant(restaurant) {


    return fetch(API_URL + restaurant._id , {
      method: "DELETE",
    })
      .then((responseJSON) => {
        responseJSON.json().then((res) => {
          console.log("restaurant supprimé avec succes ! ");
          console.log(res.msg);
        });
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }

  export const restaurantService = {
    fetchRestaurants,
    addRestaurant,
    deleteRestaurant,

};