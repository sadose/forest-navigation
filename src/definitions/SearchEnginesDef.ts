export type SearchEngine = "baidu" | "bing" | "google";

export interface SearchInfo {
  name: string;
  url: string;
}

export const AllSearchEngines = {
  baidu: {
    name: "百度",
    url: "https://www.baidu.com/s?wd=",
  } as SearchInfo,
  bing: {
    name: "必应",
    url: "https://cn.bing.com/search?q=",
  } as SearchInfo,
  google: {
    name: "Google",
    url: "https://www.google.com.hk/search?q=",
  } as SearchInfo,
};
