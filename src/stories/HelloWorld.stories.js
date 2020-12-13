import HelloWorld from '../components/HelloWorld';

export default {
  title: 'Component/HelloWorld',
  component: HelloWorld,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HelloWorld },
  template:
    '<HelloWorld :msg="msg"/>',
});

export const Default = Template.bind({});
Default.args = {
  msg: 'Hello Storybook'
};
