$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "As a user you want to check out Home Page",
  "description": "",
  "id": "as-a-user-you-want-to-check-out-home-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5552396600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "I want to login using valid credential",
  "description": "",
  "id": "as-a-user-you-want-to-check-out-home-page;i-want-to-login-using-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "You are on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on signIn tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I input email \"Patel311278@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I input password \"Mytest1231@!\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can verify \"Deposit\" Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on account tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on logOut tab",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify \"Sign Up\" link",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.youAreOnHomepage()"
});
formatter.result({
  "duration": 1282574599,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (789, 670)\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8a21ccf4c48176caf78ffe0b8ec0d1b0, clickElement {id\u003d91c0f289-8793-4e3e-bcdb-bace0dc3c54b}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64378}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64378/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (8a21ccf4c48176caf78ffe0b8ec0d1b0)] -\u003e xpath: //button[contains(text(),\u0027Ok, I Agree\u0027)]]\nSession ID: 8a21ccf4c48176caf78ffe0b8ec0d1b0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat co.uk.heartbingo.utility.Utility.clickOnElement(Utility.java:19)\r\n\tat co.uk.heartbingo.pages.HomePage.setAcceptCookies(HomePage.java:52)\r\n\tat co.uk.heartbingo.steps.MyStepdefs.youAreOnHomepage(MyStepdefs.java:14)\r\n\tat ✽.Given You are on homepage(login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel311278@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iInputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mytest1231@!",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iInputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLogInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.iCanVerifyTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAccountTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLogOutTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign Up",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.iVerifyLink(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1423309300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "User should not login with invalid credentials.",
  "description": "",
  "id": "as-a-user-you-want-to-check-out-home-page;user-should-not-login-with-invalid-credentials.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "You are on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on signIn tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I input email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I input password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "error message \"The username or password you entered is incorrect. Please try again.\" displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "as-a-user-you-want-to-check-out-home-page;user-should-not-login-with-invalid-credentials.;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "scenario"
      ],
      "line": 22,
      "id": "as-a-user-you-want-to-check-out-home-page;user-should-not-login-with-invalid-credentials.;;1"
    },
    {
      "cells": [
        "abc@gmail.com",
        "xyz123@",
        "invalid Username and password"
      ],
      "line": 23,
      "id": "as-a-user-you-want-to-check-out-home-page;user-should-not-login-with-invalid-credentials.;;2"
    },
    {
      "cells": [
        "Patel311278@gmail.com",
        "xyz123@",
        "valid username and invalid password"
      ],
      "line": 24,
      "id": "as-a-user-you-want-to-check-out-home-page;user-should-not-login-with-invalid-credentials.;;3"
    },
    {
      "cells": [
        "abc@gmail.com",
        "Mytest1231@!",
        "invalid username and valid password"
      ],
      "line": 25,
      "id": "as-a-user-you-want-to-check-out-home-page;user-should-not-login-with-invalid-credentials.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3610448800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should not login with invalid credentials.",
  "description": "",
  "id": "as-a-user-you-want-to-check-out-home-page;user-should-not-login-with-invalid-credentials.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "You are on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on signIn tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I input email \"abc@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I input password \"xyz123@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "error message \"The username or password you entered is incorrect. Please try again.\" displayed",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.youAreOnHomepage()"
});
formatter.result({
  "duration": 1148639301,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (789, 670)\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [50a2ffb53a26a12602175d8890c9c1c9, clickElement {id\u003d2992e624-e6dd-4614-b3cc-3d7c90b98456}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64520}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64520/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (50a2ffb53a26a12602175d8890c9c1c9)] -\u003e xpath: //button[contains(text(),\u0027Ok, I Agree\u0027)]]\nSession ID: 50a2ffb53a26a12602175d8890c9c1c9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat co.uk.heartbingo.utility.Utility.clickOnElement(Utility.java:19)\r\n\tat co.uk.heartbingo.pages.HomePage.setAcceptCookies(HomePage.java:52)\r\n\tat co.uk.heartbingo.steps.MyStepdefs.youAreOnHomepage(MyStepdefs.java:14)\r\n\tat ✽.Given You are on homepage(login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iInputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iInputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLogInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.errorMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1319577700,
  "status": "passed"
});
formatter.before({
  "duration": 3125398400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should not login with invalid credentials.",
  "description": "",
  "id": "as-a-user-you-want-to-check-out-home-page;user-should-not-login-with-invalid-credentials.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "You are on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on signIn tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I input email \"Patel311278@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I input password \"xyz123@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "error message \"The username or password you entered is incorrect. Please try again.\" displayed",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.youAreOnHomepage()"
});
formatter.result({
  "duration": 527432700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6ec03f32214d0cce379a59f1b7d44136, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log In\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64561}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64561/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6ec03f32214d0cce379a59f1b7d44136\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getText(Unknown Source)\r\n\tat co.uk.heartbingo.pages.HomePage.setAcceptCookies(HomePage.java:53)\r\n\tat co.uk.heartbingo.steps.MyStepdefs.youAreOnHomepage(MyStepdefs.java:14)\r\n\tat ✽.Given You are on homepage(login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel311278@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iInputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iInputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLogInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.errorMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8999100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6ec03f32214d0cce379a59f1b7d44136, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64561}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64561/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6ec03f32214d0cce379a59f1b7d44136\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat co.uk.heartbingo.utility.Utility.getScreenshot(Utility.java:34)\r\n\tat co.uk.heartbingo.Hooks.tearDown(Hooks.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 2827992000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should not login with invalid credentials.",
  "description": "",
  "id": "as-a-user-you-want-to-check-out-home-page;user-should-not-login-with-invalid-credentials.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "You are on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on signIn tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I input email \"abc@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I input password \"Mytest1231@!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "error message \"The username or password you entered is incorrect. Please try again.\" displayed",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.youAreOnHomepage()"
});
formatter.result({
  "duration": 705091300,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [88869fd18fb67753693305f0db814693, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log In\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64597}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64597/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 88869fd18fb67753693305f0db814693\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getText(Unknown Source)\r\n\tat co.uk.heartbingo.pages.HomePage.setAcceptCookies(HomePage.java:53)\r\n\tat co.uk.heartbingo.steps.MyStepdefs.youAreOnHomepage(MyStepdefs.java:14)\r\n\tat ✽.Given You are on homepage(login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iInputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mytest1231@!",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iInputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLogInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.errorMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5698399,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [88869fd18fb67753693305f0db814693, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64597}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64597/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 88869fd18fb67753693305f0db814693\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat co.uk.heartbingo.utility.Utility.getScreenshot(Utility.java:34)\r\n\tat co.uk.heartbingo.Hooks.tearDown(Hooks.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});