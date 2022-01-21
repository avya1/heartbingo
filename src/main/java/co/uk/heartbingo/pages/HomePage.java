package co.uk.heartbingo.pages;

import co.uk.heartbingo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Log In']")
    WebElement loginLink;

    @CacheLookup
    @FindBy(xpath = "//iframe[@class='oneauth-iframe']")
    WebElement iframe;

    @CacheLookup
    @FindBy(id = "username")
    WebElement userName;

    @CacheLookup
    @FindBy(id = "password")
    WebElement passWord;

    @CacheLookup
    @FindBy(name = "login_submit")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Sign Up']")
    WebElement signUpTab;

    @CacheLookup
    @FindBy(className = "login_errorMessageWrapper__2ZcGx")
    WebElement errorMessage;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Ok, I Agree')]")
    WebElement acceptCookies;


    public void setAcceptCookies() {
        clickOnElement(acceptCookies);
        log.info("Clicking on accept Cookies : " + loginLink.getText());
    }


    public void clickOnLoginLink() {
        clickOnElement(loginLink);
        log.info("Clicking on login link : " + loginLink.getText());
    }


    public void enterUserName(String user_Name) {
        driver.switchTo().frame(iframe);
        sendTextToElement(userName, user_Name);
        log.info("Enter Email Address : " + user_Name);
    }

    public void enterPassword(String password) {
        sendTextToElement(passWord, password);
        log.info("Enter Password :" +password);
    }

    public void clickOnLoginButton() {
        clickOnElement(loginButton);
        log.info("Clicking on login button : " + loginButton.getText());
    }
    public String signUpTabVerify() throws InterruptedException {
        Thread.sleep(2000);
        log.info("Verifying that user back on Home Page Successfully");
        return getTextFromElement(signUpTab);
    }
    public String errorMessageVerify() throws InterruptedException {
        Thread.sleep(2000);
        log.info("Verifying error Message on Unsuccessful login");
        return getTextFromElement(errorMessage);
    }

}
