let scroller = document.querySelector(".scroller");
let height =document.documentElement.scrollHeight - document.documentElement.clientHeight;
// scrollHeight : بتجبلي السكرول تاع الموقع تاعي كلو من اولو لاخرو الجزء الظاهر والي مش ظاهر
// clientHeight : بتجبلي قيمة السكرول او طول المحتوى الي ظاهر للمستخدم
// height : عملتها طول الموقع ناقص طول الي ظاهر للمستخدم لانه الي ظاهر للمستخدم بلزمهوش سكرول وبتكون قيمة السكرول فيه صفر
//  ومتغير الهايت هو الي بستعملو عشان اغير عرض السكرولير بناءا على نسبة السكرول الي انا قطعتو تقسيم الهايت ضرب 100 عشان اوجد النسبة المئوية للي انا قطعتو واخليه يساوي العرض

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop; //قيمة السكرول الي انا عملتو
  console.log(scrollTop);
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});
