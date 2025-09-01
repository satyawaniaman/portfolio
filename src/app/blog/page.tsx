import BlurFade from "@/components/magicui/blur-fade";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/data/resume";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Blogs</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="mb-12 prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            My blog posts on software development, life, and more.
          </p>
        </BlurFade>
      <div className="grid gap-6 ">
        {blogPosts.map((post, index) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + index * 0.05} key={post.id}>
            <BlogCard
              image={post.image}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
