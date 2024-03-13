import ReportsContainer from "./ReportsContainer";
import Divider from "./Divider";
import Title from "./SectionTitle";


export default function ReportsBody() {


  return (
    <section>
      <Title text='ISS Daily Reports' intro="Follow the International Space Station's day to day"/>
      <ReportsContainer/>
      <Divider />
    
    </section>
  );
}