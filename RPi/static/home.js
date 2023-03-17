var sessions = []
var chart = {}

const updateSessions = (data) => {
  sessions = data.reduce(
    (acc, curr, i) => {
      acc[i] = {
        id: curr[0],
        km: curr[1],
        steps: curr[2],
        kcal: curr[3],
      };
      return acc; 
    }
  , []);
}


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
          sessions = sessions.filter(s => s.id != id);
          updateChart();
      }
  })
}

const updateChart = () => {
  chart.data = {
    labels: sessions.map(s => `Session ${s.id}`),
    datasets: [{
      label: 'Travelled distance [km]',
      data: sessions.map(s => s.km),
      borderWidth: 1
    }]
  };
  chart.update();
}

const updateAndRender = (data) => {
  updateSessions(data);
  renderChart(sessions);
}

const renderChart = ( sessions ) => {
  const canvas = document.getElementById('barChart');
  const ctx = canvas.getContext("2d");
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sessions.map(s => `Session ${s.id}`),
      datasets: [{
        label: 'Travelled distance [km]',
        data: sessions.map(s => s.km),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  chart.update();
}
