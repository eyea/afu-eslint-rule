import { Bar } from '@ant-design/plots';

const DemoBar = (props: any) => {
  console.log(HH)
  return <Bar onReady={props.ready} {...props.config} />;
};
export default DemoBar;
