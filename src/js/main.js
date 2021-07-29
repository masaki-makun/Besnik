import "../css/style.scss";
import "../css/form.scss";

// -- panel, overlay表示非表示切り替え処理
const panelToggle = () => {
  const panel = document.querySelector(".header-nav");
  const menuBtn = document.querySelector(".burger");
  const overlay = document.querySelector(".overlay");
  const PANEL_TOGGLE_CLASS = "nav-active";
  const OVERLAY_TOGGLE_CLASS = "overlay-active";
  menuBtn.addEventListener("click", () => {
    panel.classList.toggle(PANEL_TOGGLE_CLASS);
    overlay.classList.toggle(OVERLAY_TOGGLE_CLASS);
    topBtnHide();
    moveMenuBtn();
  });
  overlay.addEventListener("click", () => {
    if (overlay.classList.contains(OVERLAY_TOGGLE_CLASS)) {
      overlay.classList.remove(OVERLAY_TOGGLE_CLASS);
      panel.classList.remove(PANEL_TOGGLE_CLASS);
      topBtnActive();
      returnMenuBtn();
    }
  });
};
panelToggle();
// panel, overlay表示非表示切り替え処理 --

// --Topに戻るボタン処理
const returnToTop = (elmId, duration) => {
  const topButton = document.getElementById(elmId);
  const getScrolled = () => {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : document.documentElement.scrollTop;
  };
  window.addEventListener("scroll", () => {
    getScrolled() > 500 ? topBtnActive() : topBtnHide();
  });
  topButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      const begin = new Date() - 0;
      const yOffset = window.pageYOffset;
      const timer = setInterval(function () {
        let current = new Date() - begin;
        if (current > duration) {
          clearInterval(timer);
          current = duration;
          topBtnHide();
        }
        window.scrollTo(0, yOffset * (1 - current / duration));
      }, 10);
    },
    false
  );
};
returnToTop("return-top", 500);
// Topに戻るボタン処理 --

// -- TopBtn非表示処理
const topBtnHide = () => {
  const topBtn = document.querySelector("#return-top");
  const TOP_BTN_ADD_CLASS = "is-hide";
  topBtn.classList.add(TOP_BTN_ADD_CLASS);
};
//  TopBtn非表示処理 --

// -- TopBtn表示処理
const topBtnActive = () => {
  const topBtn = document.querySelector("#return-top");
  const TOP_BTN_REMOVE_CLASS = "is-hide";
  topBtn.classList.remove(TOP_BTN_REMOVE_CLASS);
};
//  TopBtn表示処理 --

// -- メニューボタンがバツ印に変形する処理
const moveMenuBtn = () => {
  const lines = document.querySelectorAll(".line");
  const BURGER_TOGGLE_CLASS = "toggle";
  lines.forEach((line) => {
    line.classList.toggle(BURGER_TOGGLE_CLASS);
  });
};
// メニューボタンがバツ印に変形する処理 --

// メニューボタンが元の形に戻る処理
const returnMenuBtn = () => {
  const lines = document.querySelectorAll(".line");
  const BURGER_TOGGLE_CLASS = "toggle";
  lines.forEach((line) => {
    line.classList.remove(BURGER_TOGGLE_CLASS);
  });
};
// メニューボタンが元の形に戻る処理 --

// -- ナビのリンクをクリックしたらパネルを閉じる処理
const panelClose = () => {
  const panel = document.querySelector(".header-nav");
  const overlay = document.querySelector(".overlay");
  const PANEL_TOGGLE_CLASS = "nav-active";
  const OVERLAY_TOGGLE_CLASS = "overlay-active";
  const navLinks = document.querySelectorAll(".header-nav-link");
  const headerButtons = document.querySelectorAll(".header-button");
  const width = window.innerWidth;
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        width < 768 &&
        panel.classList.contains(PANEL_TOGGLE_CLASS) &&
        overlay.classList.contains(OVERLAY_TOGGLE_CLASS)
      ) {
        panel.classList.remove(PANEL_TOGGLE_CLASS);
        overlay.classList.remove(OVERLAY_TOGGLE_CLASS);
        returnMenuBtn();
      }
    });
  });
  headerButtons.forEach((headerButton) => {
    headerButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        width < 768 &&
        panel.classList.contains(PANEL_TOGGLE_CLASS) &&
        overlay.classList.contains(OVERLAY_TOGGLE_CLASS)
      ) {
        panel.classList.remove(PANEL_TOGGLE_CLASS);
        overlay.classList.remove(OVERLAY_TOGGLE_CLASS);
        returnMenuBtn();
      }
    });
  });
};
panelClose();
// ナビのリンクをクリックしたらパネルを閉じる処理 --

// --ページ内スクロール処理
const smoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  const panel = document.querySelector(".header-nav");
  const overlay = document.querySelector(".overlay");
  const PANEL_TOGGLE_CLASS = "nav-active";
  const OVERLAY_TOGGLE_CLASS = "overlay-active";
  links.forEach((link) => {
    link.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        let href = link.getAttribute("href");
        let targetElement = document.getElementById(href.replace("#", ""));
        const offset = window.pageYOffset;
        const rect = targetElement.getBoundingClientRect().top;
        const gap = 100;
        const target = rect + offset - gap;
        window.scrollTo({
          top: target,
          behavior: "smooth",
        });
        panel.classList.remove(PANEL_TOGGLE_CLASS);
        overlay.classList.remove(OVERLAY_TOGGLE_CLASS);
        topBtnActive();
      },
      false
    );
  });
};
smoothScroll();
// ページ内スクロール処理 --

// form.html３推移処理
const goToForm = () => {
  const linkBtns = document.querySelectorAll(".header-button");
  linkBtns.forEach((linkBtn) => {
    linkBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = linkBtn.getAttribute("href");
      setTimeout(() => {
        window.location = url;
      }, 200);
    });
  });
};
goToForm();
// form.html推移処理 --
