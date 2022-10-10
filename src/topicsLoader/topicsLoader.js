export const topicsLoader = async () => {
  const topicsData = await fetch(
    "https://openapi.programming-hero.com/api/quiz"
  );
  const topics = topicsData.json();
  return topics;
};
