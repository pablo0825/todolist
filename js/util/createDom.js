
import { generateUniqueId } from '../tools/uniqueId.js';
import { createTagAndClass } from '../tools/createDomFramework.js';

export function newProjectDom(projectTitle, projectInert) {

    const newProject = createTagAndClass('div', null, null, 'project');
    
    const uniqueId = generateUniqueId('project');
    newProject.id = uniqueId;

    const topBox = createTagAndClass('div', null, null, 'project_topbox');
    
    const dropdown = createTagAndClass('button', null, '<i class="fa-solid fa-play"></i>', 'btn', 'btn_dropdown');
    
    const titlebox = createTagAndClass('div', null, null, 'project_titlebox');

    const enterProjectTitle = createTagAndClass('input', projectTitle, null, 'enter', 'enter_projecttitle');
    enterProjectTitle.type = 'text';
    enterProjectTitle.placeholder = '專案列表';
    enterProjectTitle.value = projectTitle;

    const seal = createTagAndClass('button', null, '<i class="fa-solid fa-arrow-right-to-bracket"></i>', 'btn', 'btn_seal');

    const downBox = createTagAndClass('div', null, null,  'project_downbox');

    const add = createTagAndClass('button', null, '<i class="fa-solid fa-plus"></i>', 'btn', 'btn_add');
    
    newProject.appendChild(topBox);
    newProject.appendChild(downBox);
    newProject.appendChild(add);

    topBox.appendChild(dropdown);
    topBox.appendChild(titlebox);
    titlebox.appendChild(enterProjectTitle);
    titlebox.appendChild(seal);

    if (projectInert) {
        if(enterProjectTitle) enterProjectTitle.setAttribute('inert', '');
        if(downBox) downBox.setAttribute('inert', '');
        if(add) add.setAttribute('inert', '');
        if(add) add.classList.add('btn-locking');
    } else {
        if(enterProjectTitle) enterProjectTitle.removeAttribute('inert');
        if(downBox) downBox.removeAttribute('inert');
        if(add) add.removeAttribute('inert');
        if(add) add.classList.remove('btn-locking');
    }

    return newProject;
}


export function newItemDom(itemTitle, itemRemark, priority, checked, projectInert) {

    const newItem = createTagAndClass('div', null, null, 'item');

    const uniqueId = generateUniqueId('item');
    newItem.id = uniqueId;

    const checkbox = createTagAndClass('button', null, null, 'checkbox', `checkbox-${priority}`);
    checkbox.setAttribute('aria-checked', checked ? 'true' : 'false');

    const enterbox = createTagAndClass('div', null, null, 'item_enterbox');

    const deleteBtn = createTagAndClass('button', null, '<i class="fa-solid fa-xmark"></i>', 'btn', 'btn_delete');

    const enterItemTitle = createTagAndClass('input', itemTitle, null, 'enter', 'enter_itemtitle');
    enterItemTitle.type = 'text';
    enterItemTitle.placeholder = '標題';

    const enterItemRemark = createTagAndClass('input', itemRemark, null, 'enter', 'enter_itemremark');
    enterItemRemark.type = 'text';
    enterItemRemark.placeholder = '備註';

    const btnbox = createTagAndClass('div', null, null, 'item_btnbox');

    const urgent = createTagAndClass('button', '急', null, 'btn', 'btn_priority', 'urgent');
    const average = createTagAndClass('button', '普通', null, 'btn', 'btn_priority', 'average');
    const taketourtime = createTagAndClass('button', '慢慢來', null, 'btn', 'btn_priority', 'taketourtime');

    newItem.appendChild(checkbox);
    newItem.appendChild(enterbox);
    newItem.appendChild(deleteBtn);

    enterbox.appendChild(enterItemTitle);
    enterbox.appendChild(enterItemRemark);
    enterbox.appendChild(btnbox);

    btnbox.appendChild(urgent);
    btnbox.appendChild(average);
    btnbox.appendChild(taketourtime);

    if (projectInert) {
        if (enterItemRemark) enterItemRemark.setAttribute('inert', '');
        if (btnbox) btnbox.setAttribute('inert', '');

        if(checkbox) checkbox.classList.add('locking');
        if(enterItemTitle) enterItemTitle.classList.add('enter_itemtitle-locking');
        if(urgent) urgent.classList.add('btn-locking');
        if(average) average.classList.add('btn-locking');
        if(taketourtime) taketourtime.classList.add('btn-locking');

    } else {
        if (enterItemRemark) enterItemRemark.removeAttribute('inert');
        if (btnbox) btnbox.removeAttribute('inert');

        if(checkbox) checkbox.classList.remove('locking');
        if(enterItemTitle) enterItemTitle.classList.remove('enter_itemtitle-locking');
        if(urgent) urgent.classList.remove('btn-locking');
        if(average) average.classList.remove('btn-locking');
        if(taketourtime) taketourtime.classList.remove('btn-locking');
    }

    return newItem;
}