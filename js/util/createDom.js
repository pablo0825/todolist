
import { generateUniqueId } from '../tools/uniqueId.js';
import { createTagAndClass } from '../tools/createDomFramework.js';

export function newProjectDom(projectTitle) {

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

    return newProject;
}


export function newItemDom(itemTitle, itemRemark, priority, checked,) {

    const newItem = createTagAndClass('div', null, null, 'item');

    const uniqueId = generateUniqueId('item');
    newItem.id = uniqueId;

    const checkbox = createTagAndClass('button', null, null, 'checkbox', `btn_checkbox-${priority}`);
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

    return newItem;
}