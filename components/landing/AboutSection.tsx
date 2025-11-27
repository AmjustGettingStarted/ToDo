export default function AboutSection() {
  return (
    <section className="container px-4 py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left: Solid Color Illustration */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Task Management Illustration using solid purple shapes */}
              <div className="space-y-4">
                {/* Top task card */}
                <div
                  className="rounded-lg p-4"
                  style={{ background: "#8B5CF6", opacity: 0.9 }}
                >
                  <div className="h-3 w-3 rounded-full bg-white opacity-80 mb-2" />
                  <div className="h-2 w-3/4 rounded bg-white opacity-60 mb-1" />
                  <div className="h-2 w-1/2 rounded bg-white opacity-60" />
                </div>

                {/* Middle task card */}
                <div
                  className="rounded-lg p-4 ml-8"
                  style={{ background: "#8B5CF6", opacity: 0.7 }}
                >
                  <div className="h-3 w-3 rounded-full bg-white opacity-80 mb-2" />
                  <div className="h-2 w-2/3 rounded bg-white opacity-60 mb-1" />
                  <div className="h-2 w-3/5 rounded bg-white opacity-60" />
                </div>

                {/* Bottom task card */}
                <div
                  className="rounded-lg p-4 ml-4"
                  style={{ background: "#8B5CF6", opacity: 0.5 }}
                >
                  <div className="h-3 w-3 rounded-full bg-white opacity-80 mb-2" />
                  <div className="h-2 w-4/5 rounded bg-white opacity-60 mb-1" />
                  <div className="h-2 w-2/3 rounded bg-white opacity-60" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Built for Productivity
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-base leading-7">
                Todo App helps you stay organized and focused on what matters
                most. With a clean, distraction-free interface, you can manage
                your tasks without the overhead of complex features.
              </p>
              <p className="text-base leading-7">
                Whether you're tracking daily errands or managing important
                projects, our platform provides the tools you need to stay on
                top of everything. Simple, secure, and always accessible.
              </p>
              <p className="text-base leading-7">
                Experience the difference that thoughtful design and reliable
                performance can make in your daily workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
