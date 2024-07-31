import { shallow } from "enzyme";
import ClickEvent from "./ClickEvent";

describe('click test',()=>{
    it('inc test',()=>{
        let wrapper = shallow(<ClickEvent/>)
        wrapper.find('button').at(0).simulate('click')
        expect(wrapper.find('p').text()).toEqual('2');
    })
    it('decrements value correctly', () => {
        const wrapper = shallow(<ClickEvent />);
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.find('p').text()).toEqual('-1');
    });
    it('reset value correctly', () => {
        const wrapper = shallow(<ClickEvent />);
        wrapper.find('button').at(2).simulate('click');
        expect(wrapper.find('p').text()).toEqual('0');
    });
    it('calls callApi function on button click', () => {
        const wrapper = shallow(<ClickEvent />);
        const instance = wrapper.instance();

        // Spy on the console.log method
        const consoleSpy = jest.spyOn(console, 'log');
        
        // Find the button that triggers callApi and simulate a click
        wrapper.find('button').at(3).simulate('click'); // Assuming callApi is triggered by the third button

        // Expect that the callApi function has been called
        expect(consoleSpy).toHaveBeenCalledWith('click event function');
        
        // Clean up the spy
        consoleSpy.mockRestore();
    });
    it('resetStyleclass',()=>{
        const wrapper =shallow(<ClickEvent/>)
        expect(wrapper.exists('.resetStyle')).toEqual(true)
    })
})