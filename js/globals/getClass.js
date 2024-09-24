
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