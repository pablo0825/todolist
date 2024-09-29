export function handleItemReorder(downBox) {
  const fragment = document.createDocumentFragment();
  const items = Array.from(downBox.children);

  const [uncheckedItems, checkedItems] = items.reduce(
    (acc, item) => {
      const checkbox = item.querySelector(".checkbox");
      checkbox.getAttribute("aria-checked") === "true"
        ? acc[1].push(item)
        : acc[0].push(item);
      return acc;
    },
    [[], []]
  );

  const urgentItem = uncheckedItems.filter((item) =>
    item.querySelector(".checkbox.checkbox-urgent")
  );
  const averageItem = uncheckedItems.filter((item) =>
    item.querySelector(".checkbox.checkbox-average")
  );
  const taketourtimeItem = uncheckedItems.filter((item) =>
    item.querySelector(".checkbox.checkbox-taketourtime")
  );

  [...urgentItem, ...averageItem, ...taketourtimeItem, ...checkedItems].forEach(
    (item) => fragment.appendChild(item)
  );

  downBox.innerHTML = ""; // 清空原始內容
  downBox.appendChild(fragment); // 將重新排序的元素添加回去
}
