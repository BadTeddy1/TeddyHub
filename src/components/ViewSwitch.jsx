import { useEffect, useState } from "react";

const VIEW_STORAGE_KEY = "teddyhub-site-view";

export default function ViewSwitch() {
  const [view, setView] = useState("modern");

  useEffect(() => {
    const stored = window.localStorage.getItem(VIEW_STORAGE_KEY);
    const initialView = stored === "classic" ? "classic" : "modern";
    setView(initialView);
    document.documentElement.dataset.siteView = initialView;
  }, []);

  const toggleView = () => {
    const next = view === "modern" ? "classic" : "modern";
    window.localStorage.setItem(VIEW_STORAGE_KEY, next);
    document.documentElement.dataset.siteView = next;
    setView(next);
    window.location.href = next === "classic" ? "/classic" : "/";
  };

  return (
    <button className="view-switch" type="button" onClick={toggleView}>
      {view === "modern" ? "Classic view" : "Modern view"}
    </button>
  );
}
