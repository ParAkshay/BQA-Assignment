///<reference types="cypress"/>
import {testdata} from '../support/testdata'

describe('Gmail Login', () => {
  let Testdata=new testdata()
  it('Gmail Home Page validation', () => {
    Testdata.Pagevalidation()
  });
  it('Should log in to Gmail with invalid credentials', () => {
    Testdata.InvalidLogin()
  });
  it('Should log in to Gmail Valid credentials', () => {
    Testdata.HomepageLogin()
  });
});
