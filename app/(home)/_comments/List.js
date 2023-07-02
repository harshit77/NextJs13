import Comment from "@/_components/Comment"

export default async function getDiscussionForum({comments}) {
return (
    <>{comments.map((comment, index) => <Comment key={index} user={comment} />)}
</>)}