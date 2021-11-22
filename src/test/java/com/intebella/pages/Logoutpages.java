package com.intebella.pages;

import com.intebella.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Logoutpages {
    public Logoutpages(){
        PageFactory.initElements(Driver.get(), this);}
    @FindBy(xpath = "//*[@class='no-hash']")
    public WebElement logOutButton;

    @FindBy(tagName = "h2")
    public WebElement loginPage;

}

