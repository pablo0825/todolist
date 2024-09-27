
export function isInert(projecTitle, downbox, btnAdd, itemRemark,  itemBtnBox, isInert) {
    if(isInert){

        if (projecTitle) projecTitle.setAttribute('inert', '');
        if (downbox) downbox.setAttribute('inert', '');
        if (btnAdd) btnAdd.setAttribute('inert', '');

        if (itemRemark) itemRemark.setAttribute('inert', '');
        if (itemBtnBox) itemBtnBox.setAttribute('inert', '');

    }else {

        if (projecTitle) projecTitle.removeAttribute('inert');
        if (downbox) downbox.removeAttribute('inert');
        if (btnAdd) btnAdd.removeAttribute('inert');

        if (itemRemark) itemRemark.removeAttribute('inert');
        if (itemBtnBox) itemBtnBox.removeAttribute('inert');
    }
}

export function onLocking(btnAdd, itemChecked, itemTitle, itemBtnUrgent, itemBtnAverage, itemBtnTaketourtime, isLocking) {
    if(isLocking){

        if(btnAdd) btnAdd.classList.add('btn-locking');

        if(itemChecked) itemChecked.classList.add('locking');
        if(itemTitle) itemTitle.classList.add('enter_itemtitle-locking');
        if(itemBtnUrgent) itemBtnUrgent.classList.add('btn-locking');
        if(itemBtnAverage) itemBtnAverage.classList.add('btn-locking');
        if(itemBtnTaketourtime) itemBtnTaketourtime.classList.add('btn-locking');

    } else {
        if(btnAdd) btnAdd.classList.remove('btn-locking');

        if(itemChecked) itemChecked.classList.remove('locking');
        if(itemTitle) itemTitle.classList.remove('enter_itemtitle-locking');
        if(itemBtnUrgent) itemBtnUrgent.classList.remove('btn-locking');
        if(itemBtnAverage) itemBtnAverage.classList.remove('btn-locking');
        if(itemBtnTaketourtime) itemBtnTaketourtime.classList.remove('btn-locking');

    }
}