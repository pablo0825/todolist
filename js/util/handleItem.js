
import { projectList } from '../globals/dataStructure.js';
import { getOpenItem, setOpenItem } from '../globals/variables.js';
import { getClassOfTag, toggleItemState } from '../globals/getClass.js';

import { getProjectAndItem } from '../tools/getProjectAndItem.js';
import { handleItemUnfold } from '../tools/handleItemUnfold.js';
//import { generateUniqueId } from '../tools/uniqueId.js';
import { isValidInput } from '../tools/validInput.js';
//import { isInert, onLocking } from '../tools/isInert.js';

import { renderProjects } from './render.js';

export function handleNewItem(btnAdd) {
    
    const project = btnAdd.closest('.project');
    if (!project) return;

    const projectId = project.getAttribute('id');

    if (!projectId) {
        console.error('Project ID not found');
        return;
    }

    const projectData = projectList.find(p => p.id === projectId);

    if (projectData) {
        // 檢查 items 是否已經存在，如果不存在則初始化為空陣列
        if (!Array.isArray(projectData.items)) {
            projectData.items = [];
        }

        const newItem = {
            id: 'item-1', // 確保每個新項目有唯一的 ID，這裡可以生成唯一 ID
            title: null,
            remark: null,
            checked: false,
            priority: 'average'
        };

        projectData.items.push(newItem); // 更新數據
        renderProjects(); // 渲染新的專案列表

        console.log(projectData.items); // 正確輸出專案的 items 列表
    }
}

export function handleItemDelete(btnDeleteItem) {

    const elements = getProjectAndItem(btnDeleteItem);
    if (!elements) return;

    const { projectId, itemID } = elements;

    const projectData = projectList.find(p => p.id === projectId);

    if (projectData) {
        const itemIndex = projectData.items.findIndex(i => i.id === itemID);

        if (itemIndex > -1) {
            projectData.items.splice(itemIndex, 1);
        }

        renderProjects(); // 渲染新的專案列表

        console.log(projectData.items); // 正確輸出專案的 items 列表
    }
}

export function handleItemTitleEnter(e) {

    const enterValue = e.value.trim(); 

    const elements = getProjectAndItem(e);
    if (!elements) return;

    const { projectId, itemID } = elements;

    if (!isValidInput(enterValue)) return;
    
    const projectData = projectList.find(p => p.id === projectId);

    if (projectData) {
        const itemData = projectData.items.find(i => i.id === itemID);

        if (itemData) {
            itemData.title = enterValue;
        }
        console.log(itemData.title); // 正確輸出專案的 items 列表
    }
}