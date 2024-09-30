import { projectList, projectFilterList } from "../globals/dataStructure.js";
import { getOpenItem, setOpenItem } from "../globals/variables.js";
import { getClassOfTag, toggleItemState } from "../globals/getClass.js";

import { handleItemUnfold } from "../tools/handleItemUnfold.js";
import { getProjectAndItem } from "../tools/getProjectAndItem.js";
import { handleItemReorder } from "../tools/handleItemReorder.js";

export function toggleItemCheckbox(checkbox) {

  const elements = getProjectAndItem(checkbox);
  if (!elements) return;

  const { projectId, item, itemID } = elements;

  const isChecked = checkbox.getAttribute("aria-checked") === "true";
  checkbox.setAttribute("aria-checked", !isChecked ? "true" : "false");

  if (!isChecked) {
    handleItemUnfold(item, !isChecked);
    setOpenItem(null);
  }

  setTimeout(() => {
    handleItemReorder(projectId); // 延遲0.3秒執行重新排序
  }, 300);

  const projectData = projectList.find((p) => p.id === projectId);

  if (projectData) {
    const itemIndex = projectData.items.findIndex((i) => i.id === itemID);

    if (itemIndex !== -1) {
      projectData.items[itemIndex].checked = !isChecked;
    }
    console.log(projectData.items[itemIndex].checked);
  }
}

export function toggleProjectCheckbox(checkbox) {
  const filterCheckboxId = checkbox.getAttribute("id");

  const isChecked = checkbox.getAttribute("aria-checked") === "true";
  checkbox.setAttribute("aria-checked", !isChecked ? "true" : "false");

  const filterCheckboxData = projectFilterList.find(
    (p) => p.id === filterCheckboxId
  );

  if (
    filterCheckboxData &&
    ["finish-item", "delete-item", "archive-project"].includes(filterCheckboxId)
  ) {
    filterCheckboxData.checked = !isChecked;
  }
}
