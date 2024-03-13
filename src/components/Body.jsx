import NewsContainer from "./NewsContainer";
import Divider from "./Divider";
import Title from "./SectionTitle";


export default function Body() {


  return (
    <section>
      <Title text='Latest News'/>
      <NewsContainer/>
      <Divider />
    
    </section>
  );
}