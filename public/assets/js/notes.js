const $displayArea = document.querySelector("display-area");
const $addNotes = document.querySelector("add-notes")

const printResults = resultArr => {
    console.log(resultArr);

    const noteHTML = resultArr.map(({ title, text }) => {
        return `
        <div class="col-12 col-md-5 mb-3">
          <div class="card p-3" data-id=${id}>
            <h4 class="text-primary">${title}</h4>
            <p>${text}
            </p>
          </div>
        </div>
          `;
    });

    $displayArea.innerHTML = noteHTML.join('');
};

const getNotes = (formData = {}) => {
    let queryUrl = "/api/db?";

    Object.entries(formData).forEach(([key, value]) => {
        queryUrl =+ `${key}=${value}&`
    });

    fetch(queryUrl)
    .then(response => {
        if(!response.ok) {
            return alert(`Error: ${response.statusText}`);
        }
        return response.json();
    })
    .then(notesArr => {
        printResults(notesArr);
    });
};

const handleAddNotesSubmit = event => {
    event.preventDefault();
    const titleHTML = $addNotes.querySelector('[title="title"]')
    const title = titleHTML.value;

    const textHTML = $addNotes.querySelector('[name="text"]');
    const text = textHTML.value;

    const noteObject = { title, text };

    getNotes(noteObject);
};

$addNotes.addEventListener("submit", handleAddNotesSubmit);

getNotes();