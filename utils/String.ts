export function makeId(input: string) {
  return input.toLowerCase().replace(/\W+/g, "-");
}

export function commaFormat(input: string[]) {
  if (input.length <= 1) return input?.[0];
  return (
    input.slice(0, input.length - 1).join(", ") +
    " and " +
    input[input.length - 1]
  );
}

export function formatUrl(...args: string[]): string {
  const url = `/` + args.map((x) => makeId(x)).join("/");

  // console.log("Args : ", args);
  // console.log("Format URL : ", url);

  return url;
}

export function capitalizeFirstCharacter(input: string) {
  if (!input || input.length <= 0) return "";
  return input[0].toUpperCase() + input.substring(1);
}

export function makeTitle(id: string) {
  const parts = id.split("-");
  return parts.map((p) => capitalizeFirstCharacter(p)).join(" ");
}

export function makeTitleFromRoute(route: string) {
  if (route === "/") return "Homepage";
  const parts = route.split("/");
  return parts
    .filter((p) => p.trim() !== "")
    .map((p) => makeTitle(p))
    .join(" | ");
}


export function truncateToWordCount(
  content: string,
  wordCount: number
): string {
  return (
    content
      .split(" ")
      .filter((_, ind) => ind <= wordCount)
      .join(" ") + (content.split(" ").length > wordCount ? "..." : "")
  );
}

export const makeServiceBasicSectionTitle = (title: string) =>
  `${title} ${
    title.split(" ")[title.split(" ").length - 1] == "Development"
      ? ""
      : "Development"
  } Services`;

export const withArticleAorAn = (word: string): string => {
  if (!word) return "";
  return ["a", "e", "i", "o", "u"].includes(word[0].toLowerCase())
    ? `an ${word}`
    : `a ${word}`;
};
