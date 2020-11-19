document.addEventListener('init', function (event) {
    var page = event.target;
    console.log(page.id);
    if (page.id === 'page1') {
        $('#back').hide();
        page.querySelector('#bw').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/blackwidow.html'); 
            page.querySelector('#bb').onclick = function () {
                document.querySelector('#myNavigator').pushPage('views/bw.html');
            };
        };
    } else if (page.id === 'bw' || page.id === 'bb') {        
        $('#back').show();      
        document.querySelector('ons-back-button').onclick = function(event) {
            document.querySelector('#myNavigator').popPage();
        };

    }

});