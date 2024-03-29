import Link from "next/link";
import Moment from "react-moment";
export default function articel({ articles }) {
  return (
    <div className="container">
      <div className="card mt-4 mb-4" max-width="540px">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={articles.urlToImage} className="card-img img-thumbnail" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-4 text-capitalize fw-bold">
                {articles.title}
              </h5>
              <p className="card-text text-author ">{articles.author}</p>

              <p>{articles.content}</p>

              <p className="card-text">
                <small className="text-muted">
                  <i className="bi-clock"> </i>
                  <Moment format="YYYY-MM-DD">
                    {articles.publishedAt}
                  </Moment>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c7c7bf3c51349ff9409cc02617757be"
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//     revalidate: 1,
//   };
// }
