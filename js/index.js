
import { addproject } from '../js/globals/variables.js';
import { handleNewProject, handleTitleUpdates } from '../js/util/handleProject.js';

let debounceTimer;

addproject.addEventListener('click', handleNewProject);

document.querySelector('.grid_downbox').addEventListener('click', (e) => {
    const target = e.target;
});

document.querySelector('.grid_downbox').addEventListener('input', (e) => {
    const target = e.target;
    console.log(1);

    if(target.closest('.enter_projecttitle')){

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(function() {
            handleTitleUpdates(target);
        }, 300); 
    }
});