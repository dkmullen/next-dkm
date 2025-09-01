import Link from "next/link";
import { getPostData } from "../lib/articles";

const Article = async(async (params) => {
    const articleData = await getPostData(params)

    return (
        <section>
            <p>{articleData.date}</p>
            <Link href={'/writing'}>
            <p>Home</p>

            </Link>
            <article dangerouslySetInnerHTML={{__html: articleData.contentHtml}}></article>
        </section>
    )
})
