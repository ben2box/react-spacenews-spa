import ReportsContainer from "./reportsContainer";
import Divider from "../common/divider";
import Title from "../common/sectionTitle";


export default function ReportsBody() {


  return (
    <section>
      <Title text='ISS Daily Reports' intro="Follow the International Space Station's day to day"/>
      <ReportsContainer/>
      <Divider />
    
    </section>
  );
}