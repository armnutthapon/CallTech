var createAlertDialog = function() {
    var dialog = document.getElementById('my-alert-dialog');
    if (dialog) {
        dialog.show();
    } else {
        ons.createElement('alert-dialog.html', { append: true })
            .then(function(dialog) {
                dialog.show();
            });
    }
};

var hideAlertDialog = function() {
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

    })
};