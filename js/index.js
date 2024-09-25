
import { addproject } from '../js/globals/variables.js';
import { handleNewProject, handleTitleUpdates, handleProjectInert } from '../js/util/handleProject.js';

import { toggleItemCheckbox, toggleProjectCheckbox } from './util/handleCheckbox.js';


let debounceTimer;

addproject.addEventListener('click', handleNewProject);

document.querySelector('.grid_topbox').addEventListener('click', (e) => {
    const target = e.target;

    if(target.closest('.checkbox')){
        toggleProjectCheckbox(target);
    }
});

document.querySelector('.grid_downbox').addEventListener('click', (e) => {
    const target = e.target;

    if(target.closest('.btn.btn_seal')){

        handleProjectInert(target);
    }

    if(target.closest('.checkbox')){
        toggleItemCheckbox(target);
    }
});

document.querySelector('.grid_downbox').addEventListener('input', (e) => {
    const target = e.target;

    if(target.closest('.enter_projecttitle')){

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(function() {
            handleTitleUpdates(target);
        }, 500); 
    }
});