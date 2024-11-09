document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

function search() {
    const query = document.getElementById('searchBar').value;
    alert(`You searched for: ${query}`);
}