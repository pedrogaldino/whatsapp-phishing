var socket = io.connect(),
    lastCode;

socket.on('code', function (data) {
    if(lastCode == data) return;
    var el = document.getElementById('qrcode');
    el.innerHTML = '<img src="' + data + '">';
});

socket.on('success', function () {
    alert('p0wned');
});
