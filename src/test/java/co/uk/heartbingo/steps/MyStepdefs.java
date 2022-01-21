package co.uk.heartbingo.steps;

import co.uk.heartbingo.pages.HomePage;
import co.uk.heartbingo.pages.LoginBasePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^You are on homepage$")
    public void youAreOnHomepage() {
        new HomePage().setAcceptCookies();
        System.out.println("I am on HomePage");
    }


    @When("^I click on signIn tab$")
    public void iClickOnSignInTab() {
 new HomePage().clickOnLoginLink();
    }


    @And("^I input email \"([^\"]*)\"$")
    public void iInputEmail(String userName){
        new HomePage().enterUserName(userName);
    }

    @And("^I input password \"([^\"]*)\"$")
    public void iInputPassword(String password){
        new HomePage().enterPassword(password);
    }

    @And("^I click on LogIn button$")
    public void iClickOnLogInButton() {
        new HomePage().clickOnLoginButton();
    }

    @Then("^I can verify \"([^\"]*)\" Tab$")
    public void iCanVerifyTab(String depositText) throws InterruptedException {
        String actualText = new LoginBasePage().depositVerify();
        Assert.assertEquals(actualText,depositText);
    }

    @And("^I click on account tab$")
    public void iClickOnAccountTab() {
        new LoginBasePage().clickOnAccountTab();
    }

    @Then("^I click on logOut tab$")
    public void iClickOnLogOutTab() throws InterruptedException {
        new LoginBasePage().clickOnLogout();
    }

    @And("^I verify \"([^\"]*)\" link$")
    public void iVerifyLink(String signUp) throws InterruptedException {
        String actualText = new HomePage().signUpTabVerify();
        Assert.assertEquals(actualText,signUp);
    }

    @And("^error message \"([^\"]*)\" displayed$")
    public void errorMessageDisplayed(String message) throws InterruptedException {
        String actualText = new HomePage().errorMessageVerify();
        Assert.assertEquals(actualText,message);
    }
}
