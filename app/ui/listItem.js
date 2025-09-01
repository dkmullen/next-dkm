import Link from "next/link"
import getFormattedDate from "../lib/getFormattedDate"

export default function ListItem({ post }) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="text-2xl dark:text-black/90">
            <Link href={`/articles/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">
                {formattedDate}
            </p>
        </li>
    )
}