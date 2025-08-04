document.querySelectorAll('.nav-list__link[data-page]').forEach(link => {
   link.addEventListener('click', async (event) => {
      event.preventDefault();
      const page = link.dataset.page;
      try {
         const res = await fetch(`HTML/${page}`);
         if (!res.ok) throw new Error(res.status);
         const html = await res.text();
         document.getElementById('main').innerHTML = html;
      } catch (e) {
         console.error('Ошибка загрузки:',e);
         document.getElementById('main').textContent = 'Ошибка загрузки странички';
      }
   })
})