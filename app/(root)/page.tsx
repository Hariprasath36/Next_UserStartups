import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { Search } from "lucide-react";
import { title } from "process";


export default async function Home({searchParams}:{
    searchParams:Promise< {query?: string}>
}){
  const query = (await searchParams).query;
  const posts = [{_createdAt:'Yesterday',
    views:55,
    _id:1,
    description: "this is ",
    image:"/logo.png",
    category:"Robots",
    title:"We Robots",
  },
];
  return (
    <>
    <section className="pink_container">
   <h1 className="heading">Pitch Your Startup, <br /> Connect With Enterpreneurs</h1>
   <p className="sub-heading !max-w-3xl">
    Submit Ideas, Vote on Pitches, and Get Noticed in virtual Competitions.
   </p>
   <SearchForm query={query}/>
   </section>

   <section className="section_container">
     <p className="text-30-semibold">{query ? `Search results for "${query}"` : 'All Startups' }
     </p>

     <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
   </section>
    </>
)
}