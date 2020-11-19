$(function() {

    document.addEventListener('init', function(event) {
        var page = event.target;
        if (page.id === 'search') {
            page.querySelector('#TNelectricity').onclick = function() {
                document.querySelector('#Navigator_search').pushPage('views/search/ectricity.html');
            };
            page.querySelector('#packageprofile').onclick = function() {
                document.querySelector('#Navigator_profile').pushPage('views/profile/package.html');
            };
            page.querySelector('#settingprofile').onclick = function() {
                document.querySelector('#Navigator_profile').pushPage('views/profile/setting.html');
            };
            page.querySelector('#helpprofile').onclick = function() {
                document.querySelector('#Navigator_profile').pushPage('views/profile/help.html');
            };
            page.querySelector('#reportprofile').onclick = function() {
                document.querySelector('#Navigator_profile').pushPage('views/profile/report.html');
            };
        } else if (page.id === "packagePage") {
            checkPackage()
        }

    });

})