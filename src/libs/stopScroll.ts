const stopScroll = (on: boolean) => {
    if (on) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
};

export default stopScroll;