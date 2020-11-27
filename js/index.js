var db = firebase.firestore();

$(function() {
    document.addEventListener('init', function(event) {
        var page = event.target;
        // if (page.id === 'contact') {
        //     document.querySelector('#Navigator_contact').pushPage('createdeal.html');

        // }
    });



    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var email = user.email;
            var displayName = user.displayName;
            var img = `<img class="list-material__thumbnail" src="${user.photoURL}">`
            $("#userProfile").append(img)
            $("#userName").html(displayName)

        } else {
            window.location.href = "login.html";
        }
    });

    db.collection("popular").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div id="pop">
            <ons-carousel-item>
            <ons-card id="${doc.data().id}">
                <img src="${doc.data().pic}" alt="Onsen UI" class = "picCard" >

                <div class="row">
                    <div class="col-6">
                        <div class="headertitle">
                        ${doc.data().name} </div>
                    </div>

                    <div class="col-6 text-right">
                        <div class="headertitle">
                            <ons-icon icon="md-star" style="color: #FFAA00;">
                            </ons-icon> ${doc.data().rate}
                        </div>
                    </div>
                </div>
                <div class="row ml-1">
                    <div class="col-5">
                        <div class="detailLocation">${doc.data().location}</div>
                    </div>

                    <div class="col-7">
                        <div class="detailCategory text-right">${doc.data().type}</div>
                    </div>
                </div>        </ons-card>
                </ons-carousel-item></div>        
        `;
            $('#popular').append(row);
        });
        $('#pop ons-card').click(function() {
            const aa = $(this).attr('id')
            getTechDetail(aa);
            const bb = $(this).attr('id')
            getTechName(bb);
            document.querySelector('#Navigator_home').pushPage('views/contact.html');
        })
    });


    db.collection("near").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div id="near">        <ons-carousel-item>
            <ons-card>
                <img src="${doc.data().pic}" alt="Onsen UI" style="width: 100%">

                <div class="row">
                    <div class="col-6">
                        <div class="headertitle">
                        ${doc.data().name} </div>
                    </div>

                    <div class="col-6">
                        <div class="headertitle">
                            <ons-icon icon="md-star" style="color: #FFAA00;">
                            </ons-icon> ${doc.data().point}
                        </div>
                    </div>
                </div>
                <div class="row ml-1">
                    <div class="col-3">
                        <div class="detailLocation">${doc.data().location}</div>
                    </div>

                    <div class="col-9">
                        <div class="detailCategory">${doc.data().type}</div>
                    </div>
                </div>        </ons-card>
                </ons-carousel-item>
                </div>        
        `;
            $('#near').append(row);
        });

        $('#near ons-card').click(function() {
            const aa = $(this).attr('id')
            getTechDetail(aa);
            const bb = $(this).attr('id')
            getTechName(bb);
            console.log(bb);
            document.querySelector('#Navigator_home').pushPage('views/contact.html');
        })
    });

    // db.collection("technician").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         var row = `   <img src="${doc.data().pic}" alt="Onsen UI" style="width: 100%">

    //         <div class="row">
    //             <div class="col-6">
    //                 <div class="headertitle">
    //                 ${doc.data().name} </div>
    //             </div>

    //             <div class="col-6">
    //                 <div class="headertitle">
    //                     <ons-icon icon="md-star" style="color: #FFAA00;">
    //                     </ons-icon> ${doc.data().point}
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="row ml-1">
    //             <div class="col-3">
    //                 <div class="detailLocation">${doc.data().location}</div>
    //             </div>

    //             <div class="col-9">
    //                 <div class="detailCategory">${doc.data().type}</div>
    //             </div>
    //         </div>   `;
    //         $('#Tname2').append(row);
    //     });

    // });


})

// function getmovie() {

//     var continueCarousel = document.createElement('ons-carousel');
//     continueCarousel.setAttribute("swipeable", "");
//     continueCarousel.setAttribute("auto-scroll", "");
//     continueCarousel.setAttribute("overscrollable", "");
//     continueCarousel.setAttribute("item-width", "150px");
//     continueCarousel.setAttribute("id", "CarouselMovie");
//     $('#continue').append(continueCarousel);

//     db.collection("continue").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             var row = ` <div style="width:150px;" id="continue">
//                 <ons-carousel-item>
//                     <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
//                 </ons-carousel-item>
//             </div>`
//             $('#CarouselMovie').append(row);
//         });
//         $('#continue img').click(function() {
//             const aa = $(this).attr('id')
//             getmovieDetail(aa)
//             document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
//         })


//     });
// }

// function getmovie2() {

//     var recommendCarousel = document.createElement('ons-carousel');
//     recommendCarousel.setAttribute("swipeable", "");
//     recommendCarousel.setAttribute("auto-scroll", "");
//     recommendCarousel.setAttribute("overscrollable", "");
//     recommendCarousel.setAttribute("item-width", "150px");
//     recommendCarousel.setAttribute("id", "CarouselMovie2");
//     $('#recommend').append(recommendCarousel);



//     db.collection("recommend").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             var row = ` <div style="width:150px;" id="recommend" >
//                 <ons-carousel-item>
//                     <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
//                 </ons-carousel-item>
//             </div>`
//             $('#CarouselMovie2').append(row);
//         });
//         $('#recommend img').click(function() {
//             const aa = $(this).attr('id')
//             getmovieDetail(aa)
//             document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
//         })
//     });
// }

// function getmovie3() {

//     var trendsCarousel = document.createElement('ons-carousel');
//     trendsCarousel.setAttribute("swipeable", "");
//     trendsCarousel.setAttribute("auto-scroll", "");
//     trendsCarousel.setAttribute("overscrollable", "");
//     trendsCarousel.setAttribute("item-width", "150px");
//     trendsCarousel.setAttribute("id", "CarouselMovie3");
//     $('#trends').append(trendsCarousel);



//     db.collection("trends").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             var row = ` <div style="width:150px;" id="trends">
//                 <ons-carousel-item>
//                     <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
//                 </ons-carousel-item>
//             </div>`
//             $('#CarouselMovie3').append(row);
//         });
//         $('#trends img').click(function() {
//             const aa = $(this).attr('id')
//             getTechDetail(aa)
//             document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
//         })
//     });
// }

function getTechDetail(Target) {
    var nameTech = "";
    db.collection("technician").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (doc.data().id == Target) {
                const result =
                    `
                    <img src="${doc.data().pic}" alt="Onsen UI" style="width: 100%" class="picT">
                <div>
                <div class="detailName">
                ${doc.data().name} </div>
                </div>

                 <div class="row mt-2">
                <div class="col-4 pl-5 detailLocal">${doc.data().location}</div>
                <div class="col-5 detailCat">${doc.data().type}</div>


                <div class="col-3 text-right">
                    <div class="detailRate ">
                        <ons-icon icon="md-star" style="color: #FFAA00;">
                        </ons-icon>  ${doc.data().rate}
                    </div>
                </div>
                 </div> `

                $("#Tcontact").append(result)
                nameTech = doc.data().name;
            } else {}

            $('#goContact').click(function() {
                document.querySelector('#Navigator_home').pushPage('views/createdeal.html', { data: { title: nameTech } });
            })



        });



    });





}