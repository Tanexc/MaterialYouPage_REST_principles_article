function showModalSheet() {
    const navigation = document.getElementById("navigation");
    navigation.classList.remove("closed");
}

function hideModalSheet() {
    const navigation = document.getElementById("navigation");
    navigation.classList.add("closed");
}

function modalSheetSelect(
    elementId,
    elementIdToDisable,
    backgroundColor
) {
    const item = document.getElementById(elementId);
    const itemToDisable = document.getElementById(elementIdToDisable);
    if (!item.classList.contains(backgroundColor)) {
        item.classList.add(backgroundColor);
        item.classList.add("on-" + backgroundColor + "-text");
        item.classList.remove("on-surface-text");
    }
    if (itemToDisable.classList.contains(backgroundColor)) {
        itemToDisable.classList.remove(backgroundColor);
        itemToDisable.classList.add("on-surface-text");
        itemToDisable.classList.remove("on-" + backgroundColor + "-text");
    }
    navigateTo(
        elementId
    );
    hideModalSheet()
}