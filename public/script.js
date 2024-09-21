// Firebase configuration
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
    const form = document.getElementById('serviceForm');
    const petSelect = document.getElementById('pet');
    const otherPetTypeDiv = document.getElementById('otherPetType');
    const homeServiceSelect = document.getElementById('homeService');
    const pickUpServiceSelect = document.getElementById('pickUpService');
    const addressFieldDiv = document.getElementById('addressField');

    // Show/Hide "other pet type" field
    petSelect.addEventListener('change', function () {
        if (petSelect.value === 'others') {
            otherPetTypeDiv.style.display = 'block';
        } else {
            otherPetTypeDiv.style.display = 'none';
        }
    });

    // Show/Hide "address" field
    function toggleAddressField() {
        if (homeServiceSelect.value === 'yes' || pickUpServiceSelect.value === 'yes') {
            addressFieldDiv.style.display = 'block';
        } else {
            addressFieldDiv.style.display = 'none';
        }
    }

    homeServiceSelect.addEventListener('change', toggleAddressField);
    pickUpServiceSelect.addEventListener('change', toggleAddressField);
    toggleAddressField(); // Set initial state on load

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload

        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            pet: document.getElementById('pet').value,
            otherType: document.getElementById('otherType').value || '',
            homeService: document.getElementById('homeService').value,
            pickUpService: document.getElementById('pickUpService').value,
            address: document.getElementById('address').value || '',
            message: document.getElementById('message').value
        };

        // Push the data to Firebase
        const newCustomerRef = database.ref('customers').push();
        newCustomerRef.set(formData)
            .then(() => {
                const responseMessage = document.getElementById('responseMessage');
                responseMessage.textContent = 'Đã gửi thông tin thành công!';
                responseMessage.style.color = 'green';
                responseMessage.style.display = 'block';
                form.reset(); // Reset form after successful submission
            })
            .catch((error) => {
                console.error('Lỗi khi lưu dữ liệu vào Firebase:', error);
                const responseMessage = document.getElementById('responseMessage');
                responseMessage.textContent = 'Có lỗi xảy ra khi gửi thông tin!';
                responseMessage.style.color = 'red';
                responseMessage.style.display = 'block';
            });
    });
});
