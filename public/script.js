// Cấu hình Supabase
const supabaseUrl = 'https://wetgmec1lvrbsayvbakw.supabase.co'; // URL của Supabase mà bạn đã có
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46Z29vZ2xlOmZpcmViYXNlOm' // Đảm bảo bạn sao chép đúng API Key

// Bắt lỗi khi kết nối với WebSocket
supabase.realtime.onError((e) => {
  console.log("WebSocket Error: ", e);
});

supabase
  .from('messages')
  .on('INSERT', payload => {
    console.log('Message received: ', payload);
  })
  .subscribe();

// Tạo client của Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// DOM elements
const messageList = document.getElementById('messageList');
const messageInput = document.getElementById('messageInput');
const messageForm = document.getElementById('messageForm');

// Ghi tin nhắn lên Supabase
messageForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Ngăn chặn trang reload

    // Lấy tin nhắn từ input
    const message = messageInput.value;

    // Chèn tin nhắn vào bảng Supabase
    const { data, error } = await supabase
        .from('messages')  // Tên bảng trong Supabase
        .insert([
            { demo1: message } // Chèn dữ liệu
        ]);

    if (error) {
        console.error('Error inserting message:', error);
    } else {
        console.log('Message inserted:', data);
        // Cập nhật danh sách tin nhắn sau khi chèn thành công
        messageList.innerHTML += `<li>${message}</li>`;
        messageInput.value = ''; // Reset input
    }
});
