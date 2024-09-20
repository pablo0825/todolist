
import { generateUniqueId } from '../tools/uniqueId.js';
import { projectList } from '../globals/dataStructure.js';
import { renderProjects } from './render.js';
import { isValidInput } from '../tools/validInput.js';


export function handleNewProject() {
    const newProject = {
        id: generateUniqueId('project'),
        title: null,
        items: [ {id: 'item-1', title: '項目 1', remark: '備註 1', checked: false, priority: 'average' }]
    };
    
    projectList.push(newProject); // 更新數據    
    renderProjects(); // 渲染新的專案列表

    console.log(projectList);
}


export function handleTitleUpdates(e) {

    const project = e.closest('.project'); 
    const enterValue = e.value.trim(); 

    if (!isValidInput(enterValue)) return;

    const projectId = project.id; 
    const projectData = projectList.find(p => p.id === projectId); 

    if (projectData) {
        projectData.title = enterValue; 
    }

    console.log(projectList);
}
