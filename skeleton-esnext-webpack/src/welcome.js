import {inject, TemplatingEngine} from 'aurelia-framework';
import {ValidationControllerFactory} from 'aurelia-validation';
import {BootstrapFormRenderer} from './validation/bootstrap-form-renderer';
import {CustomRules} from './validation/custom-rules';

@inject(TemplatingEngine, ValidationControllerFactory, CustomRules)
export class Welcome {

  nameValidationUnexpected = {
    firstName: '',
    middleName: '',
    lastName: ''
  };

  nameValidationExpected = {
    firstName: '',
    middleName: '',
    lastName: ''
  };

  /**
   * Constructor for VM
   *
   * @param templatingEngine the templating engine
   * @param validationControllerFactory the validation controller factory
   * @param validationCustomRules validation custom rules
   */
  constructor(templatingEngine, validationControllerFactory, customRules) {
    this.templatingEngine = templatingEngine;
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.validationController.addRenderer(new BootstrapFormRenderer(this.templatingEngine, this));
    this.customRules = customRules;
  }

  submit() {
  }
}