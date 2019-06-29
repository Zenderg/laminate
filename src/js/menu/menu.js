import {hideLayer, hideMenu, showLayer, showMenu} from "./menuHelpers";

export default () => {
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
        if (burger.classList.contains("burger-active")) {
            hideMenu(burger);
            hideLayer();
        }
        else if (!burger.classList.contains("burger-active")) {
            showMenu(burger);
            showLayer();
        }
    });

    document.addEventListener("click", (e) => {
        const target = e.target;

        if (!target.classList.contains("menu__mobile") &&
            !target.classList.contains("burger")) {
            hideMenu(burger);
            hideLayer();
        }
    });
}
