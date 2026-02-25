import { emoji } from "../emoji.js";

//dom 접근
const listWrapper = document.querySelector(".listWrapper");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const title = document.querySelector('.category-container');

//객체 인덱싱
const cateKey = Object.keys(emoji);
const maxIndex = cateKey.length - 1;
let curIndex = 0;
let curEmoji = cateKey[curIndex];

//콘텐츠 컨테이너
const listContainer = document.createElement("ol");

//다음 페이지 클릭
function clickNext() {
  curIndex++;
  if (maxIndex < curIndex) {
    curIndex = 0;
  }
  curEmoji = cateKey[curIndex];
  listContainer.innerHTML = "";

  createLists(curEmoji);
}

//이전 페이지 클릭
function clickPrev() {
  curIndex--;
  if (curIndex < 0) {
    curIndex = maxIndex;
  }
  curEmoji = cateKey[curIndex];
  listContainer.innerHTML = "";

  createLists(curEmoji);
}

//리스트 구축
function createLists(curEmoji) {
  //컨텐츠
  emoji[curEmoji].forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("emoji-list");
    li.textContent = element;
    listContainer.appendChild(li);
  });

  console.log('emoji', curEmoji)
  title.innerText = curEmoji

  listWrapper.innerHTML = "";
  listWrapper.appendChild(listContainer);
}

//페이지가 로드될 때 반영
document.addEventListener("DOMContentLoaded", () => {
  createLists(curEmoji);
});

//버튼 클릭 이벤트 반영
prevBtn.addEventListener("click", clickPrev);
nextBtn.addEventListener("click", clickNext);
