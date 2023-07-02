
import Image from "next/image";
import Typography from "@/_components/Typography";

async function getFeaturedCompanies(){
  const response= await fetch("http:localhost:3000/api/featuredcompanies",{next:{revalidate:10}});
  if(!response.ok) {
    throw new Error("Failed to fetch")
  }
  return response.json()
}

export default async function FeaturedCompanies(){
  const data=await getFeaturedCompanies();
    return (
      <div className="flex flex-col space-y-2">
        <Typography
          component="h1"
          className="text-red-700 px-4"
          textTransform="uppercase"
        >
          Featured Companies
        </Typography>

        <div className="flex items-center space-x-4 p-4 overflow-auto bg-blue-100">
          {data.companies.map((company) => (
            <Image
              src={company.image}
              width="120"
              height="55"
              style={{ objectFit: "contain", width: "120px", height: "55px" }}
            />
          ))}
        </div>
      </div>
    );
}