package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\syamj\\Desktop\\SeleniumJAVA-MO\\MazdaBDDTest\\src\\main\\java\\Feature\\mazdaAssured.feature",
glue= {"stepDefinitions"},format= {"pretty","html:test-output","json:json-output/cucumber.json"},monochrome=true,dryRun=false
)

public class testRunner {

}
