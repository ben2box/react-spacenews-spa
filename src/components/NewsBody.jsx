import NewsContainer from "./NewsContainer";
import Divider from "./Divider";
import Title from "./SectionTitle";


export default function NewsBody() {


  return (
    <section>
      <Title text='Latest News' intro="Everything that's happening in, around and light-years away from the planet"/>
      <NewsContainer/>
      <Divider />
    
    </section>
  );
}