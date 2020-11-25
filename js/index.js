var db = firebase.firestore();

$(function () {
    document.addEventListener('init', function (event) {
        var page = event.target;
        if (page.id === 'page1') {
            getmovie();
            getmovie2();
            getmovie3();
        }
    });


    db.collection("popular").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<ons-carousel-item>
            <ons-card  id="${doc.data().id}">
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
                </ons-carousel-item>
        `;
            $('#popular').append(row);
        });
        $('ons-card').click(function () {
            const aa = $(this).attr('id')
            getmovieDetail(aa);
            console.log(aa);
            document.querySelector('#myNavigator').pushPage('views/contact.html');
        })
    });


    db.collection("near").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <ons-carousel-item>
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
        `;
            $('#near').append(row);
        });
        // $('.NewMovie img').click(function() {
        //     const aa = $(this).attr('id')
        //     getmovieDetail(aa)
        //     document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
        // })
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

function getmovie() {

    var continueCarousel = document.createElement('ons-carousel');
    continueCarousel.setAttribute("swipeable", "");
    continueCarousel.setAttribute("auto-scroll", "");
    continueCarousel.setAttribute("overscrollable", "");
    continueCarousel.setAttribute("item-width", "150px");
    continueCarousel.setAttribute("id", "CarouselMovie");
    $('#continue').append(continueCarousel);

    db.collection("continue").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" id="continue">
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie').append(row);
        });
        $('#continue img').click(function () {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
        })


    });
}

function getmovie2() {

    var recommendCarousel = document.createElement('ons-carousel');
    recommendCarousel.setAttribute("swipeable", "");
    recommendCarousel.setAttribute("auto-scroll", "");
    recommendCarousel.setAttribute("overscrollable", "");
    recommendCarousel.setAttribute("item-width", "150px");
    recommendCarousel.setAttribute("id", "CarouselMovie2");
    $('#recommend').append(recommendCarousel);



    db.collection("recommend").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" id="recommend" >
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie2').append(row);
        });
        $('#recommend img').click(function () {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
        })
    });
}

function getmovie3() {

    var trendsCarousel = document.createElement('ons-carousel');
    trendsCarousel.setAttribute("swipeable", "");
    trendsCarousel.setAttribute("auto-scroll", "");
    trendsCarousel.setAttribute("overscrollable", "");
    trendsCarousel.setAttribute("item-width", "150px");
    trendsCarousel.setAttribute("id", "CarouselMovie3");
    $('#trends').append(trendsCarousel);



    db.collection("trends").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" id="trends">
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie3').append(row);
        });
        $('#trends img').click(function () {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
        })
    });
}

function getmovieDetail(Target) {
    db.collection("technician").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
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


            }
            else {
                $('#goContact').click(function () {
                    db.collection("user").add({
                    
                        money: 50000,
                        })
                    
                    document.querySelector('#myNavigator').pushPage('views/createdeal.html');


                    // db.collection("user").update({
                    //     money: 1002,
                    // })
                    //     .then(function (docRef) {
                    //         console.log("Document written with ID: ", docRef.id);
                    //     })
                    //     .catch(function (error) {
                    //         console.error("Error adding document: ", error);
                    //     });
                
                
                })
            }
        });
    });



}



var createAlertDialog = function () {
    var dialog = document.getElementById('my-alert-dialog');

    if (dialog) {
        dialog.show();
    } else {
        ons.createElement('alert-dialog.html', { append: true })
            .then(function (dialog) {
                dialog.show();
            });
    }
};

var hideAlertDialog = function() {
    document.getElementById('my-alert-dialog').hide();

};
var notify = function() {
    ons.notification.alert('ทำรายการสำเร็จ');
    document.querySelector('#myNavigator').popPage();
};
// addWork.prototpe.addToHistory = function(workId){

//     const currUserId = firebase.auth().currentUser.id;
//     const userDoc = firebase.firestore().collection('users').doc(currUserId);

//     userDoc.update[{
//         favorites:firebase.firestore.FieldValue.arrayUnion
//     }]

// }

