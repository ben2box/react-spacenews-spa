import NewsContainer from "./newsContainer";
import Divider from "../common/divider";
import Title from "../common/sectionTitle";


export default function NewsBody() {


  return (
    <section>
      <Title text='Latest News' intro="Everything that's happening in, around and light-years away from the planet"/>
      <NewsContainer/>
      <Divider />
    
    </section>
  );
}