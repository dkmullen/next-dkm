import { getSortedPostsData } from "../lib/articles";
import ListItem from "../ui/listItem";

export default function Page() {
  const articles = getSortedPostsData()

  return (
    <div className="page">
      <h3>Writing</h3>
      <section>
        {articles !== null &&
          articles.map((article) => (
            <ListItem post={article} key={article.id} />
          ))
        }
      </section>
    </div>
  );
}
