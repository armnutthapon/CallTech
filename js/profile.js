$(function() {

    document.addEventListener('init', function(event) {
        var page = event.target;
        if (page.id === "packagePage") {
            checkPackage()
        } else if (page.id === "createdeal") {
            const nameTech = page.data.title;
            const result =
                `<input type="text" id="nameTech" class="form-control inputBorder mt-5" name="" value="${nameTech}" readonly
            aria-describedby="helpId" style="height: 60px;" required="required">`;
            $("#showName").append(result)
        }

    });

})