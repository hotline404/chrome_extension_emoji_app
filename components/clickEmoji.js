const wrapper = document.querySelector('.listWrapper');

if (wrapper) {
  wrapper.addEventListener('click', (e) => {
    const targetLi = e.target.closest('.emoji-list');

    if (targetLi) {
      const emoji = targetLi.innerText;
      
      navigator.clipboard.writeText(emoji)
        .then(() => {
          console.log("복사 성공: " + emoji);
          
        })
        .catch(err => {
          console.error('복사 실패:', err);
        });
    }
  });
}