// Firebase configuration của bạn
const firebaseConfig = {
  apiKey: "AIzaSyD_49CYLkS-4bSAmpHAXPFaKlZ_UmY_46I",
  authDomain: "petcare-project-dec50.firebaseapp.com",
  projectId: "petcare-project-dec50",
  storageBucket: "petcare-project-dec50.appspot.com",
  messagingSenderId: "257060539542",
  appId: "1:257060539542:web:2772a651332c5f155006b7",
  measurementId: "G-2YFYP2B3Z0"
};

// Khởi tạo Firebase và Firestore
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// DOM elements
const messageList = document.getElementById('messageList');
const messageInput = document.getElementById('messageInput');
const dataForm = document.getElementById('dataForm');

// Khi form được submit, thêm dữ liệu vào Firestore
dataForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Ngăn chặn việc reload trang

    // Lấy giá trị từ input
    const message = messageInput.value;

    // Thêm message vào Firestore (collection: messages)
    db.collection('messages').add({
        content: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log("Message added!");
        messageInput.value = '';  // Reset input field
    })
    .catch(error => {
        console.error("Error adding message: ", error);
    });
});

// Lắng nghe thay đổi trong Firestore và cập nhật danh sách tin nhắn theo thời gian thực
db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
    messageList.innerHTML = '';  // Reset danh sách trước khi cập nhật

    snapshot.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = doc.data().content;
        messageList.appendChild(li);
    });
});
