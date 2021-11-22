$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "Login Functionality with Cucumber",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@VIP"
    }
  ]
});
formatter.scenarioOutline({
  "name": "1-login with valid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@INN-972"
    }
  ]
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.step({
  "name": "user types the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the page \"\u003cPage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Page"
      ]
    },
    {
      "cells": [
        "user10",
        "UserUser123",
        "Quick Launchpad"
      ]
    },
    {
      "cells": [
        "salesmanager101",
        "UserUser123",
        "Dashboard"
      ]
    },
    {
      "cells": [
        "storemanager85",
        "UserUser123",
        "Dashboard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "1-login with valid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-972"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"user10\" and \"UserUser123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page \"Quick Launchpad\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.verify_the_page(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: verify page subtitle  expected:\u003c[Quick Launchpad]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat com.intebella.step_def.Loginstep.verify_the_page(Loginstep.java:39)\n\tat ✽.verify the page \"Quick Launchpad\"(file:///Users/sunum/IdeaProjects/Horizon/src/test/resources/Features/Login.feature:8)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "1-login with valid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-972"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"salesmanager101\" and \"UserUser123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page \"Dashboard\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.verify_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "1-login with valid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-972"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"storemanager85\" and \"UserUser123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page \"Dashboard\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.verify_the_page(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: verify page subtitle  expected:\u003c[Dashboard]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat com.intebella.step_def.Loginstep.verify_the_page(Loginstep.java:39)\n\tat ✽.verify the page \"Dashboard\"(file:///Users/sunum/IdeaProjects/Horizon/src/test/resources/Features/Login.feature:8)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "2-The user try to login with invalid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@INN-973"
    }
  ]
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.step({
  "name": "user types the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click to login button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user23",
        "password"
      ]
    },
    {
      "cells": [
        "user10000",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "user",
        "user"
      ]
    }
  ]
});
formatter.scenario({
  "name": "2-The user try to login with invalid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-973"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"user23\" and \"password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2-The user try to login with invalid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-973"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"user10000\" and \"UserUser123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2-The user try to login with invalid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-973"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"user\" and \"user\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "3- All users can see their own usernames in profile menu",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@INN-974"
    }
  ]
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.step({
  "name": "user types the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the username \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "name"
      ]
    },
    {
      "cells": [
        "user10",
        "UserUser123",
        "John Doe"
      ]
    },
    {
      "cells": [
        "salesmanager101",
        "UserUser123",
        "John Doe"
      ]
    },
    {
      "cells": [
        "storemanager85",
        "UserUser123",
        "John Doe"
      ]
    }
  ]
});
formatter.scenario({
  "name": "3- All users can see their own usernames in profile menu",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-974"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"user10\" and \"UserUser123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the username \"John Doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.verify_the_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "3- All users can see their own usernames in profile menu",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-974"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"salesmanager101\" and \"UserUser123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the username \"John Doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.verify_the_username(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[John Doe]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.intebella.step_def.Loginstep.verify_the_username(Loginstep.java:44)\n\tat ✽.verify the username \"John Doe\"(file:///Users/sunum/IdeaProjects/Horizon/src/test/resources/Features/Login.feature:33)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "3- All users can see their own usernames in profile menu",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-974"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"storemanager85\" and \"UserUser123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the username \"John Doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.verify_the_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "4- \"Invalid username or password.\" error message should be displayed for invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@INN-975"
    }
  ]
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.step({
  "name": "user types the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.step({
  "name": "verify error massage on the login Page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user23",
        "password"
      ]
    },
    {
      "cells": [
        "user10000",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "user",
        "user"
      ]
    }
  ]
});
formatter.scenario({
  "name": "4- \"Invalid username or password.\" error message should be displayed for invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-975"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"user23\" and \"password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error massage on the login Page",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.verify_error_massage_on_the_login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "4- \"Invalid username or password.\" error message should be displayed for invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-975"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"user10000\" and \"UserUser123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error massage on the login Page",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.verify_error_massage_on_the_login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "4- \"Invalid username or password.\" error message should be displayed for invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-975"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"user\" and \"user\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error massage on the login Page",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.verify_error_massage_on_the_login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "5- User should see the password in bullet signs by default",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@INN-976"
    }
  ]
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.step({
  "name": "user types the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the password should not be displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user23",
        "passwordyy"
      ]
    },
    {
      "cells": [
        "user10000",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "user",
        "user"
      ]
    }
  ]
});
formatter.scenario({
  "name": "5- User should see the password in bullet signs by default",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-976"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"user23\" and \"passwordyy\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the password should not be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_password_should_not_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "5- User should see the password in bullet signs by default",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-976"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"user10000\" and \"UserUser123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the password should not be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_password_should_not_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "5- User should see the password in bullet signs by default",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-976"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the valid \"user\" and \"user\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the password should not be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_password_should_not_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "6-User land on the ‘Forgot Password’ page after clicking on the \"Forgot your password?\" link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-977"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click on the \"Forgot your password?\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_should_click_on_the_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user on the \"Forgot Password\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.verify_user_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "7- User can see \"Remember me on this computer\" link on the login page and it should be clickable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-978"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can able to click on Remember me on this computer button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.user_can_able_to_click_on_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "8- Verify that user can use \"Enter\" key from their keyboard on the login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@VIP"
    },
    {
      "name": "@INN-979"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on the \"user input box\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_click_on_the_and_use_the_keybord(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user types the username as a truck driver and hit the Enter button and the user types the password and hit the Enter button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.intebella.step_def.Loginstep.the_user_types_the_username_as_a_truck_driver_and_hit_the_Enter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});