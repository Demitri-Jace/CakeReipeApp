//firebase auth login and registration........................................................

   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDYlvu75niVok12sA2O0RAEMKXfi_QRds",
  authDomain: "cakerecipeapp-dd712.firebaseapp.com",
  projectId: "cakerecipeapp-dd712",
  storageBucket: "cakerecipeapp-dd712.appspot.com",
  messagingSenderId: "399450943114",
  appId: "1:399450943114:web:d8519d0d4fa50546a4c773",
  measurementId: "G-CSF1G6G342"
};
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();

        const auth = firebase.auth();
        const db = firebase.firestore();

        /* user registration */

function registerUser(){

    var name = document.getElementById("user_name");
    var surname = document.getElementById("user_surname");
    var email = document.getElementById("user_email");
    var password = document.getElementById("user_password");

    if (name.value !== "" && surname !== "" && email.value && password.value) {
        // call the navigator to move to the new page
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

        promise.catch(e => alert(e.message));

        ons.notification.alert("Account Created");

        db.collection("Users").add({
            UserName: name.value,
            UserSurname: surname.value,
            UserEmail: email.value,
            UserPassword: password.value,
        }).then(function(docRef){
            console.log("Document written with ID", docRef.id);
        }).catch(function(error){
            console.error("Error adding document", error);
        })

        const navigator = document.querySelector("#navigator");
        navigator.pushPage("homeBottomnav.html");
        
      } else {

        ons.notification.alert("Please Make Sure That All Fields have Valid Information");

      }

}

//end.........................................................................

//save and display recipe.............................................................



function save () {

    var customText = document.getElementById("custom_text");
    var title = document.getElementById("title");
    var ingredients = document.getElementById("ingredients");
    var make = document.getElementById("make");

    db.collection("Recipes").add({
 
        Title: title.value,
        ingredients: ingredients.value,
        Making: make.value,
    }).then(function(docRef){
        console.log("Document stored with ID", docRef.id);
    }).catch(function(error){
        console.error("Error adding document", error);
    });

    const recipeList = document.querySelector('#recipe_list');

    function renderRecipe (doc) {

        let div = document.createElement('div');
        let title = document.createElement('span');
        let ingredients = document.createElement('span');
        let making = document.createElement('span');

        div.setAttribute('data-id', doc.id);
        title.textContent = doc.data().Title;
        ingredients.textContent = doc.data().ingredients;
        making.textContent = doc.data().Making;

        div.appendChild(title);
        div.appendChild(ingredients);
        div.appendChild(making);

        recipeList.appendChild(div);

    }

    db.collection('Recipes').get().then((snapshot) => {

        snapshot.docs.forEach(doc => {
            console.log(doc.data())
        })

    })

    ons.notification.alert("Recipe Save")
    const navigator = document.querySelector("#navigator");
    navigator.resetToPage("homeBottomnav.html");

}

//end.........................................................................

//welcome button...............................................................

function login () {

    const navigator = document.querySelector("#navigator");
    navigator.resetToPage("logRegbottomnav.html");

};

//end...........................................................................

//detailed recipes..............................................................

function readMore () {

    const navigator = document.querySelector("#navigator");
    navigator.pushPage("details.html");

}

function readMore1 () {

    const navigator = document.querySelector("#navigator");
    navigator.pushPage("details1.html");

}

function readMore2 () {

    const navigator = document.querySelector("#navigator");
    navigator.pushPage("details2.html");

}




//login bottom navigation.......................................................

document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});

//end...........................................................................

//login authentication..........................................................

function home ()  {

    const user_email = document.querySelector("#log_email").value;
    const user_password = document.querySelector("#log_password").value;

      if (user_email !== "" && user_password !== "") {
        // call the navigator to move to the new page
        const navigator = document.querySelector("#navigator");
        navigator.resetToPage("homeBottomnav.html");
      } else {
        ons.notification.alert("Input Valid Credentials OR Create An Account If You Don't Have One");
      }

};

//font style.................................................

function myFunction(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("whole").style.fontStyle = listValue;
}

//end...............................

//font size.................................................

function my1Function(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("whole").style.fontSize = listValue;
}

//end...............................

//add recipes page...............................................................

function add () {

    const navigator = document.querySelector("#navigator");
    navigator.pushPage("recipes.html");

};

//end..............................................................................

//log out................................................................

function leave () {
    const navigator = document.querySelector("#navigator");
    navigator.pushPage("welcome.html");
};

//................................................................................

function addRecipe () {

    document.getElementById("recipeOne").style.display = "";
    ons.notification.alert("Recipe Added To Favorites");

}

function removeRecipe () {

    document.getElementById("recipeOne").style.display = "none";
    ons.notification.alert("Recipe Removed");

}

function addRecipe1 () {

    document.getElementById("recipeTwo").style.display = "";
    ons.notification.alert("Recipe Added To Favorites");

}

function removeRecipe1 () {

    document.getElementById("recipeTwo").style.display = "none";
    ons.notification.alert("Recipe Removed");

}

function addRecipe2 () {

    document.getElementById("recipeThree").style.display = "";
    ons.notification.alert("Recipe Added To Favorites");

}

function removeRecipe2 () {

    document.getElementById("recipeThree").style.display = "none";
    ons.notification.alert("Recipe Removed");

}

//calculator...................................................................................

/* in html */

//end.........................................................................................