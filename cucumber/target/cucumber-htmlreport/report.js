$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HooksFF.feature");
formatter.feature({
  "line": 1,
  "name": "Registration page with hooks",
  "description": "As a new user, I want to enter firstname and lastname as a parameter",
  "id": "registration-page-with-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 277450,
  "status": "passed"
});
formatter.before({
  "duration": 8634416249,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "validate Registration Scenario1",
  "description": "",
  "id": "registration-page-with-hooks;validate-registration-scenario1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the user is on registration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he enters \"David\" as user name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "he enters \"Rogers\" as user last name",
  "keyword": "And "
});
formatter.match({
  "location": "HookStepDef.the_user_is_on_registration_Page()"
});
formatter.result({
  "duration": 8998706116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 11
    }
  ],
  "location": "HookStepDef.He_enters_user_name(String)"
});
formatter.result({
  "duration": 121923053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rogers",
      "offset": 11
    }
  ],
  "location": "HookStepDef.He_enters_user_last_name(String)"
});
formatter.result({
  "duration": 5085747281,
  "status": "passed"
});
formatter.after({
  "duration": 250301,
  "status": "passed"
});
formatter.after({
  "duration": 732119704,
  "status": "passed"
});
});