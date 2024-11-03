//đăng kí
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Lưu tài khoản vào LocalStorage dưới dạng chuỗi JSON
    localStorage.setItem(username, JSON.stringify({ password }));
    alert('Đăng ký thành công! Bạn sẽ được chuyển đến trang đăng nhập');

    // Chuyển đến trang đăng nhập
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 500); // Chờ 0.5 giây trước khi chuyển
});

// document.getElementById('registerForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Lưu trữ thông tin tài khoản trong LocalStorage
//     localStorage.setItem(username, password);
//     alert('Đăng ký thành công! Hãy đăng nhập.');
//     window.location.href = 'login.html';
// });

// Đăng nhập
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Kiểm tra tài khoản trong LocalStorage
    const userData = JSON.parse(localStorage.getItem(username));
    if (userData && userData.password === password) {
        // Lưu trạng thái đăng nhập
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInUser', username);
        alert('Đăng nhập thành công!');
        window.location.href = 'menu.html';
    } else {
        alert('Tài khoản hoặc mật khẩu không chính xác!');
    }
});

// Kiểm tra trạng thái đăng nhập ở trang chủ
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const menuLink = document.getElementById('menuLink');
    const logoutBtn = document.getElementById('logoutBtn');

    if (isLoggedIn) {
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
        menuLink.style.display = 'inline';
        logoutBtn.style.display = 'inline';
    }

    // Xử lý nút đăng xuất
    logoutBtn?.addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loggedInUser');
        alert('Đã đăng xuất');
        window.location.href = 'index.html';
    });
});

// Kiểm tra trạng thái đăng nhập ở trang menu
document.addEventListener('DOMContentLoaded', function() {
    if (document.body.contains(document.getElementById('menuList'))) {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            alert('Bạn phải đăng nhập để xem menu');
            window.location.href = 'login.html';
        }
    }

});

// Đặt đồ ăn
function handleOrder(foodName) {
    //const orderMessage = document.getElementById('function_order');
   // orderMessage.innerText = `Bạn đã đặt ${foodName}. Cảm ơn bạn!`;
   alert('Bạn đã đặt món thành công!');
}

// Logout trong menu
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    alert("Đã đăng xuất");
    window.location.href = "index.html"; // Điều chỉnh đường dẫn theo nhu cầu
}

