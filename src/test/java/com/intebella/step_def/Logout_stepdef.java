package com.intebella.step_def;

import com.intebella.pages.LoginPage;
import com.intebella.pages.Logoutpages;
import com.intebella.utilities.Driver;
import io.cucumber.java.en.Given;
import org.junit.Assert;

public class Logout_stepdef {
    LoginPage loginPage=new LoginPage();
    Logoutpages logoutpages=new Logoutpages();
    @Given("user click to LogOutButton")
    public void user_click_to_LogOutButton() {
        logoutpages.logOutButton.click();
    }

    @Given("verify user on the login page")
    public void verify_user_on_the_login_page() throws InterruptedException {
        Assert.assertEquals("Login",logoutpages.loginPage.getText());
        Thread.sleep(2000);
    }
    @Given("user click to username")
    public void user_click_to_username() throws InterruptedException {
        loginPage.username.click();
        Thread.sleep(2000);}

    @Given("user click on the step back button")
    public void user_click_on_the_step_back_button() throws InterruptedException {
        Driver.get().navigate().back();
        //Thread.sleep(2000);
    }
    @Given("user close the all tab")
    public void user_close_the_all_tab() {
        Driver.closeDriver();
    }

    @Given("user verify on the login page")
    public void user_verify_on_the_login_page() {
        String Url="https://qa.intabella.com/user/login";
        Assert.assertEquals(Url,Driver.get().getCurrentUrl());
    }


}

