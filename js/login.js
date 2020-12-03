var db = firebase.firestore();


$(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var displayName = user.displayName;
            var email = user.email;
            var photoURL = user.photoURL;
            console.log("test");
            window.location.href = "../calltech.html";

        } else {

        }



        $('#signinGoogle').click(function() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);

            firebase.auth().getRedirectResult().then(function(result) {
                if (result.credential) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // ...
                }
                // The signed-in user info.
                var user = result.user;
                console.log(user);
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                $('#errormessage').text(errorMessage);
            });


        });



        $('#signinemail').click(function() {
            var email = $('#email').val();
            var password = $('#password').val();
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                $('#errormessage').text(errorMessage);
            });
            firebase.auth().onAuthStateChanged(function(user) {

                if (user) {
                    window.location.href = "calltech.html";
                }
            });
        })

    })





});