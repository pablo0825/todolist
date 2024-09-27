

export function getProjectAndItem(e) {
    const project = e.closest('.project');
    if (!project) {
        console.error('Project element not found');
        return null;
    }

    const projectId = project.getAttribute('id');
    if (!projectId) {
        console.error('Project ID not found');
        return null;
    }

    const item = e.closest('.item');
    if (!item) {
        console.error('Item element not found');
        return null;
    }

    const itemID = item.getAttribute('id');
    if (!itemID) {
        console.error('Item ID not found');
        return null;
    }

    return { project, projectId, item, itemID };
}