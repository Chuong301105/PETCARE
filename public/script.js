// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_49CYLkS-4bSAmpHAXPFaKlZ_UmY_46I",
  authDomain: "petcare-project-dec50.firebaseapp.com",
  databaseURL: "https://petcare-project-dec50-default-rtdb.firebaseio.com",
  projectId: "petcare-project-dec50",
  storageBucket: "petcare-project-dec50.appspot.com",
  messagingSenderId: "257060539542",
  appId: "1:257060539542:web:2772a651332c5f155006b7",
  measurementId: "G-2YFYP2B3Z0"
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
