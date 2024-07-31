
import About from './About';
import { shallow } from 'enzyme';


describe('About Test', () => {
    it('class check', () => {
        let Wrapper = shallow(<About />);
        expect(Wrapper.exists('.aboutStyle')).toEqual(true)
    });
    it('containt check', () => {
        let Wrapper = shallow(<About />);
        // expect(Wrapper.text()).toEqual('Hello about us')
        // expect(Wrapper.text()).toEqual('Hello Pera')
        expect(Wrapper.text()).toContain('Hello about us');
        expect(Wrapper.text()).toContain('Hello Pera');
        expect(Wrapper.text()).toContain('Hello');
        expect(Wrapper.contains(<h1>Hello about us</h1>)).toEqual(true)

    });
    it('UL check', () => {
        let Wrapper = shallow(<About />);
        // expect(Wrapper.find('.lis').length).toBe(3);
        expect(Wrapper.find('.lis').at(0).key()).toBe('1')

    });  
     it('State check', () => {
        let Wrapper = shallow(<About />);
        expect(Wrapper.state()).toEqual({stateOne:"name",stateTwo:1234})

    });
    it('child check', () => {
        let Wrapper = shallow(<About />);
        expect(Wrapper.find('.uls').childAt(0).type()).toBe('li')

    });

    
    
});
