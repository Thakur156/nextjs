export default function RootLayout({
  children,
  members,
  comments,
}: {
  children: React.ReactNode;
  members: React.ReactNode;
  comments: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {members}
          {comments}
        </div>
        {children}
      </body>
    </html>
  );
}
