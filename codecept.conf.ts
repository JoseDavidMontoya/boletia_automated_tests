import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './features/*.feature',  // Apunta a tus archivos .feature
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.admin.boletia.com/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.ts',         // Asegúrate de que la extensión sea .ts
    loginPage: './page_objects/loginPage.ts' 
  },
  // Configuración de Cucumber:
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login_steps.ts']
  },
  name: 'boletia_pruebas',
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true
    },
    autoDelay: {
      enabled: true
    }

  }
};
