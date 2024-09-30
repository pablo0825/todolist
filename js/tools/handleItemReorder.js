import { projectList } from "../globals/dataStructure.js";

import { renderProjects } from "../util/render.js";

export function handleItemReorder(projectId) {

  const projectData = projectList.find((p) => p.id === projectId);
  if (!projectData) return;

  const uncheckedItems = projectData.items.filter(item => !item.checked);
  const checkedItems = projectData.items.filter(item => item.checked);

  const urgentItems = uncheckedItems.filter(item => item.priority === 'urgent');
  const averageItems = uncheckedItems.filter(item => item.priority === 'average');
  const taketourtimeItems = uncheckedItems.filter(item => item.priority === 'taketourtime');

  const orderedItems = [...urgentItems, ...averageItems, ...taketourtimeItems, ...checkedItems];

  projectData.items = orderedItems;

  renderProjects();
}
