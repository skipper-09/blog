import Jumbotron from "../component/Jumbotron";
import Content from "../component/Content";
import Layout from "../component/Layout";
export default function Home({ data }) {
  return (
    <div>
      <Layout title="FW Blog">
        <Jumbotron />
        {data.articles.map((articles, idx) => (
          <Content articles={articles} key={idx} />
        ))}
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=6c7c7bf3c51349ff9409cc02617757be"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
