import Link from "next/link";
import { getPostData } from "../../lib/articles";
import styles from './page.module.css';

const Article = (async ({params}) => {
    const { slug } = await params
    const articleData = await getPostData(slug)

    return (
        <div className="page">
        <section className={styles['article']}>
            <p>{articleData.date}</p>
            <Link href={'/writing'}>Back to all articles</Link>
            <article dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </section>
        </div>
    )
})

export default Article;
