$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/datatable/DataTableUsage.feature");
formatter.feature({
  "line": 1,
  "name": "Registration page with data table",
  "description": "As a new user, I want to enter firstname and lastname as a parameter",
  "id": "registration-page-with-data-table",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8727797378,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "validate Registration Scenario1",
  "description": "",
  "id": "registration-page-with-data-table;validate-registration-scenario1",
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
  "name": "he enters following data",
  "rows": [
    {
      "cells": [
        "Labels",
        "Params",
        "Params1"
      ],
      "line": 7
    },
    {
      "cells": [
        "First Name",
        "Anil",
        "A"
      ],
      "line": 8
    },
    {
      "cells": [
        "Last Name",
        "Kale",
        "B"
      ],
      "line": 9
    },
    {
      "cells": [
        "email Address",
        "email",
        "C"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "check signup should",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTableStepDefs.the_user_is_on_registration_Page()"
});
formatter.result({
  "duration": 7934942609,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefs.He_enters_user_name(DataTable)"
});
formatter.result({
  "duration": 285415930,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefs.check_signup_should()"
});
formatter.result({
  "duration": 686014666,
  "status": "passed"
});
});