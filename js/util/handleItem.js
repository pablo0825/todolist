import { projectList } from "../globals/dataStructure.js";
import { getOpenItem, setOpenItem } from "../globals/variables.js";
import { getClassOfTag, toggleItemState } from "../globals/getClass.js";

import { getProjectAndItem } from "../tools/getProjectAndItem.js";
import { handleItemUnfold } from "../tools/handleItemUnfold.js";
import { generateUniqueId } from "../tools/uniqueId.js";
import { isValidInput } from "../tools/validInput.js";
import { handleItemReorder } from "../tools/handleItemReorder.js";
//import { isInert, onLocking } from '../tools/isInert.js';

import { renderProjects } from "./render.js";

export function handleNewItem(e) {
  const project = e.closest(".project");
  if (!project) return;

  const projectId = project.getAttribute("id");

  if (!projectId) {
    console.error("Project ID not found");
    return;
  }

  const projectData = projectList.find((p) => p.id === projectId);

  if (projectData) {
    // 檢查 items 是否已經存在，如果不存在則初始化為空陣列
    if (!Array.isArray(projectData.items)) {
      projectData.items = [];
    }

    const newItem = {
      id: generateUniqueId("itme"), // 確保每個新項目有唯一的 ID，這裡可以生成唯一 ID
      title: null,
      remark: null,
      checked: null,
      priority: "average",
    };

    projectData.items.push(newItem); // 更新數據
    renderProjects(); // 渲染新的專案列表

    console.log(projectData.items); // 正確輸出專案的 items 列表
  }
}

export function handleItemDelete(e) {
  const elements = getProjectAndItem(e);
  if (!elements) return;

  const { projectId, itemID } = elements;

  const projectData = projectList.find((p) => p.id === projectId);

  if (projectData) {
    const itemIndex = projectData.items.findIndex((i) => i.id === itemID);

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

  const projectData = projectList.find((p) => p.id === projectId);

  if (projectData) {
    const itemIndex = projectData.items.findIndex((i) => i.id === itemID);

    if (itemIndex !== -1) {
      projectData.items[itemIndex].title = enterValue;
    }
    console.log(projectData.items[itemIndex].title); // 正確輸出專案的 items 列表
  }
}

export function handleTitleInteraction(e) {
  const item = e.closest(".item");
  if (!item) return;

  const classObj = getClassOfTag(item); // 檢查 getClassOfTag 是否返回正確物件
  const { title } = classObj;

  if (title && title.contains(e)) {
    handleItemUnfold(item, false);
  }
}

export function handleItemRemarkEnter(e) {
  const enterValue = e.value.trim();

  const elements = getProjectAndItem(e);
  if (!elements) return;

  const { projectId, itemID } = elements;

  if (!isValidInput(enterValue)) return;

  const projectData = projectList.find((p) => p.id === projectId);

  if (projectData) {
    const itemIndex = projectData.items.findIndex((i) => i.id === itemID);

    if (itemIndex !== -1) {
      projectData.items[itemIndex].remark = enterValue;
    }
    console.log(projectData.items[itemIndex].remark); // 正確輸出專案的 items 列表
  }
}

export function handleItemBtnBox(e) {
  const actionButtons = ["urgent", "average", "taketourtime"];
  const priorityType = actionButtons.find(
    (action) => e.target.closest && e.target.closest(`.${action}`)
  );

  if (priorityType) {
    const downBox = e.target.closest(".project_downbox");

    const project = e.target.closest(".project");
    const item = e.target.closest(".item");

    const projectId = project.getAttribute("id");
    const itemID = item.getAttribute("id");

    const classObj = getClassOfTag(item);
    const { checkbox } = classObj || {};

    if (downBox && item && checkbox) {
      checkbox.classList.remove(
        "checkbox-urgent",
        "checkbox-average",
        "checkbox-taketourtime"
      );
      checkbox.classList.add(`checkbox-${priorityType}`);

      handleItemUnfold(item, false); // 先執行展開操作

      setTimeout(() => {
        handleItemReorder(downBox); // 延遲0.3秒執行重新排序
      }, 300);

      e.stopPropagation();
    }
    const projectData = projectList.find((p) => p.id === projectId);

    if (projectData) {
      const itemIndex = projectData.items.findIndex((i) => i.id === itemID);

      if (itemIndex !== -1) {
        projectData.items[itemIndex].priority = priorityType;
      }
      console.log(projectData.items[itemIndex].priority); // 正確輸出專案的 items 列表
    }
  }
}
