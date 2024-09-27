
import { projectList, projectFilterList } from '../globals/dataStructure.js';
import { handleItemUnfold } from '../tools/handleItemUnfold.js';


export function toggleItemCheckbox(checkbox) {

    const project = checkbox.closest('.project');
    const item = project.querySelector('.item');

    const projectId = project.getAttribute('id');
    const itemtId = item.getAttribute('id');

    const isChecked = checkbox.getAttribute('aria-checked') === 'true';
    checkbox.setAttribute('aria-checked', !isChecked ? 'true' : 'false');

    handleItemUnfold(item, !isChecked);

    const projectData = projectList.find(p => p.id === projectId);

    if (projectData) {
        const itemData = projectData.items.find(i => i.id === itemtId);

        if (itemData) {
            itemData.checked = !isChecked;  // 更新資料結構中的狀態
        }
    }
}

export function toggleProjectCheckbox(checkbox) {

    const filterCheckboxId = checkbox.getAttribute('id');

    const isChecked = checkbox.getAttribute('aria-checked') === 'true';
    checkbox.setAttribute('aria-checked', !isChecked ? 'true' : 'false');

    const filterCheckboxData = projectFilterList.find(p => p.id === filterCheckboxId);

    if (filterCheckboxData && ["finish-item", "delete-item", "archive-project"].includes(filterCheckboxId)) {
        filterCheckboxData.checked = !isChecked;

    }
}

