let notes = { data: [] };


let createNote = function() {
    let input = document.querySelector('#form-add-note input[type="text"]');
    let value = input.value;
    if (value != null) {
        notes.data.push(value);

        console.log(notes)

        input.value = "";
    } else {
        alert('Campo Vazio');
    }
}

document.addEventListener('DOMContentLoaded', function(event) {
    let sendNote = document.getElementById('form-add-note')
    sendNote.addEventListener('submit', function(e) {
        e.preventDefault();
        createNote();
    });
})