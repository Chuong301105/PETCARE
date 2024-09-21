// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyD_49CYLkS-4bSAmpHAXPFaKlZ_UmY_46I",
  authDomain: "petcare-project-dec50.firebaseapp.com",
  projectId: "petcare-project-dec50",
  storageBucket: "petcare-project-dec50.appspot.com",
  messagingSenderId: "257060539542",
  appId: "1:257060539542:web:2772a651332c5f155006b7",
  measurementId: "G-2YFYP2B3Z0"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('serviceForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            pet: document.getElementById('pet').value,
            otherType: document.getElementById('otherType').value || '',
            services: Array.from(document.querySelectorAll('input[name="services"]:checked')).map(el => el.value),
            homeService: document.getElementById('homeService').value,
            pickUpService: document.getElementById('pickUpService').value,
            address: document.getElementById('address').value || '',
            message: document.getElementById('message').value
        };

        // Lưu dữ liệu vào Firebase Realtime Database
        const newCustomerRef = push(ref(database, 'customers'));
        set(newCustomerRef, formData)
        .then(() => {
            console.log('Dữ liệu đã được lưu vào Firebase');
            const responseMessage = document.getElementById('responseMessage');
            responseMessage.textContent = 'Đã gửi thông tin thành công!';
            responseMessage.style.color = 'green';
            responseMessage.style.display = 'block';

            form.reset();
        })
        .catch(error => {
            console.error('Lỗi khi lưu dữ liệu vào Firebase:', error);
            const responseMessage = document.getElementById('responseMessage');
            responseMessage.textContent = 'Có lỗi xảy ra khi gửi thông tin!';
            responseMessage.style.color = 'red';
            responseMessage.style.display = 'block';
        });
    });
});
