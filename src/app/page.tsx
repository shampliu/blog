import { BlogPosts } from "@/components/posts";
import { CONFIG } from "@/config";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {CONFIG.title}
      </h1>
      <p className="mb-4">{CONFIG.description}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
