
//import { projectList } from '../globals/dataStructure.js';
import { getOpenItem, setOpenItem } from '../globals/variables.js';
import { getClassOfTag, toggleItemState } from '../globals/getClass.js';

//import { generateUniqueId } from '../tools/uniqueId.js';
//import { isValidInput } from '../tools/validInput.js';
//import { isInert, onLocking } from '../tools/isInert.js';

export function handleItemUnfold(item, isUnfold) {
    const itemUnfold = getOpenItem();

    const {remark, btnBox} = getClassOfTag(item);

    if(item === itemUnfold || isUnfold){
        toggleItemState(item, remark, btnBox, false);
        setOpenItem(null);

    }  else {
        if(itemUnfold){
            const {remark: remarkUnfold, btnBox: btnBoxkUnfold} = getClassOfTag(item);
            toggleItemState(item, remarkUnfold, btnBoxkUnfold, false);
        }
        toggleItemState(item, remark, btnBox, true);
        setOpenItem(item);
    }
}