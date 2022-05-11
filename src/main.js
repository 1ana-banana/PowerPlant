import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles.css';
import { yuckyFood, plant, goodFood, light, water} from './../src/plant.js';
import { updateStatus } from './../src/standalone.js';

$(document).ready(function () {
  $('#yuckyFood').click(function() {
    const newState = plant(yuckyFood);
    updateStatus(newState);
    $('#foodValue').text(newState.food);
  });
  
  $('#goodFood').click(function() {
    const newState = plant(goodFood);
    updateStatus(newState);
    $('#foodValue').text(newState.food);
  });
  
  $('#light').click(function() {
    const newState = plant(light);
    updateStatus(newState);
    $('#lightValue').text(newState.light);
  });
  
  $('#water').click(function() {
    const newState = plant(water);
    updateStatus(newState);
    $('#waterValue').text(newState.water);
  });
});
