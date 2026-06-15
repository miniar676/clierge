import { NavigateFunction } from "react-router-dom";

export const goToSection = (
  navigate: NavigateFunction,
  pathname: string,
  sectionId: string,
  params?: Record<string, string>
) => {
  const search = params ? `?${new URLSearchParams(params).toString()}` : "";
  const target = `/${search}#${sectionId}`;

  if (pathname !== "/") {
    navigate(target);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    navigate(target, { replace: true });
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }
};
