function updateTimeAndDate() {
    const now = new Date();

    // 24h
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');


    // Ngày tháng năm
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);

    // 12 chữ số: HHMMDDMMYY
    const displayStr = hours + minutes + seconds + day + month + year;

    // Cập nhật lên ống
    for (let i = 0; i < 12; i++) {
        document.getElementById('char' + i + '1').textContent = displayStr[i];
        document.getElementById('char' + i + '2').textContent = displayStr[i];
    }
}
updateTimeAndDate();
setInterval(updateTimeAndDate, 1000);
