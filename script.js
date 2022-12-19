let txtFromInput = document.getElementById("txt_input");
let saveBtn = document.getElementById("saveBtn");
let byTextBtn = document.getElementById("byText");
let byTimeBtn = document.getElementById("byTime");
let notesDiv = document.getElementById("notesDiv");

let sortAscendingText = true;
let sortAscendingTime = true;

let noteArr = checkNull();

function checkNull() {
  let check = localStorage.getItem("notes_key");
  if (check === null) {
    return [];
  } else {
    return JSON.parse(check);
  }
}

function pOnClick() {
  noteArr.forEach((note) => {
    let note_text = note.text;
    let p = document.createElement("p");
    p.innerText = note_text;
    notesDiv.appendChild(p);
  });
}

saveBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  let note = txtFromInput.value;
  let time = Date.now();
  let obj = { text: note, timestamp: time };
  noteArr.push(obj);
  notesDiv.innerHTML = "";
  pOnClick();
  localStorage.setItem("notes_key", JSON.stringify(noteArr));
});

byText.addEventListener("click", () => {
  sortAscendingText = !sortAscendingText;
  noteArr.sort((a, b) => {
    if (sortAscendingText) {
      return a.text.localeCompare(b.text);
    } else {
      return b.text.localeCompare(a.text);
    }
  });
  notesDiv.innerHTML = "";
  pOnClick();
});

byTime.addEventListener("click", () => {
  sortAscendingTime = !sortAscendingTime;
  noteArr.sort((a, b) => {
    if (sortAscendingTime) {
      return a.timestamp - b.timestamp;
    } else {
      return b.timestamp - a.timestamp;
    }
  });
  notesDiv.innerHTML = "";
  pOnClick();
});
