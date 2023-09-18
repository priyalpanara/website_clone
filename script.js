const plusIcons = document.querySelectorAll('.fa-plus');
const answers = document.querySelectorAll('.ans1');

plusIcons.forEach(function(icon, index) {
icon.addEventListener('click', function() {
if (answers[index].style.display === 'none') {
    answers[index].style.display = 'block';
} else {
    answers[index].style.display = 'none';
}
});
});