// theme.js
(function(){
  const KEY = 'theme';
  const root = document.documentElement;
  let theme = root.getAttribute('data-theme') || 'light';

  function apply(t){
    root.setAttribute('data-theme', t);
    localStorage.setItem(KEY, t);
    // อัปเดตสถานะปุ่ม toggle ถ้ามี
    const chk = document.querySelector('#themeToggle');
    if (chk) chk.checked = (t === 'dark');
  }

  // ติดตั้ง event ให้สวิตช์
  document.addEventListener('DOMContentLoaded', () => {
    const chk = document.querySelector('#themeToggle');
    if (chk){
      chk.checked = (theme === 'dark');
      chk.addEventListener('change', () => apply(chk.checked ? 'dark' : 'light'));
    }
  });
})();
