function navigateTo(
    screen
) {
    const element = $("#screen");
    const title = $("#title");
    const icon = $("#icon");
    icon.empty();
    icon.load("screen/header/menuIcon.html")
    title.empty();
    title.load("screen/" + screen + "/title.html");
    element.empty();
    element.load("screen/" + screen + "/" + screen + ".html");
    window.scrollTo(0, 0);
}

function navigateToFragment(
    fragment
) {
    const element = $("#screen");
    const icon = $("#icon");
    icon.empty();
    icon.load("screen/header/backIcon.html")
    element.empty();
    element.load("screen/" + fragment);
    window.scrollTo(0, 0);
}
