$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/syamj/Desktop/SeleniumJAVA-MO/MazdaBDDTest/src/main/java/Feature/mazdaAssured.feature");
formatter.feature({
  "line": 1,
  "name": "Mazda Assured Calculator feature",
  "description": "",
  "id": "mazda-assured-calculator-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Assured Calculator TestScenario for Model BT50",
  "description": "",
  "id": "mazda-assured-calculator-feature;assured-calculator-testscenario-for-model-bt50",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "logo on the page is Mazda Assured",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user select deposit and loanterm",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select \"\u003cannualKm\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user chooses payFrequency",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "future value should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "mazda-assured-calculator-feature;assured-calculator-testscenario-for-model-bt50;",
  "rows": [
    {
      "cells": [
        "annualKm"
      ],
      "line": 12,
      "id": "mazda-assured-calculator-feature;assured-calculator-testscenario-for-model-bt50;;1"
    },
    {
      "cells": [
        "20000"
      ],
      "line": 13,
      "id": "mazda-assured-calculator-feature;assured-calculator-testscenario-for-model-bt50;;2"
    },
    {
      "cells": [
        "15000"
      ],
      "line": 14,
      "id": "mazda-assured-calculator-feature;assured-calculator-testscenario-for-model-bt50;;3"
    },
    {
      "cells": [
        "1000"
      ],
      "line": 15,
      "id": "mazda-assured-calculator-feature;assured-calculator-testscenario-for-model-bt50;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Assured Calculator TestScenario for Model BT50",
  "description": "",
  "id": "mazda-assured-calculator-feature;assured-calculator-testscenario-for-model-bt50;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "logo on the page is Mazda Assured",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user select deposit and loanterm",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select \"20000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user chooses payFrequency",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "future value should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AssuredStepDefinitions.user_is_on_Calculator_Page()"
});
formatter.result({
  "duration": 20405337444,
  "status": "passed"
});
formatter.match({
  "location": "AssuredStepDefinitions.logo_on_the_page_is_Mazda_Assured()"
});
formatter.result({
  "duration": 227580535,
  "status": "passed"
});
formatter.match({
  "location": "AssuredStepDefinitions.user_select_deposit_and_term()"
});
formatter.result({
  "duration": 42511424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 13
    }
  ],
  "location": "AssuredStepDefinitions.user_enters(String)"
});
formatter.result({
  "duration": 136632943,
  "status": "passed"
});
formatter.match({
  "location": "AssuredStepDefinitions.user_payFrequency()"
});
formatter.result({
  "duration": 42351424,
  "status": "passed"
});
formatter.match({
  "location": "AssuredStepDefinitions.gfv()"
});
formatter.result({
  "duration": 38375916,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"react_0HM86MMFHE829\"]/div/div/div/div[3]/div[2]/div[5]/div/div/div/div/div[2]/div[3]/div/span\"}\n  (Session info: chrome\u003d89.0.4389.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JISSAJOY\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\syamj\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49659}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9aaf9c0937ae5df9392b89e5155a9159\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"react_0HM86MMFHE829\"]/div/div/div/div[3]/div[2]/div[5]/div/div/div/div/div[2]/div[3]/div/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.AssuredStepDefinitions.gfv(AssuredStepDefinitions.java:74)\r\n\tat ✽.Then future value should be displayed(C:/Users/syamj/Desktop/SeleniumJAVA-MO/MazdaBDDTest/src/main/java/Feature/mazdaAssured.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Assured Calculator TestScenario for Model BT50",
  "description": "",
  "id": "mazda-assured-calculator-feature;assured-calculator-testscenario-for-model-bt50;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "logo on the page is Mazda Assured",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user select deposit and loanterm",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select \"15000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user chooses payFrequency",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "future value should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AssuredStepDefinitions.user_is_on_Calculator_Page()"
});
formatter.result({
  "duration": 20908910581,
  "status": "passed"
});
formatter.match({
  "location": "AssuredStepDefinitions.logo_on_the_page_is_Mazda_Assured()"
});
formatter.result({
  "duration": 95405470,
  "status": "passed"
});
formatter.match({
  "location": "AssuredStepDefinitions.user_select_deposit_and_term()"
});
formatter.result({
  "duration": 63330395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15000",
      "offset": 13
    }
  ],
  "location": "AssuredStepDefinitions.user_enters(String)"
});
formatter.result({
  "duration": 100585126,
  "status": "passed"
});
formatter.match({
  "location": "AssuredStepDefinitions.user_payFrequency()"
});
formatter.result({
  "duration": 55781948,
  "status": "passed"
});
formatter.match({
  "location": "AssuredStepDefinitions.gfv()"
});
formatter.result({
  "duration": 24591812,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"react_0HM86MMFHE829\"]/div/div/div/div[3]/div[2]/div[5]/div/div/div/div/div[2]/div[3]/div/span\"}\n  (Session info: chrome\u003d89.0.4389.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JISSAJOY\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\syamj\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49715}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ac022a6b9367eb70b633217d5a4e2c19\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"react_0HM86MMFHE829\"]/div/div/div/div[3]/div[2]/div[5]/div/div/div/div/div[2]/div[3]/div/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.AssuredStepDefinitions.gfv(AssuredStepDefinitions.java:74)\r\n\tat ✽.Then future value should be displayed(C:/Users/syamj/Desktop/SeleniumJAVA-MO/MazdaBDDTest/src/main/java/Feature/mazdaAssured.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Assured Calculator TestScenario for Model BT50",
  "description": "",
  "id": "mazda-assured-calculator-feature;assured-calculator-testscenario-for-model-bt50;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "logo on the page is Mazda Assured",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user select deposit and loanterm",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select \"1000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user chooses payFrequency",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "future value should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AssuredStepDefinitions.user_is_on_Calculator_Page()"
});
formatter.result({
  "duration": 9912345249,
  "status": "passed"
});
formatter.match({
  "location": "AssuredStepDefinitions.logo_on_the_page_is_Mazda_Assured()"
});
formatter.result({
  "duration": 92302653,
  "status": "passed"
});
formatter.match({
  "location": "AssuredStepDefinitions.user_select_deposit_and_term()"
});
formatter.result({
  "duration": 49146488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 13
    }
  ],
  "location": "AssuredStepDefinitions.user_enters(String)"
});
formatter.result({
  "duration": 98317075,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: 1000\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JISSAJOY\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:283)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:186)\r\n\tat stepDefinitions.AssuredStepDefinitions.user_enters(AssuredStepDefinitions.java:51)\r\n\tat ✽.Then user select \"1000\"(C:/Users/syamj/Desktop/SeleniumJAVA-MO/MazdaBDDTest/src/main/java/Feature/mazdaAssured.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AssuredStepDefinitions.user_payFrequency()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AssuredStepDefinitions.gfv()"
});
formatter.result({
  "status": "skipped"
});
});