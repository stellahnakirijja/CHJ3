const updateNameBtn = document.getElementById('updateNameBtn');
const guestName = document.getElementById('guestName');
const nameInput = document.getElementById('nameInput');
const downloadBtn = document.getElementById('downloadBtn');
const card = document.getElementById('card');

// Update guest name dynamically
updateNameBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if(name) {
        guestName.textContent = name;
        nameInput.value = '';
    } else {
        alert("Please enter a name!");
    }
});

// Download card as PNG using html2canvas
downloadBtn.addEventListener('click', () => {
    html2canvas(card).then(canvas => {
        const link = document.createElement('a');
        link.download = 'invitation-card-2.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
