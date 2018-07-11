package sharingdriver;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataTableStepDefs2 {

	protected WebDriver driver = null;

	@When("^he enters \"([^\"]*)\" as user last name$")
	public void He_enters_user_last_name(String lastname) throws InterruptedException {
		driver.findElement(By.xpath("//div/input[@placeholder='Last Name']")).sendKeys(lastname);
		Thread.sleep(5000);
	}

	@Then("^check signup should$")
	public void check_signup_should() throws Throwable {
		Assert.assertTrue(true);
		driver.quit();
	}

	@When("^he enters \"([^\"]*)\" as user name$")
	public void he_enters_as_user_name(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// throw new PendingException();
	}
}
