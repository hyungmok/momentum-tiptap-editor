import Editor from "@/components/editor/editor";

export default function Home() {
  return (
    <main className="flex min-h-screen place-items-center justify-center bg-white p-4">
      <div className="w-full max-w-5xl">
        <div className="text-center space-y-5">
          <div>
            <h1 className="text-xl font-bold tracking-loose sm:text-3xl">
              Momentum Tiptap Editor
            </h1>
            <h2 className="text-sm text-slate-600">
              A Rich Text Editor built with Tiptap
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <a
                href="https://github.com/hyungmok/momentum-tiptap-editor"
                className="font-semibold text-primary"
              >
                View on Github <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="flex w-full text-left">
            <Editor />
          </div>
        </div>
      </div>
    </main>
  );
}
