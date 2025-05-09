export default function RootLayout({
  children,
  posts,
  comments,
}: Readonly<{
  children: React.ReactNode;
  posts: React.ReactNode;
  comments: React.ReactNode;
}>) {
  return (
    <div>
      {children}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen p-4 bg-black text-white">
        {posts}
        {comments}
      </div>
    </div>
  );
}
