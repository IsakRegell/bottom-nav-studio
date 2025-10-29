const Posts = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 bg-card border-b border-border px-4 py-4 z-10">
        <h1 className="text-2xl font-bold text-foreground">Visa Inlägg</h1>
      </header>
      <main className="container max-w-lg mx-auto px-4 py-6">
        <p className="text-muted-foreground">Dina inlägg visas här</p>
      </main>
    </div>
  );
};

export default Posts;
