import { addproject } from "../js/globals/variables.js";
import {
  handleNewProject,
  handleTitleUpdates,
  handleProjectInert,
} from "../js/util/handleProject.js";

import {
  toggleItemCheckbox,
  toggleProjectCheckbox,
} from "./util/handleCheckbox.js";
import {
  handleNewItem,
  handleItemDelete,
  handleItemTitleEnter,
  handleTitleInteraction,
  handleItemRemarkEnter,
  handleItemBtnBox,
} from "./util/handleItem.js";

let debounceTimer;

addproject.addEventListener("click", handleNewProject);

document.querySelector(".grid_topbox").addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest(".checkbox")) {
    toggleProjectCheckbox(target);
  }
});

document.querySelector(".grid_downbox").addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest(".btn.btn_seal")) {
    handleProjectInert(target);
  }

  if (target.matches(".checkbox")) {
    toggleItemCheckbox(target);
  }

  if (target.matches(".btn.btn_add")) {
    handleNewItem(target);
  }

  if (target.matches(".btn.btn_delete")) {
    handleItemDelete(target);
  }

  if (target.closest(".enter.enter_itemtitle")) {
    handleTitleInteraction(target);
  }

  if (target.closest(".item_btnbox")) {
    handleItemBtnBox(e);
  }
});

document.querySelector(".grid_downbox").addEventListener("input", (e) => {
  const target = e.target;

  if (target.matches(".enter_projecttitle")) {
    clearTimeout(target.dataset.debounceTimer);
    target.dataset.debounceTimer = setTimeout(function () {
      handleTitleUpdates(target);
    }, 500);
  } else if (target.matches(".enter.enter_itemtitle")) {
    clearTimeout(target.dataset.debounceTimer);
    target.dataset.debounceTimer = setTimeout(function () {
      handleItemTitleEnter(target);
    }, 300);
  } else if (target.matches(".enter.enter_itemremark")) {
    clearTimeout(target.dataset.debounceTimer);
    target.dataset.debounceTimer = setTimeout(function () {
      handleItemRemarkEnter(target);
    }, 300);
  }
});
