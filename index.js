// carousel
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

// scrolling

const scrollinglr = () => {
  const scroll1 = document.querySelector(".font-flex1");
  const scroll2 = document.querySelector(".font-flex2");
  const scroll3 = document.querySelector(".font-flex3");
  const scroll4 = document.querySelector(".font-flex4");
  const scrollwrapper = document.querySelector(".darkmode-ele");

  var image1 = document.querySelector(".moving-img1");
  var image2 = document.querySelector(".moving-img2");
  var image3 = document.querySelector(".moving-img3");
  var image4 = document.querySelector(".moving-img4");
  var image5 = document.querySelector(".moving-img5");
  var image6 = document.querySelector(".moving-img6");
  var image7 = document.querySelector(".moving-img7");
  var image8 = document.querySelector(".moving-img8");
  let scrollY = window.scrollY;

  // font page scrolling

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
    let val3 = document
      .querySelector(".font-flex1")
      .getBoundingClientRect().top;
    let val4 = val3 * 0.1;
    scroll1.style.transform = `translateY(${val4}px)`;
  }

  if (
    document.querySelector(".font-flex3").getBoundingClientRect().top != 100
  ) {
    let val5 = document
      .querySelector(".font-flex3")
      .getBoundingClientRect().top;
    let val6 = val5 * 0.2;
    scroll3.style.transform = `translateY(${val6}px)`;
  }

  if (
    document.querySelector(".font-flex4").getBoundingClientRect().top != 100
  ) {
    let val7 = document
      .querySelector(".font-flex4")
      .getBoundingClientRect().top;
    let val8 = val7 * 0.3;
    scroll4.style.transform = `translateY(${val8}px)`;
  }

  // if (
  //   document.querySelector(".darkmode-ele").getBoundingClientRect().top != 10
  // ) {
  //   let val00 = document
  //     .querySelector(".darkmode-ele")
  //     .getBoundingClientRect().top;
  //   let val01 = val00 * 0.9;
  //   scroll4.style.transform = `translateY(${val01}px)`;
  // }

  // circle rotation

  if (scrollY % 100 < 50) {
    document.querySelector(".font-circle").style.transform = "rotate(1deg)";
  } else {
    document.querySelector(".font-circle").style.transform = "rotate(-1deg)";
  }

  // moving-image
  if (
    document.querySelector(".container1-img").getBoundingClientRect().top != 100
  ) {
    let val9 =
      document.querySelector(".container1-img").getBoundingClientRect().top -
      100;
    let val10 = val9 * 0.1;
    image1.style.transform = `translateY(${val10}px)`;
  }

  if (
    document.querySelector(".container2-img").getBoundingClientRect().top != 100
  ) {
    let val11 =
      document.querySelector(".container2-img").getBoundingClientRect().top -
      1000;
    let val12 = val11 * 0.1;
    image2.style.transform = `translateY(${val12}px)`;
  }

  if (
    document.querySelector(".container3-img").getBoundingClientRect().top != 100
  ) {
    let val13 =
      document.querySelector(".container3-img").getBoundingClientRect().top -
      1000;
    let val14 = val13 * 0.1;
    image3.style.transform = `translateY(${val14}px)`;
  }

  if (
    document.querySelector(".container4-img").getBoundingClientRect().top != 100
  ) {
    let val15 =
      document.querySelector(".container4-img").getBoundingClientRect().top -
      1000;
    let val16 = val15 * 0.1;
    image4.style.transform = `translateY(${val16}px)`;
  }

  if (
    document.querySelector(".container5-img").getBoundingClientRect().top != 100
  ) {
    let val17 =
      document.querySelector(".container5-img").getBoundingClientRect().top -
      1000;
    let val18 = val17 * 0.1;
    image5.style.transform = `translateY(${val18}px)`;
  }

  if (
    document.querySelector(".font-use-bottom-img").getBoundingClientRect()
      .top != 100
  ) {
    let val19 =
      document.querySelector(".font-use-bottom-img").getBoundingClientRect()
        .top - 1000;
    let val20 = val19 * 0.1;
    image6.style.transform = `translateY(${val20}px)`;
  }

  if (
    document.querySelector(".font-use-bottom-img").getBoundingClientRect()
      .top != 100
  ) {
    let val21 =
      document.querySelector(".font-use-bottom-img").getBoundingClientRect()
        .top - 1000;
    let val22 = val21 * 0.1;
    image7.style.transform = `translateY(${val22}px)`;
  }

  if (
    document.querySelector(".font-use-bottom-img").getBoundingClientRect()
      .top != 100
  ) {
    let val23 =
      document.querySelector(".font-use-bottom-img").getBoundingClientRect()
        .top - 500;
    let val24 = val23 * 0.09;
    image8.style.transform = `translateY(${val24}px)`;
  }
};
window.addEventListener("scroll", scrollinglr);

