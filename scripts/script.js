window.addEventListener("load", () => {
    const blob = document.getElementById("blob");
    document.body.addEventListener("pointermove", ({clientX, clientY}) => {
        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY}px`;
    });
});