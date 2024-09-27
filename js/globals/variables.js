
export const gridDownbox =document.querySelector('.grid_downbox');

export const projectDownbox = document.querySelector('.project_downbox');

export const addproject = document.getElementById('btn-addproject');

export const projectInertMap = new Map();

let openItem = null; // 變數可變

export function getOpenItem() {
    return openItem;
}

export function setOpenItem(item) {
    openItem = item;
}
