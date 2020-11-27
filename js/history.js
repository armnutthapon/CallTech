var db = firebase.firestore();

$(function () {

    db.collection("history").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `  <ons-card>
            <div class="historyTopic">${doc.data().topic}</div>
            <div class="historyDetail">${doc.data().detail}</div>
            <div class="historyStatus">
                <ons-icon icon="fa-wrench" class="historyIcon"></ons-icon>
                ${doc.data().status}
            </div>
            <div class="historyTech"> ช่างผู้รับผิดชอบ : <span class="historyTechName">${doc.data().Tname}</span> </div>
        </ons-card>      
        `;
            $('#showHistory').append(row);
        });
        // $('#pop ons-card').click(function() {
        //     const aa = $(this).attr('id')
        //     getTechDetail(aa);
        //     const bb = $(this).attr('id')
        //     getTechName(bb);
        //     document.querySelector('#Navigator_home').pushPage('views/contact.html');
        // })
    });


})



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



