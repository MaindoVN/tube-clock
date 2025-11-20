function updateTimeAndDate() {
    const now = new Date();

    // 24h
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    // Ngày tháng năm
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);

    // 12 chữ số tổng cộng: HH MM (space space) DD MM YY
    // Ống 1-2: HH
    // Ống 3-4: MM
    // Ống 5-6: space (thay AM/PM cũ)
    // Ống 7-8: DD
    // Ống 9-10: MM
    // Ống 11-12: YY
    const displayArr = [
        hours[0], hours[1], 
        minutes[0], minutes[1], 
        '', '',          // AM/PM space
        day[0], day[1],
        month[0], month[1],
        year[0], year[1]
    ];

    // Cập nhật lên ống
    for (let i = 0; i < 12; i++) {
        document.getElementById('char' + i + '1').textContent = displayArr[i];
        document.getElementById('char' + i + '2').textContent = displayArr[i];
    }
}

updateTimeAndDate();
setInterval(updateTimeAndDate, 60000);
