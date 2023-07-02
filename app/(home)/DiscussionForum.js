import Typography from "@/_components/Typography";
import Filter from "@/_components/Filter";
import CommentList from "./_comments";

async function getDiscussionForumData() {
  const response = await fetch("http://localhost:3000/api/discussionforum");
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
}

export default async function DiscussionForum() {
  const { filterOptions, comments } = await getDiscussionForumData();
  return (
    <div className="w-full md:w-4/6 space-y-2">
      <Typography
        component="h1"
        textTransform="uppercase"
        family="bold"
        className="hidden md:block text-red-700"
      >
        Discussion Forum
      </Typography>
      <div className="flex flex-col px-2 mb-4 md:px-8">
        <Filter className="mb-4" filterOptions={filterOptions} isSearchAble />
        <CommentList comments={comments} />
      </div>
    </div>
  );
}
