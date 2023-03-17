const swapTextState = (id) => {
  const element = document.getElementById(id);
  const button = document.getElementById("btn" + id.toString());
  if (element.style.display == "none") {
      element.style.display = "inline";
      button.innerHTML = "Less";
      button.style.backgroundColor = "white";
      button.style.color = "#0d6efd"
  } else if (element.style.display == "inline") {
      element.style.display = "none";
      button.innerHTML = "More";
      button.style = "revert";
  }
}
const deleteSession = (id) => {
  if (window.confirm("Are you sure you want to delete the hiking session?")) {
      handleDeleteSession(id);
  }
}

const handleDeleteSession = (id) => {
  $.ajax({
      url: `/sessions/${id}/delete`,
      type: 'post',
      success: () => {
          document.getElementById(`${id}-li`).style.display = "none";
          document.getElementById(`${id}`).style.display = "none";
      }
  })
}