// on hover cards



// dark mode
// function darkmode() {
//   var lightmode = document.querySelector(".darkmode-ele");
//   lightmode.classList.toggle("darkbody");

//   //mode-heading
//   var mode = document.querySelector(".mode");
//   mode.textContent = "Dark Mode";
//   //  var x= document.querySelector(".mode");
//   //  var y= document.querySelector(".mode2");
//   //  if (x.style.display==="block"){
//   //   y.style.display==="none";
//   //  }else{
//   //   y.style.display==="block";

//   //  }

//   // dark mode lines bg colour
//   let whiteline = document.querySelectorAll(".line");
//   for (var i = 0; i < whiteline.length; i++) {
//     var whiteline1 = whiteline[i];
//     whiteline1.classList.toggle("blackline");
//   }

//   // card-colour
//   // let card = document.querySelectorAll(".fontwrapper");
//   // for (var a = 0; a < card.length; a++) {
//   //   var aelement = a[i];
//   //   aelement.classList.toggle(".card-white");
//   // }
//   /*
  window.onload = function (e) {
    console.log("ggh")
    var s = document.querySelectorAll(".font-wrapper");
    var p = document.querySelectorAll(".font-box");
    var q = document.querySelectorAll(".font-hidden");


    for (let i = 0; i < s.length; i++) {
      s[i].addEventListener("mouseover", function () {
        s[i].style.color = "black";
        console.log("hdghdg")
        s[i].style.backgroundColor = "white";
        p[i].style.display = "none";
        q[i].style.display = "block";
      });
    }
    for (let i = 0; i < s.length; i++) {
      s[i].addEventListener("mouseout", function () {
        s[i].style.color = "white";
        s[i].style.backgroundColor = "#1c1c1c";
        p[i].style.display = "block";
        q[i].style.display = "none";
      });
    }
  };
// */

//darkmode

function darkmode() {
  console.log("shdvdhv");
  var lightmode = document.querySelector(".darkmode-ele");
  lightmode.classList.toggle("darkbody");

  let whiteline = document.querySelectorAll(".line");
  for (var i = 0; i < whiteline.length; i++) {
    var whiteline1 = whiteline[i];
    whiteline1.classList.toggle("blackline");
  }

  var t = document.getElementById("mode");
  if (t.innerHTML =="light mode") {
    t.innerHTML = "dark mode";
    cardsdark();
     
  } 

  else {
    t.innerHTML = "light mode";
    cardslight();
    var s = document.querySelectorAll(".font-wrapper");
    for (let i = 0; i < s.length; i++) {
      s[i].style.backgroundColor = "white";
      s[i].style.color="black";
    }
    
    
  }
}

//cardslight

function cardslight() {
  var s = document.querySelectorAll(".font-wrapper");
  var p = document.querySelectorAll(".font-box");
  var q = document.querySelectorAll(".font-hidden");

  for (let i = 0; i < s.length; i++) {
    s[i].addEventListener("mouseover", function () {
      s[i].style.backgroundColor = "white";
      s[i].style.color="black";
      p[i].style.display = "none";
      q[i].style.display = "block";
    });
  }
  for (let i = 0; i < s.length; i++) {
    s[i].addEventListener("mouseout", function () {
      p[i].style.display = "block";
      s[i].style.backgroundColor = "white";
      s[i].style.color="black";
      q[i].style.display = "none";
    });
  }
}
//cardsdark

function cardsdark(){
  var s = document.querySelectorAll(".font-wrapper");
  var p = document.querySelectorAll(".font-box");
  var q = document.querySelectorAll(".font-hidden");

  for (let i = 0; i < s.length; i++) {
    s[i].addEventListener("mouseover", function () {
      s[i].style.color = "black";
      s[i].style.backgroundColor = "white";
      p[i].style.display = "none";
      q[i].style.display = "block";
    });
  }
  for (let i = 0; i < s.length; i++) {
    s[i].addEventListener("mouseout", function () {
      s[i].style.color = "white";
      s[i].style.backgroundColor = "#1c1c1c";
      p[i].style.display = "block";
      q[i].style.display = "none";
    });
  }
};