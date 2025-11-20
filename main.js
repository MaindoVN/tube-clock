function updateTimeAndDate() {
    const now = new Date();

    // Giờ và phút 24h
    const hours = now.getHours().toString().padStart(2, '0'); // HH
    const minutes = now.getMinutes().toString().padStart(2, '0'); // MM

    // Ngày tháng năm
    const day = now.getDate().toString().padStart(2, '0'); // DD
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // MM
    const year = now.getFullYear().toString(); // YYYY

    // Chuỗi hiển thị: HHMMDDMMYYYY
    const displayStr = hours + minutes + day + month + year; // tổng 12 chữ số

    // Danh sách id của các ô (tương ứng với HTML của bạn)
    const ids = [
        'char01','char11','char02','char12',
        'char21','char22','char31','char32',
        'char41','char42','char51','char52'
    ];

    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).textContent = displayStr[i];
    }
}

// Chạy lần đầu
updateTimeAndDate();

// Cập nhật mỗi phút
setInterval(updateTimeAndDate, 60000);
