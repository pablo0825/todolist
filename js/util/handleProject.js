import { projectList } from "../globals/dataStructure.js";
import { projectInertMap } from "../globals/variables.js";
import { getClassOfTag } from "../globals/getClass.js";

import { generateUniqueId } from "../tools/uniqueId.js";
import { isValidInput } from "../tools/validInput.js";
import { isInert, onLocking } from "../tools/isInert.js";

import { renderProjects } from "./render.js";

export function handleNewProject() {
  const newProject = {
    id: generateUniqueId("project"),
    title: null,
    inert: false,
    items: [
      {
        id: "item-1",
        title: "項目 1",
        remark: "備註 1",
        checked: false,
        priority: "average",
      },
    ],
  };

  projectList.push(newProject); // 更新數據
  renderProjects(); // 渲染新的專案列表

  console.log(projectList);
}

export function handleTitleUpdates(e) {
  const project = e.closest(".project");
  const enterValue = e.value.trim();

  if (!isValidInput(enterValue)) return;

  const projectId = project.id;
  const projectData = projectList.find((p) => p.id === projectId);

  if (projectData) {
    projectData.title = enterValue;
  }

  console.log(projectList);
}

export function handleProjectInert(e) {
  const project = e.closest(".project");
  if (!project) return;

  const projectTitle = project.querySelector(".enter.enter_projecttitle");
  const projectDownbox = project.querySelector(".project_downbox");
  const projectBtnAdd = project.querySelector(".btn.btn_add");
  const items = project.querySelectorAll(".item"); // 使用 querySelectorAll 遍歷所有 item

  const projectId = project.getAttribute("id");

  if (!projectId) {
    console.error("Project ID not found");
    return;
  }

  const projectData = projectList.find((p) => p.id === projectId);

  let projectInert = projectInertMap.get(projectId) ?? true;

  if (projectInert) {
    isInert(projectTitle, projectDownbox, projectBtnAdd, null, null, true);

    items.forEach((item) => {
      // 在每個 item 中查找內部元素
      const {
        checkbox: itemChecked,
        title: itemTitle,
        urgent: itemBtnUrgent,
        average: itemBtnAverage,
        taketourtime: itemBtnTaketourtime,
      } = getClassOfTag(item);

      if (
        !itemChecked ||
        !itemTitle ||
        !itemBtnUrgent ||
        !itemBtnAverage ||
        !itemBtnTaketourtime
      ) {
        console.error("One or more required DOM elements were not found");
        return;
      }

      onLocking(
        projectBtnAdd,
        itemChecked,
        itemTitle,
        itemBtnUrgent,
        itemBtnAverage,
        itemBtnTaketourtime,
        true
      );
    });
    projectInertMap.set(projectId, false);

    if (projectData) {
      projectData.inert = true;
    }

    //project.style.display = 'none';
  } else {
    isInert(projectTitle, projectDownbox, projectBtnAdd, null, null, false);

    items.forEach((item) => {
      const {
        checkbox: itemChecked,
        title: itemTitle,
        urgent: itemBtnUrgent,
        average: itemBtnAverage,
        taketourtime: itemBtnTaketourtime,
      } = getClassOfTag(item);

      if (
        !itemChecked ||
        !itemTitle ||
        !itemBtnUrgent ||
        !itemBtnAverage ||
        !itemBtnTaketourtime
      ) {
        console.error("One or more required DOM elements were not found");
        return;
      }

      onLocking(
        projectBtnAdd,
        itemChecked,
        itemTitle,
        itemBtnUrgent,
        itemBtnAverage,
        itemBtnTaketourtime,
        false
      );
    });
    projectInertMap.set(projectId, true);

    if (projectData) {
      projectData.inert = false;
    }

    //project.style.display = 'flex';
  }

  console.log(
    `Project ${projectId} inert state:`,
    projectInertMap.get(projectId)
  );
}
