// login form code section ....
function switchTab(tab) {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const tabs = document.querySelectorAll(".tab");
  
    tabs.forEach(t => t.classList.remove("active"));
  
    if (tab === "login") {
      loginForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
      tabs[0].classList.add("active");
    } else {
      loginForm.classList.add("hidden");
      signupForm.classList.remove("hidden");
      tabs[1].classList.add("active");
    }
  }
  
//  forget password code

function openForgotPassword() {
    document.getElementById("forgotModal").style.display = "block";
  }
  
  function closeForgotPassword() {
    document.getElementById("forgotModal").style.display = "none";
  }
  
  function submitForgotPassword() {
    const email = document.getElementById("forgotEmail").value;
    if (email) {
      alert(`Reset link sent to ${email}`);
      closeForgotPassword();
    } else {
      alert("Please enter your email.");
    }
  }
 
  
// sidebar toggle code section ..
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  if (window.innerWidth < 768) {
    sidebar.classList.toggle("show");
  }
});

// Profile dropdown toggle
const profileToggle = document.getElementById("profileToggle");
const profileDropdown = document.getElementById("profileDropdown");

profileToggle.addEventListener("click", () => {
  profileDropdown.classList.toggle("show");
});

// setting code 

function openEditProfile() {
    document.getElementById("editModal").style.display = "flex";
  }
  
  function closeEditProfile() {
    document.getElementById("editModal").style.display = "none";
  }
  
  document.getElementById("profileForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    alert(`Profile updated:\nName: ${name}\nEmail: ${email}`);
    closeEditProfile();
  });
  