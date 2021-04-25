package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AssuredStepDefinitions {
	WebDriver driver;
	

@Given("^user is on Calculator Page$")
public void user_is_on_Calculator_Page() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\syamj\\Desktop\\SeleniumJAVA-MO\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("https://www.mazda.com.au/finance/mazda-assured/calculator/BT-50/");
	driver.findElement(By.cssSelector("#react-aria-modal-dialog > div > div:nth-child(3) > div > button")).click();
										}
	
@When("^logo on the page is Mazda Assured$")
public boolean logo_on_the_page_is_Mazda_Assured()	{
	
	boolean flag = driver.findElement(By.cssSelector("#header > nav > a > img")).isDisplayed();
	return flag;
}

@Then("^user select deposit and loanterm$")
public void user_select_deposit_and_term()  {
	
//driver.findElement(By.id("term-2")).click();
	WebElement radioButton = driver.findElement(By.cssSelector("#term-2"));
	((JavascriptExecutor) driver).executeScript("arguments[0].click();", radioButton);
	
}
//@Then("^user select annual km and payFrequency$")
@Then("^user select \"(.*)\"$") 
public void user_enters(String distance)  {
	
	
	Select select = new Select(driver.findElement(By.id("distance")));
	select.selectByValue(distance);
	//driver.findElement(By.id("frequency-12")).click();
}
@Then("^user chooses payFrequency$")
public void user_payFrequency() {
	WebElement payFreq = driver.findElement(By.id("frequency-52"));
	((JavascriptExecutor) driver).executeScript("arguments[0].click();", payFreq);
	
	
}
/*@Then("^user selects rate$")
public void user_selects_rate()
{
	WebElement slider = driver.findElement(By.cssSelector("#react_0HM86MMFHE829 > div > div > div > div._FinanceCalculatorFilters_c3947 > div._RateWrapper_c3947 > div")); 

    Actions action= new Actions(driver);
    action.clickAndHold(slider);
    action.moveByOffset(0,10);
    action.release().build();

}*/
@Then("^future value should be displayed$")
public void gfv(){
	driver.findElement(By.xpath("//*[@id=\"react_0HM86MMFHE829\"]/div/div/div/div[3]/div[2]/div[5]/div/div/div/div/div[2]/div[3]/div/span")).getText();
	
	
}

}
