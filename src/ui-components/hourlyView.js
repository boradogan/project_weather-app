// src/ui-components/hourlyView.js
import Chart from 'chart.js/auto'; // Import the library

export class hourlyViewComponent {
  #element;
  #chartInstance;
  #parent = document.getElementById('hourly-view-component')

  constructor() {
    const template = document.getElementById('hourly-view-template');
    const clone = template.content.cloneNode(true);
    this.#element = clone.querySelector('.hourly-view-container');
    this.#parent.appendChild(this.#element)
  }

  getElement() {
    return this.#element;
  }

  // This method will be called to draw or update the chart
  update(formattedData) {
    const canvas = this.#element.querySelector('#hourly-chart');

    // Destroy the old chart if it exists, to prevent bugs
    if (this.#chartInstance) {
      this.#chartInstance.destroy();
    }

    // Create the new chart
    this.#chartInstance = new Chart(canvas, {
      type: 'line', // A line chart is perfect for temperature
      data: {
        labels: formattedData.labels,
        datasets: [{
          label: 'Temperature (°C)',
          data: formattedData.data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  }
}