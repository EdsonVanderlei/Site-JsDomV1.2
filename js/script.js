function InitTab() {
  const tablist = document.querySelectorAll(".jslist li");
  console.log(tablist);
  const tababout = document.querySelectorAll(".jsabout div");
  console.log(tababout);
  tababout[0].classList.add("active");
  tablist[0].classList.add("active");
  if (tablist.length && tababout.length) {
    function activetab(index) {
      tablist.forEach((item) => {
        item.classList.remove("active");
      });
      tablist[index].classList.add("active");
      tababout.forEach((tab) => {
        tab.classList.remove("active");
      });
      tababout[index].classList.add("active");
    }

    tablist.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        activetab(index);
      });
    });
  }
}
InitTab();

function InitAccordion() {
  const accordion = document.querySelectorAll(".js-accordion dt");
  if (accordion.length) {
    function active() {
      console.log(this.nextElementSibling);
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }

    accordion.forEach((item) => {
      item.addEventListener("click", active);
    });
  }
}
InitAccordion();

function scroll() {
  const scroll = document.querySelectorAll('.menu a[href^= "#"]');
  if (scroll.length) {
    function ScrollAc(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const element = document.querySelector(href);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    scroll.forEach((item) => {
      item.addEventListener("click", ScrollAc);
    });
  }
}
scroll();

const show = document.querySelectorAll(".js-content");

const height = window.innerHeight * 0.6;

function InitScroll() {
  function scrollanima() {
    show.forEach((item) => {
      const showtop = item.getBoundingClientRect().top;
      const top = showtop - height < 0;
      if (top) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", scrollanima);
}
InitScroll();

function lap() {
  function laptop(item) {
    this.element = function () {
      return document.querySelector(item);
    };

    this.active = function () {
      this.element().classList.add("active");
      this.element().nextElementSibling.classList.add("active");
    };
    this.desactive = function () {
      this.element().classList.remove("active");
      this.element().previousElementSibling.classList.remove("active");
    };
  }

  const lap1 = new laptop("#lap1");
  const lap2 = new laptop("#lap2");

  lap1.element().addEventListener("click", () => {
    lap1.active();
  });
  lap2.element().addEventListener("click", () => {
    lap2.desactive();
  });
}
lap();
function writer() {
  function write(elemento, velocidade) {
    const writer = document.querySelector(elemento);
    const arraywrite = writer.innerHTML.split("");

    writer.innerHTML = "";

    arraywrite.forEach((letter, index) => {
      setTimeout(() => {
        writer.innerHTML += letter;
      }, velocidade * index);
    });
  }

  write("#by", 900);
  write(".jsabout div.active p", 25);
  const touch = document.querySelectorAll(".tab-list li");
  touch.forEach((item) => {
    item.addEventListener("click", () => {
      write(".jsabout div.active p", 10);
    });
  });
}
writer();
function avisos() {
  const avisos = document.querySelectorAll(".js-exit");

  avisos.forEach((aviso) => {
    aviso.addEventListener("click", () => {
      document.querySelector(".modal").classList.toggle("active");
    });
  });
}
avisos();

function getup() {
  function rocket(elemento) {
    this.element = document.querySelector(elemento);

    this.header = document.querySelector(".header");

    this.element.addEventListener("click", () => {
      this.header.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
  rocket(".top");
}
getup();
