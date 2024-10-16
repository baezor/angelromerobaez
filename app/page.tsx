import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">
        Angel Romero Baez
      </h1>
      <p className="mb-4">
        Hi, I’m Angel! I’ve been a software developer and entrepreneur with a
        deep passion for web development. The web changed my life by opening up
        opportunities and providing knowledge I may not have found otherwise.
        Now, I’m dedicated to giving back by building tools and services that
        contribute to making the Internet a better place.
      </p>
      <p className="mb-4">
        As a web developer, I’ve had the privilege of working with companies of
        all sizes, helping them bring their ideas to life—whether it’s creating
        a simple landing page or developing an MVP for fundraising efforts.
      </p>
      <p>
        As an entrepreneur, I co-founded Prepa IN, a digital learning platform
        currently available in Mexico that helps students earn their high school
        diploma in less than four months.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
