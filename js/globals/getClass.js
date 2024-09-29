export function getClassOfTag(item) {
  return {
    checkbox: item.querySelector(".checkbox"),

    title: item.querySelector(".enter.enter_itemtitle"),
    remark: item.querySelector(".enter.enter_itemremark"),

    btnBox: item.querySelector(".item_btnbox"),
    urgent: item.querySelector(".btn.btn_priority.urgent"),
    average: item.querySelector(".btn.btn_priority.average"),
    taketourtime: item.querySelector(".btn.btn_priority.taketourtime"),

    deleteBtn: item.querySelector(".btn.btn_delete"),
  };
}

export function toggleItemState(item, remark, btnBox, isUnfold) {
  if (isUnfold) {
    item.classList.add("item_unfold");
    remark.classList.add("unfold");
    btnBox.classList.add("item_btnbox-unfold");

    remark.removeAttribute("inert");
    btnBox.removeAttribute("inert");
  } else {
    item.classList.remove("item_unfold");
    remark.classList.remove("unfold");
    btnBox.classList.remove("item_btnbox-unfold");

    remark.setAttribute("inert", "");
    btnBox.setAttribute("inert", "");
  }
}
