import { getSortedPostsData } from "../lib/posts"
import ListItem from '../ui/listItem'

export default function Page() {
  const posts = getSortedPostsData()
  console.log(posts)
  return (
    <>
      <p>Writing</p>
            <ul>
                {posts.map(post => (
                    <ListItem key={post.id} title={post.title} date={post.date} id={post.id} />
                ))}
            </ul>
    
    </>
  )
}
