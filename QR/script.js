function generate() {
    const url = document.getElementById("qrcode_value").value;
    const qrcode = document.getElementById("btn")
    qrcode.innerHTML = "";
    new QRCode(qrcode, {
        text: url,
        width: 128,
        height: 128,
    });

}
