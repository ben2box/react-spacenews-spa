import BlogContainer from "./blogContainer";
import Divider from "../common/divider";
import Title from "../common/sectionTitle";


export default function BlogBody() {


  return (
    <section>
      <Title text='Blog' intro='Get your daily dose of space related Blog entries'/>
      <BlogContainer/>
      <Divider />
    
    </section>
  );
}