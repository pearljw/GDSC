const createBtnEl = document.getElementById('createElement');
const updateBtnEl = document.getElementById('updateElement');
const deleteBtnEl = document.getElementById('deleteElement');

//This is for adding a new element
function addElement(tagName, textContent) {
    const newElement = document.createElement(tagName);
    newElement.textContent = textContent;

    return newElement;
}

createBtnEl.addEventListener('click', () => {
    const newTitle = addElement('h1', 'Hello, welcome to GDSC!');
    document.body.append(newTitle);
});


// This is for updating the element
function updateElement(tagName, newText) {
    const elementToUpdate = document.querySelector(tagName);

    if(!elementToUpdate) {
        console.warn(`No element ${`tagName`} found to update`);
        return;
    }
    elementToUpdate.textContent = newText;
}

updateBtnEl.addEventListener('click', () => {
    updateElement('h1', 'Thanks for coming, goodbye!')
});


// This is for deleting the element
function deleteElement(tagName){
    const elementToRemove = document.querySelector(tagName);

    if (!elementToRemove) {
        console.warn(`No element ${tagName} found`)
        return;
    }

    elementToRemove.remove(elementToRemove);
}

deleteBtnEl.addEventListener('click', () => {
    deleteElement('h1');
});