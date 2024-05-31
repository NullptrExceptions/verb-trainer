var inputs = {
  meaning: document.getElementById("infinitive-meaning"),

  present_yo: document.getElementById("present-yo"),
  present_tu: document.getElementById("present-tu"),
  present_el: document.getElementById("present-el"),
  present_nosotros: document.getElementById("present-nosotros"),
  present_vosotros: document.getElementById("present-vosotros"),
  present_ellos: document.getElementById("present-ellos"),

  preterite_yo: document.getElementById("preterite-yo"),
  preterite_tu: document.getElementById("preterite-tu"),
  preterite_el: document.getElementById("preterite-el"),
  preterite_nosotros: document.getElementById("preterite-nosotros"),
  preterite_vosotros: document.getElementById("preterite-vosotros"),
  preterite_ellos: document.getElementById("preterite-ellos"),
}

var verb_indicator = document.getElementById("verb-indicator");

var current_verb = 0;
var correct = 0;

verb_indicator.textContent = "Verb: " + verbs[current_verb].infinitive;

for (var [key, value] of Object.entries(inputs)) {
  value.value = "";
}

function nextVerb() {
  correct = 0;

  current_verb++;
  if(current_verb > verbs.length) {
    current_verb = 0;
  }

  for (var [key, value] of Object.entries(inputs)) {
    value.className = "false";
    value.value = "";
  }

  verb_indicator.textContent = "Verb: " + verbs[current_verb].infinitive;

  inputs.meaning.focus();
  inputs.meaning.select();
}

inputs.meaning.addEventListener("input", (event) => {
  if(inputs.meaning.value == verbs[current_verb].meaning) {
    inputs.meaning.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.present_yo.focus();
    inputs.present_yo.select();
  }
});

inputs.present_yo.addEventListener("input", (event) => {
  if(inputs.present_yo.value == verbs[current_verb].present.yo) {
    inputs.present_yo.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.present_tu.focus();
    inputs.present_tu.select();
  }
});

inputs.present_tu.addEventListener("input", (event) => {
  if(inputs.present_tu.value == verbs[current_verb].present.tu) {
    inputs.present_tu.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.present_el.focus();
    inputs.present_el.select();
  }
});

inputs.present_el.addEventListener("input", (event) => {
  if(inputs.present_el.value == verbs[current_verb].present.el) {
    inputs.present_el.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.present_nosotros.focus();
    inputs.present_nosotros.select();
  }
});

inputs.present_nosotros.addEventListener("input", (event) => {
  if(inputs.present_nosotros.value == verbs[current_verb].present.nosotros) {
    inputs.present_nosotros.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.present_vosotros.focus();
    inputs.present_vosotros.select();
  }
});

inputs.present_vosotros.addEventListener("input", (event) => {
  if(inputs.present_vosotros.value == verbs[current_verb].present.vosotros) {
    inputs.present_vosotros.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.present_ellos.focus();
    inputs.present_ellos.select();
  }
});

inputs.present_ellos.addEventListener("input", (event) => {
  if(inputs.present_ellos.value == verbs[current_verb].present.ellos) {
    inputs.present_ellos.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.preterite_yo.focus();
    inputs.preterite_yo.select();
  }
});

inputs.preterite_yo.addEventListener("input", (event) => {
  if(inputs.preterite_yo.value == verbs[current_verb].preterite.yo) {
    inputs.preterite_yo.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.preterite_tu.focus();
    inputs.preterite_tu.select();
  }
});

inputs.preterite_tu.addEventListener("input", (event) => {
  if(inputs.preterite_tu.value == verbs[current_verb].preterite.tu) {
    inputs.preterite_tu.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.preterite_el.focus();
    inputs.preterite_el.select();
  }
});

inputs.preterite_el.addEventListener("input", (event) => {
  if(inputs.preterite_el.value == verbs[current_verb].preterite.el) {
    inputs.preterite_el.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.preterite_nosotros.focus();
    inputs.preterite_nosotros.select();
  }
});

inputs.preterite_nosotros.addEventListener("input", (event) => {
  if(inputs.preterite_nosotros.value == verbs[current_verb].preterite.nosotros) {
    inputs.preterite_nosotros.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.preterite_vosotros.focus();
    inputs.preterite_vosotros.select();
  }
});

inputs.preterite_vosotros.addEventListener("input", (event) => {
  if(inputs.preterite_vosotros.value == verbs[current_verb].preterite.vosotros) {
    inputs.preterite_vosotros.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.preterite_ellos.focus();
    inputs.preterite_ellos.select();
  }
});

inputs.preterite_ellos.addEventListener("input", (event) => {
  if(inputs.preterite_ellos.value == verbs[current_verb].preterite.ellos) {
    inputs.preterite_ellos.className = "correct";
    correct++;
    
    if(correct == 13) {
      nextVerb();
    }

    inputs.meaning.focus();
    inputs.meaning.select();
  }
});
