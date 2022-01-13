$('#btnSend').click( function () {
    alert(
        'From: ' + $('#textFrom').val() + ', Subject: ' + $('#textSubject').val() + ', Message: ' + $('#textMessage').val());

    $('#picGanderson').fadeToggle();
})