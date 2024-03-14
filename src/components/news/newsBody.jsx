import NewsContainer from "./NewsContainer";
import Divider from "../common/Divider";
import Title from "../common/SectionTitle";


export default function NewsBody() {


  return (
    <section>
      <Title text='Latest News' intro="Everything that's happening in, around and light-years away from the planet"/>
      <NewsContainer/>
      <Divider />
    
    </section>
  );
}