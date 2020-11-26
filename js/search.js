var db = firebase.firestore();
$(function() {
    db.collection("technician").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `
            <ons-carousel-item>
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
            $('#listMovie').append(row);
        });
        $("#listMovie ons-card").click(function() {
            const aa = $(this).attr('id')
            getTechDetail2(aa)
            document.querySelector('#myNavigator_search').pushPage('views/contact.html');

        })
    });
    document.addEventListener('init', function(event) {
        var page = event.target;
        if (page.id === 'search') {
            $("ons-carousel-item .button").click(function() {
                const category = $(this).attr('id')
                getmovieCategory(category)
            })
        }
    });
});



function Src() {
    const result = document.getElementById('Srcname').value;
    $('#listMovie').empty();
    db.collection("technician").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const titleMovie = doc.data().title;
            if (titleMovie.indexOf(result) != -1) {
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
                $('#listMovie').append(row);
            }
        });
        $("#listMovie ons-card").click(function() {
            const aa = $(this).attr('id')
            getTechDetail2(aa)
            document.querySelector('#myNavigator_search').pushPage('views/contact.html');


        })
    });
}

function getmovieCategory(Type) {
    $('#listMovie').empty();
    db.collection("technician").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const typeMovie = doc.data().type;
            if (typeMovie === Type) {
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
                $('#listMovie').append(row);
            }
        });
        $("#listMovie ons-card").click(function() {
            const aa = $(this).attr('id')
            getTechDetail2(aa)
            document.querySelector('#myNavigator_search').pushPage('views/contact.html');
        })
    });
}


function getTechDetail2(Target) {
    db.collection("technician").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (doc.data().id == Target) {
                const result =
                    `<img src="${doc.data().pic}" alt="Onsen UI" style="width: 100%" class="picT">
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

            } else {
                $('#goContact').click(function() {

                    document.querySelector('#myNavigator_search').pushPage('views/createdeal.html');
                    doc.data().id = "";


                })
            }
        });
    });



}