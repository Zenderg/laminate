import closeUrl from "../../images/close_burger.svg";
import burgerUrl from "../../images/burger.svg";

const layer = document.querySelector(".menu__layer");

export const hideMenu = (burger) => {
    document.body.style.overflowY = "visible";
    document.querySelector(".menu__mobile").classList.remove("menu-active");
    document.querySelector(".wrapper").classList.remove("wrapper-active");
    burger.src = burgerUrl;
    burger.classList.remove("burger-active");
};

export const showMenu = (burger) => {
    document.body.style.overflowY = "hidden";
    document.querySelector(".menu__mobile").classList.add("menu-active");
    document.querySelector(".wrapper").classList.add("wrapper-active");
    burger.src = closeUrl;
    burger.classList.add("burger-active");
};

export const showLayer = () => {
    layer.classList.add("layer-active");
};

export const hideLayer = () => {
    layer.classList.remove("layer-active");
};
