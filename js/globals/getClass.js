
export function getClassOfTag(item) {
    return {
        checkbox: item.querySelector('.checkbox.checkbox-average'),

        title: item.querySelector('.enter.enter_itemtitle'),
        remark: item.querySelector('.enter.enter_itemremark'),

        btnBox: item.querySelector('.item_btnbox'),
        urgent: item.querySelector('.btn.btn_priority.urgent'),
        average: item.querySelector('.btn.btn_priority.average'),
        taketourtime: item.querySelector('.btn.btn_priority.taketourtime'),

        deleteBtn: item.querySelector('.btn.btn_delete')
    };
}

export function toggleItemState(item, remark, btnBox, isUnfold) {
    if (isUnfold) {
        item.classList.add('item_Unfold');
        remark.classList.add('enter_itemtitle-Unfold');
        btnBox.classList.add('item_btnbox-Unfol');

        remark.removeAttribute('inert');
        btnBox.removeAttribute('inert');
    } else {
        item.classList.remove('item_Unfold');
        remark.classList.remove('enter_itemtitle-Unfold');
        btnBox.classList.remove('item_btnbox-Unfol');

        remark.setAttribute('inert', '');
        btnBox.setAttribute('inert', '');
    }
}