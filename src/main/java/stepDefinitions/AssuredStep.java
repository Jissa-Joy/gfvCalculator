/*package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AssuredStep {

	WebDriver driver;
	
	@Given("^user is on  calculator page$")
	public void user_is_already_on_calculator_page() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\syamj\\Desktop\\SeleniumJAVA-MO\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.mazda.com.au/finance/mazda-assured/calculator/BT-50/");
		driver.findElement(By.cssSelector("#react-aria-modal-dialog > div > div:nth-child(3) > div > button")).click();
	}
	
/*	@When("^Title of page is Mazda title$")
	public void title_of_page_is_Mazda_title()  {
		String title = driver.getTitle();
	//	Assert.assertEquals("Mazda BT-50 GFV Calculator | Mazda Assured", title);
		
	}
	@Then("^user select \"([^\"]*)\"$")
	public void user_select_and(String deposit)  {
		driver.findElement(By.name("deposit")).sendKeys(deposit);
		driver.findElement(By.id("term_1")).click();
	    
	}
	
	
	
	@Then("^user enters \"([^\"]*)\"$")
	public void user_enters(String dist)  {
		
		Select distance = new Select(driver.findElement(By.id("distance")));
		distance.selectByValue(dist);
		
	}
	
	
	/*@Then("^user enters \"([^\"]*)\"$")
	public void user_enters(int value)
	{
		driver.findElement(By.cssSelector(cssSelector))
		
	}
	
	@Then("^user clicks Make an enquriy button$")
	public void user_clicks_Make_an_enquriy_button()  {
		
		driver.findElement(By.cssSelector(cssSelector)))
	    
	}
	
	
}*/
