// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// DOM elements
const messageList = document.getElementById('messageList');
const messageInput = document.getElementById('messageInput');
const dataForm = document.getElementById('dataForm');

// Khi form được submit, ghi dữ liệu vào Firebase
dataForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy giá trị từ input
    const message = messageInput.value;

    // Ghi dữ liệu vào Firebase Realtime Database
    firebase.database().ref('messages').push({
        message: message
    });

    // Xóa input sau khi gửi
    messageInput.value = '';
});

// Lắng nghe sự thay đổi từ Firebase và cập nhật dữ liệu theo thời gian thực
firebase.database().ref('messages').on('value', function(snapshot) {
    // Xóa danh sách hiện tại
    messageList.innerHTML = '';

    // Lặp qua các tin nhắn và hiển thị
    snapshot.forEach(function(childSnapshot) {
        const li = document.createElement('li');
        li.textContent = childSnapshot.val().message;
        messageList.appendChild(li);
    });
});
