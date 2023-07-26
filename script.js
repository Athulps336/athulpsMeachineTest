function expand() {
        document.getElementById('nav-links-expand').style.display = 'block';
        document.getElementById('close').style.display = 'block'
        document.getElementById('expandbtn').style.display = 'none'
}

function collapse() {
    document.getElementById('nav-links-expand').style.display = 'none';
    document.getElementById('close').style.display = 'none';
    document.getElementById('expandbtn').style.display = 'block'
}
