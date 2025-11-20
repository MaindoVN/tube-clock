function updateTimeAndDate() {
    const now = new Date();

    // Lấy giờ 24h
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    // Ngày tháng năm
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);

    // Chuỗi hiển thị: HHMMDDMMYY
    const displayStr = hours + minutes + day + month + year;

    // Cập nhật lên 12 ống Nixie
    for (let i = 0; i < 12; i++) {
        document.getElementById('char' + i + '1').textContent = displayStr[i];
        document.getElementById('char' + i + '2').textContent = displayStr[i];
    }
}

updateTimeAndDate();
setInterval(updateTimeAndDate, 60000);
