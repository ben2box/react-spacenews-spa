import BlogContainer from "./BlogContainer";
import Divider from "./Divider";
import Title from "./SectionTitle";


export default function BlogBody() {


  return (
    <section>
      <Title text='Blog' intro='Get your daily dose of space related Blog entries'/>
      <BlogContainer/>
      <Divider />
    
    </section>
  );
}