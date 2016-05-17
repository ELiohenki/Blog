SendEmail = function () {

    if (!$("#bodyEmail").val()) {
        $("#bodyEmail").notify("Necessary field", "error");
        return;
    }

    $(".emailText").addClass("active");
    $(".sendEmail").addClass("active");
    $(".emailLoader").addClass("active");
    $("#sendEmailButton").prop("disabled", true);
    $.ajax({
            method: "POST",
            url: "/Email/Send",
            data: { from: $("#fromEmail").val(), subject: $("#subjectEmail").val(), body: $("#bodyEmail").val() }
        })
        .done(function (msg) {
            $("#fromEmail").val("");
            $("#subjectEmail").val("");
            $("#bodyEmail").val("");
            $("#bodyEmail").notify("Sent", "success");
            $("#sendEmailButton").prop("disabled", false);

            setTimeout(function () {
                $(".sendEmail").removeClass("active finished").clearQueue();
                $(".emailText").removeClass("active");
                $(".emailDone").removeClass("active");
                $(".emailLoader").removeClass("active");
            }, 2500);


            $(".sendEmail").delay(150).queue(function () {
                $(this).addClass("finished").clearQueue();
            });

            $(".emailDone").delay(50).queue(function () {
                $(this).addClass("active").clearQueue();
            });
        });
}