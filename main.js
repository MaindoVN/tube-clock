function updateTimeAndDate() {
    const now = new Date();

    // Giờ 24h
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeStr = hours + minutes; // HHMM

    // Ngày-tháng-năm
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString(); // YYYY
    const dateStr = day + month + year; // DDMMYYYY

    // Kết hợp thời gian và ngày tháng
    const displayStr = timeStr + dateStr; // HHMMDDMMYYYY

    // Cập nhật vào các phần tử
    for (let i = 0; i < 12; i++) {
        document.getElementById('char' + i + '1').textContent = displayStr[i];
        document.getElementById('char' + i + '2').textContent = displayStr[i];
    }
}

// Chạy lần đầu và cập nhật mỗi phút
updateTimeAndDate();
setInterval(updateTimeAndDate, 60000);
