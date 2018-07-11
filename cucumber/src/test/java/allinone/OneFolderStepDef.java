package allinone;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OneFolderStepDef {
	protected WebDriver driver;

	@Given("^the user is on registration page$")
	public void the_user_is_on_registration_page() throws InterruptedException {
		System.out.println("Script started...!");
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/src/test/resources/chromedriver.exe");
		driver =new ChromeDriver();
		
		driver.get("http://demo.automationtesting.in/Register.html");
		Thread.sleep(5000);
		
	}

	@And("^he enters \"([^\"]*)\" and the firstname$")
	public void he_enters_username(String username) {
		driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys(username);
	}

	@When("^he enters \"([^\"]*)\" as the lastname$")
	public void he_enters_as_the_lastname(String lastname) throws Throwable {
		driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys(lastname);
	}

	@Then("^Login should be success$")
	public void login_should_be_success() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.quit();
	//	throw new PendingException();
	}
}
