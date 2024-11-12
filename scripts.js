function navigateToPage(pageUrl) {
    document.querySelector('.container').style.transform = 'perspective(1000px) rotateY(-180deg)';
    setTimeout(() => {
        window.location.href = pageUrl;
    }, 600); // Wait for the transition to complete
}
