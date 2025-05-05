import React from "react";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ newsId: string }>;
  searchParams: Promise<{ cat: string }>;
}) {
  const { newsId } = await params;
  const { cat } = await searchParams;

  return (
    <div>
      News ID: {newsId}:{cat}
    </div>
  );
}
