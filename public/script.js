// Cấu hình Firebase của bạn (lấy từ Firebase Console)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Khởi tạo Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// DOM elements
const messageList = document.getElementById('messageList');
const messageInput = document.getElementById('messageInput');
const dataForm = document.getElementById('dataForm');

// Khi form được submit, ghi dữ liệu vào Firebase
dataForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Ngăn chặn việc reload trang

    // Lấy giá trị từ input
    const message = messageInput.value;

    // Ghi dữ liệu vào Realtime Database
    firebase.database().ref('messages').push().set({
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
