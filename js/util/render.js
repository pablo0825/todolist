
import { newProjectDom, newItemDom } from './createDom.js';
import { projectList } from '../globals/dataStructure.js';
import { gridDownbox } from '../globals/variables.js';

export function renderProjects() {
    gridDownbox.innerHTML = ''; // 清空現有內容

    projectList.forEach(project => {
        const projectDom = newProjectDom(project.title, project.id);
        projectDom.id = project.id;

        const downBox = projectDom.querySelector('.project_downbox');

        project.items.forEach(item => {
            const itemDom = newItemDom(item.title, item.remark, item.priority, item.checked);
            itemDom.id = item.id;
            downBox.appendChild(itemDom);
        });

        gridDownbox.appendChild(projectDom);
    });
}
