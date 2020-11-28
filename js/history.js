var db = firebase.firestore();

$(function () {

    db.collection("history").get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
            var row = `  <div id="hisID">
             <ons-card class="hisBorder"  id="${doc.data().id}">
            <div class="historyTopic">${doc.data().topic}</div>
            <div class="historyDetail">${doc.data().detail}</div>
            <div class="historyStatus">
                <ons-icon icon="fa-wrench" class="historyIcon"></ons-icon>
                ${doc.data().status}
            </div>
            <div class="historyTech"> ช่างผู้รับผิดชอบ : <span class="historyTechName">${doc.data().Tname}</span> </div>
        </ons-card>      
        </div>
        `;
            $('#showHistory').append(row);

        });

        $("#hisID ons-card").click(function () {

            const aa = $(this).attr('id')
            getHistory(aa)
            console.log(aa);

            document.querySelector('#Navigator_history').pushPage('views/showhistory.html');


        })

    });

})


function getHistory(Target) {
    var idHistory = "";
    db.collection("history").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            if (doc.data().id == Target) {
                const result =
                    `  <div id="hisID">
                <ons-card class="hisBorder"  id="${doc.data().id}">
               <div class="historyTopic">${doc.data().topic}</div>
               <div class="historyDetail">${doc.data().detail}</div>
               <div class="historyStatus">
                   <ons-icon icon="fa-wrench" class="historyIcon"></ons-icon>
                   ${doc.data().status}
               </div>
               <div class="historyTech"> ช่างผู้รับผิดชอบ : <span class="historyTechName">${doc.data().Tname}</span> </div>
           </ons-card>      
           </div>
           `;

                $("#showHis").append(result)
                idHistory = doc.id;
            } else { }


            $('#successHistory').click(function () {
                console.log(idHistory);
                document.querySelector('#Navigator_history').pushPage('views/success.html', { data: { title: idHistory } });
            })
        });

    });

}


var successCheck = function () {
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

const successConfirmed = (idHistory) => {

    console.log(idHistory);
    ons.notification.alert('ทำรายการสำเร็จ!');

    db.collection("history").doc('idHistory').update({
       
        status: 'aaaaaa'

    })
};



var notnull = function () {
    var problem = document.getElementById('problem').value;
    var problemDetail = document.getElementById('problemDetail').value;
    if (problem === '' && problemDetail === '') {
        ons.notification.alert('กรุณากรอกข้อมูลให้ครบถ้วน!');
    } else if (problemDetail === '') {
        ons.notification.alert('กรุณาระบุรายละเอียดของปัญหา!');
    } else if (problem === '') {
        ons.notification.alert('กรุณาระบุปัญหา!');
    } else {

        createAlertDialog();
    }

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

var hideAlertDialog = function () {
    document.getElementById('my-alert-dialog').hide();

};
const notify = () => {
    document.querySelector('#Navigator_home').popPage();
    document.querySelector('#Navigator_search').popPage();

    ons.notification.alert('ทำรายการสำเร็จ!');

    db.collection("history").add({
        topic: document.getElementById('problem').value,
        detail: document.getElementById('problemDetail').value,
        Tname: $("#nameTech").val(),
        status: "กำลังดำเนินงาน"

    })
};