let scanner = new Instascan.Scanner({
    video: document.getElementById('qrScanner')
});

function startScan() {
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);

            // Show scan box
            document.getElementById('scanSquare').style.display = 'block';
        } else {
            console.error('No cameras were found.');
        }
    }).catch(function (e) {
        console.error(e);
    });
}

function openScannedContent() {
    // Open the link in a new window
    const scannedContent = document.getElementById('openLink').textContent;
    window.open(scannedContent, '_blank');
}

scanner.addListener('scan', function (content) {
    // Show scanned QR message
    document.getElementById('scanMessage').style.display = 'block';
    document.getElementById('openLink').textContent = content;
});