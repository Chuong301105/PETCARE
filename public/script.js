// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.addEventListener('DOMContentLoaded', function () {
    const homeService = document.getElementById('homeService');
    const pickUpService = document.getElementById('pickUpService');
    const addressField = document.getElementById('addressField');

    function toggleAddressField() {
        if (homeService.value === 'yes' || pickUpService.value === 'yes') {
            addressField.style.display = 'block';
        } else {
            addressField.style.display = 'none';
        }
    }

    homeService.addEventListener('change', toggleAddressField);
    pickUpService.addEventListener('change', toggleAddressField);

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
        const newCustomerRef = database.ref('customers').push();
        newCustomerRef.set(formData)
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
