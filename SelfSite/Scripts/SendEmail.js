SendEmail = function ()
{
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
        });
}