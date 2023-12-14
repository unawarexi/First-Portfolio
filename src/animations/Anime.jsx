import { TypeAnimation } from "react-type-animation";
const animate = () => {
  return (
    <TypeAnimation
      sequence={[
        "i am a software engineer",
        1000,
         "i am a web-developer", 
        2000, 
         "i am full-stack", 
      ]}
      
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default animate;