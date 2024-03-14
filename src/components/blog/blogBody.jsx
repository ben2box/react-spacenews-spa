import BlogContainer from "./BlogContainer";
import Divider from "../common/Divider";
import Title from "../common/SectionTitle";


export default function BlogBody() {


  return (
    <section>
      <Title text='Blog' intro='Get your daily dose of space related Blog entries'/>
      <BlogContainer/>
      <Divider />
    
    </section>
  );
}