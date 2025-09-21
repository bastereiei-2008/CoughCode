// theme.js
(function(){
  const KEY = 'theme';
  const root = document.documentElement;

  function readSaved(){
    const saved = localStorage.getItem(KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function apply(t){
    root.setAttribute('data-theme', t);
    localStorage.setItem(KEY, t);
    const chk = document.querySelector('#themeToggle');
    if (chk) chk.checked = (t === 'dark');
  }

  // ตั้งธีมทันที (สำคัญมาก)
  apply(root.getAttribute('data-theme') || readSaved());

  // ติด event ให้สวิตช์
  document.addEventListener('DOMContentLoaded', () => {
    const chk = document.querySelector('#themeToggle');
    if (chk){
      chk.checked = (root.getAttribute('data-theme') === 'dark');
      chk.addEventListener('change', () => apply(chk.checked ? 'dark' : 'light'));
    }
  });
})();

