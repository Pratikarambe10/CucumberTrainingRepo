package sharingdriver;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/resources/sharingdriver/"},
		glue = {"sharingdriver/"},
		monochrome = true,
		//dryRun = true,
		plugin = {"pretty",
				"html:target/cucumber-report",
				"json:target/cucumber-report"+1990+".json",
				"com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html"
				}
		
		)
public class RunOneFolderStepDefTest {
	

}
