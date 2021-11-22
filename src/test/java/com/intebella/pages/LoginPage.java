package com.intebella.pages;

import com.intebella.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage () {

        PageFactory.initElements(Driver.get(), this);

    }
    @FindBy(id = "prependedInput")
    public WebElement userName;

    @FindBy(id="prependedInput2")
    public WebElement passWord;

    @FindBy(xpath = "//button[text()='Log in']")
    public WebElement lognButton;

    @FindBy(linkText = "Forgot your password?")
    public WebElement forgetPasswordButton;

    @FindBy(css = "div.alert.alert-error")
    public WebElement invalidAlertMessage;

    @FindBy(id = "remember_me")
    public WebElement rememberMeCheckBox;

    @FindBy(tagName = "h2")
    public WebElement forgetPasswordPage;

    @FindBy (className = "oro-subtitle")
    public WebElement pageTitle;

    @FindBy(css = "#user-menu > a")
    public WebElement username;

    public void loginPage(String username, String password){
        userName.sendKeys(username);
        passWord.sendKeys(password);
        lognButton.click();




    }
}