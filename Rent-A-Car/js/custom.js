function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
}

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

/* login section*/

// Toggle forms
function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
  }
  
  function showSignup() {
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
  }
  
  // Signup
  document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const message = document.getElementById('signupMessage');
  
    if (username && password) {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      message.style.color = 'green';
      message.textContent = 'Signup successful! You can now login.';
      document.getElementById('signupForm').reset();
    } else {
      message.style.color = 'red';
      message.textContent = 'Please fill all fields.';
    }
  });
  
  // Login
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const message = document.getElementById('loginMessage');
  
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      message.style.color = 'green';
      message.textContent = 'Login successful!';
    } else {
      message.style.color = 'red';
      message.textContent = 'Invalid credentials!';
    }
  });
  
  