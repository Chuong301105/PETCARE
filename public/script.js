<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pet Care Services</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Thanh điều hướng -->
    <header>
        <nav>
            <div class="logo">PetCare</div>
            <ul class="nav-links">
                <li><a href="#home">Trang chủ</a></li>
                <li><a href="#services">Dịch vụ</a></li>
                <li><a href="#products">Sản phẩm</a></li>
                <li><a href="#contact">Liên hệ</a></li>
                <li><a href="#register">Đăng nhập</a></li>
            </ul>
        </nav>
    </header>

    <!-- Banner chính -->
    <section id="home" class="banner">
        <div class="banner-text">
            <h1>Chăm Sóc Thú Cưng Chuyên Nghiệp</h1>
            <p>Chúng tôi mang đến dịch vụ chăm sóc tốt nhất cho thú cưng của bạn.</p>
            <a href="#services" class="btn">Khám phá dịch vụ</a>
        </div>
    </section>

    <!-- Khu vực dịch vụ -->
    <section id="services" class="services">
        <h2>Dịch Vụ Của Chúng Tôi</h2>
        <div class="services-container">
            <div class="service-item">
                <h3>Spa Thú Cưng</h3>
                <p>Dịch vụ spa chuyên nghiệp với liệu trình thư giãn cho thú cưng của bạn.</p>
            </div>
            <div class="service-item">
                <h3>Huấn Luyện</h3>
                <p>Chương trình huấn luyện bài bản, nâng cao sự thông minh cho thú cưng.</p>
            </div>
            <div class="service-item">
                <h3>Giữ Thú Cưng</h3>
                <p>Dịch vụ giữ thú cưng khi bạn đi xa với môi trường thoải mái, an toàn.</p>
            </div>
        </div>
    </section>
       
    <!-- Khu vực sản phẩm -->
    <section id="products" class="products">
        <h2>Sản Phẩm</h2>
        <div class="products-container">
            <div class="product-item">
                <img src="product1.jpg" alt="Thức ăn cho chó">
                <h3>Thức Ăn Cho Chó</h3>
            </div>
            <div class="product-item">
                <img src="product2.jpg" alt="Đồ chơi cho mèo">
                <h3>Đồ Chơi Cho Mèo</h3>
            </div>
            <div class="product-item">
                <img src="product3.jpg" alt="Phụ kiện cho thú cưng">
                <h3>Phụ Kiện Cho Thú Cưng</h3>
            </div>
        </div>
    </section>

    <!-- Form dịch vụ -->
    <section id="service-booking" class="contact">
        <h2>Đặt dịch vụ chăm sóc thú cưng</h2>
        <form id="serviceForm">
            <label for="name">Tên của bạn</label>
            <input type="text" id="name" name="name" autocomplete="name" placeholder="Nhập tên của bạn" required>
    
            <label for="phone">Số điện thoại</label>
            <input type="tel" id="phone" name="phone" autocomplete="tel" placeholder="Nhập số điện thoại của bạn" required>
    
            <label for="email">Email của bạn</label>
            <input type="email" id="email" name="email" autocomplete="email" placeholder="Nhập email của bạn" required>
    
            <label for="pet">Loại thú cưng</label>
            <select id="pet" name="pet" required>
                <option value="dog">Chó</option>
                <option value="cat">Mèo</option>
                <option value="others">Khác</option>
            </select>
    
            <div id="otherPetType" style="display: none;">
                <label for="otherType">Loại thú cưng khác</label>
                <input type="text" id="otherType" name="otherType" placeholder="Nhập loại thú cưng khác">
            </div>
    
            <!-- Dịch vụ -->
            <label>Chọn dịch vụ</label>
            <div class="checkbox-group">
                <label for="spa">
                    <input type="checkbox" id="spa" name="services" value="Spa"> Spa
                </label>
                <label for="training">
                    <input type="checkbox" id="training" name="services" value="Training"> Huấn luyện
                </label>
                <label for="boarding">
                    <input type="checkbox" id="boarding" name="services" value="Boarding"> Giữ thú cưng
                </label>
            </div>
    
            <label for="homeService">Phục vụ tại nhà</label>
            <select id="homeService" name="homeService">
                <option value="no">Không</option>
                <option value="yes">Có</option>
            </select>
    
            <label for="pickUpService">Đón bé tại nhà</label>
            <select id="pickUpService" name="pickUpService">
                <option value="no">Không</option>
                <option value="yes">Có</option>
            </select>
    
            <div id="addressField" style="display: none;">
                <label for="address">Địa chỉ</label>
                <input type="text" id="address" name="address" autocomplete="street-address" placeholder="Vui lòng nhập địa chỉ">
            </div>            
    
            <label for="message">Tin nhắn</label>
            <textarea id="message" name="message" placeholder="Nhập tin nhắn của bạn" autocomplete="off"></textarea>
    
            <button type="submit" class="btn">Gửi</button>
        </form>
        <p id="responseMessage"></p>
    </section>    

    <!-- Chân trang -->
    <footer>
        <p>© 2023 PetCare. All Rights Reserved.</p>
    </footer>

    <!-- JavaScript -->
    <!-- Tải Firebase SDK từ CDN -->
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"></script>

    <!-- Cấu hình Firebase và nạp script -->
    <script>
        // Cấu hình Firebase
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
        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();

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
    </script>

</body>
</html>
