
export function createTagAndClass(tagName, content = null, icon = null, ...classNames) {

    const tag = document.createElement(tagName);
    tag.classList.add(...classNames);
    if (content) tag.textContent = content;
    if (icon) tag.innerHTML = icon;

    return tag;
}