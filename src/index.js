import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './dino-service.js';

// Business Logic

function getDinoName() {
  let promise = DinoService.getDinoName();
  promise.then(function(dinoNameArray) {
    printElements(dinoNameArray);
  }, function(errorArray) {
    printError(errorArray);
  });
}

// UI Logic

function printElements(data) {
  document.getElementById('results').innerText = `${data}.`;
}

function printError(error) {
  document.getElementById('results').innerText = `${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  getDinoName();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});


