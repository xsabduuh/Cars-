// تحميل السيارات في القائمة، حساب السعر، التحقق، تخزين
document.getElementById("bookingForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  // validation + store in localStorage
  let bookings = JSON.parse(localStorage.getItem("elite_bookings")||"[]");
  bookings.push(newBooking);
  localStorage.setItem("elite_bookings", JSON.stringify(bookings));
  showToast("تم حجز السيارة بنجاح! شكراً لثقتكم.");
  setTimeout(()=> window.location.href="index.html", 1500);
});