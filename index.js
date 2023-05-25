document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});

const scrollinglr = () => {
  const scroll1 = document.querySelector(".font-flex1");
  const scroll2 = document.querySelector(".font-flex2");
  const scroll3 = document.querySelector(".font-flex3");
  const scroll4 = document.querySelector(".font-flex4");

  if (
    document.querySelector(".font-flex2").getBoundingClientRect().top != 100
  ) {
    let val = document.querySelector(".font-flex2").getBoundingClientRect().top;
    let val2 = val * 0.4;
    scroll2.style.transform = `translateY(${val2}px)`;
  }

  if (
    document.querySelector(".font-flex1").getBoundingClientRect().top != 100
  ) {
    let val3 = document.querySelector(".font-flex1").getBoundingClientRect().top;
    let val4 = val3 * 0.1;
    scroll1.style.transform = `translateY(${val4}px)`;
  }

  if (
    document.querySelector(".font-flex3").getBoundingClientRect().top != 100
  ) {
    let val5 = document.querySelector(".font-flex3").getBoundingClientRect().top;
    let val6 = val5 * 0.2;
    scroll3.style.transform = `translateY(${val6}px)`;
  }

  if (
    document.querySelector(".font-flex4").getBoundingClientRect().top != 100
  ) {
    let val7 = document.querySelector(".font-flex4").getBoundingClientRect().top;
    let val8 = val7 * 0.3;
    scroll4.style.transform = `translateY(${val8}px)`;
  }
};
window.addEventListener("scroll", scrollinglr);
