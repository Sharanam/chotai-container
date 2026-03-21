function myPopup(message) {
  // Create a popup element
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.style.position = "fixed";
  popup.style.top = "20px";
  popup.style.right = "20px";
  popup.style.backgroundColor = "#333";
  popup.style.color = "#fff";
  popup.style.padding = "10px 20px";
  popup.style.borderRadius = "5px";
  popup.style.zIndex = "1000";
  popup.style.opacity = "0";
  popup.style.transition = "opacity 0.5s";

  // Append the popup to the body
  document.body.appendChild(popup);

  // Fade in the popup
  setTimeout(() => {
    popup.style.opacity = "1";
  }, 100);

  // Remove the popup after 3 seconds
  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 500);
  }, 3000);
}
function saveContent() {
  const editor = document.querySelector(".editor");

  if (editor) {
    localStorage.setItem("editorContent", editor.innerHTML);
    myPopup("Content saved to localStorage!");
  }
}

document.addEventListener("keydown", function (event) {
  // Check for Ctrl+S or Cmd+S (Mac)
  if ((event.ctrlKey || event.metaKey) && event.key === "s") {
    event.preventDefault();
    saveContent();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Load saved content from localStorage when the page loads
  const savedContent = localStorage.getItem("editorContent");

  if (savedContent) {
    const editor = document.querySelector(".editor");
    if (editor) {
      editor.innerHTML = savedContent; // Use .innerHTML to restore formatting
      console.log("Content loaded from localStorage!");
    }
  }
});

// auto save every 3 seconds with debounce
let autoSaveTimeout;

function autoSave() {
  clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(() => {
    saveContent();
  }, 3000);
}

// document.querySelector('.editor').addEventListener('input', autoSave);
// above is not possible for contenteditable div, so we will use mutation observer
const editor = document.querySelector(".editor");
const observer = new MutationObserver(autoSave);
observer.observe(editor, {
  childList: true,
  subtree: true,
  characterData: true,
});
