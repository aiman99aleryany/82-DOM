// Get the value of the form-input text input field and print it in the console.

// HELPER FUNCTIONS
const qsa = (selector) => document.querySelectorAll(selector);
const getData = (element) => {
  return { [element.id]: element.value };
};

// DOM
const form_inputs = Array.from(qsa(".form-input"));

// GET MODEL
const getModel = (dom) => dom.map((element) => getData(element));

// APP
const run = () => {
  console.log(getModel(form_inputs));
};

// RUN APP
run();
