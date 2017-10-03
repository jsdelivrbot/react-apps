import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';


//use describe to group together similar tests
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });


  //use 'it' to test the single attribute of a target
  it('show a comment box', () => {

  	//use 'expect' to make 'assertion' about target
    expect(component.find('.comment-box')).to.exist;
  });
});
