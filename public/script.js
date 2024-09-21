// Firebase configuration (no imports for the CDN version)
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.addEventListener('DOMContentLoaded', function () {
    const petSelect = document.getElementById('pet');
    const otherPetTypeDiv = document.getElementById('otherPetType');
    const homeService = document.getElementById('homeService');
    const pickUpService = document.getElementById('pickUpService');
    const addressField = document.getElementById('addressField');

    // Toggle the visibility of the "other pet type" field
    petSelect.addEventListener('change', function () {
        if (petSelect.value === 'others') {
            otherPetTypeDiv.style.display = 'block';
        } else {
            otherPetTypeDiv.style.display = 'none';
        }
    });

    // Toggle the visibility of the address field
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

        // Save data to Firebase Realtime Database
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
