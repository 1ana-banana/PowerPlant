/*
import $ from 'jquery';

export function updateStatus(plant) {
  if (plant.food < 5) {
    $("#foodLevel .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if (plant.food <= 10) {
    $("#foodLevel .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if (plant.food > 10) {
    $("#foodLevel .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }

  if (plant.water < 5) {
    $("#waterLevel .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if (plant.water <= 10) {
    $("#waterLevel .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if (plant.water > 10) {
    $("#waterLevel .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }

  if (plant.light < 5) {
    $("#lightLevel .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if (plant.light <= 10) {
    $("#lightLevel .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if (plant.light > 10) {
    $("#lightLevel .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }

  $("#foodLevel" .progress-bar).attr('style', 'width: ${#plant.food*5}%');
  $("#waterLevel" .progress-bar).attr('style', 'width: ${#plant.water*5}%');
  $("#lightLevel" .progress-bar).attr('style', 'width: ${#plant.light*5}%');
}

*/