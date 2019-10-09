// https://medium.com/kevin-salters-blog/reordering-a-javascript-array-based-on-a-drag-and-drop-interface-e3ca39ca25c
export const reorderArray = (event, originalArray) => {
  const movedItem = originalArray.filter((item, index) => index === event.oldIndex);
  const remainingItems = originalArray.filter((item, index) => index !== event.oldIndex);

  const reorderedItems = [
    ...remainingItems.slice(0, event.newIndex),
    movedItem[0],
    ...remainingItems.slice(event.newIndex)
  ];

  return reorderedItems;
};

export const stringToNode = (domString: string): Node => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = domString;
  return wrapper.firstChild;
};
