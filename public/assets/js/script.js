const $addNotes = document.querySelector("#add-notes");

const handleAddNotesSubmit = event => {
  event.preventDefault();

  const title = $addNotes.querySelector('[title="note-title"]').value;
  const text = $addnotes.querySelector('[name="note-text]').value;

  const noteObj = { title, text };
  console.log(noteObj);
  fetch("api/db", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(noteObj)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    alert("Error: " + response.statusText);
  })
  .then(postResponse => {
    console.log(postResponse);
    alert("note taken!");
  });
};

$addnotes.addEventListener("submit", handleAddNotesSubmit);