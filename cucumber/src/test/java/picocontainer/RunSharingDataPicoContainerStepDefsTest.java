package picocontainer;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/sharingdriver/" }, 
				  glue = {"picocontainer/" }, 
				  monochrome = true, // console output in readable format
				  // dryRun = true,
				  plugin = { "pretty", 
						  "html:target/cucumber-htmlreport", 
						  "json:target/cucumber-report" + 12287 + ".json",
						  "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html" 
						  }
				)

public class RunSharingDataPicoContainerStepDefsTest {

}
