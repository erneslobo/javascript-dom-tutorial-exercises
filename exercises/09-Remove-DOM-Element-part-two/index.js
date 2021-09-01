let list = document.querySelector("#parentLi");
let childs = list.childNodes;
childs[1].parentNode.removeChild(childs[3]);
