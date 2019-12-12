// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCdLU83w5wc64rz6ioKveehOnr78v4twSg',
    authDomain: 'game-news-20498.firebaseapp.com',
    projectId: 'game-news-20498'
  });
  
  var db = firebase.firestore();

  function enviarDatos(){
      var nom=document.getElementById("nombre").value;
      var ema=document.getElementById("email").value;
      var com=document.getElementById("comentario").value;
      
      db.collection("Usuarios").add({
        nombre:nom,
        email: ema,
        comentario: com   
    })
    .then(function(docRef) {
        alert("Usuario Registrado");
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("No se pudo registrar :(");
    });
  }