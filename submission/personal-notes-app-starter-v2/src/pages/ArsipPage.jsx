import React from "react";
import NoteList from "../components/Notes/NoteList";
import SearchBar from "../components/Helpers/SearchBar";
import Loading from "../components/Helpers/Loading";
import LocaleContext from "../contexts/LocaleContext";
import { getArchivedNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";

function ArsipPage() {
  const { selectLanguage } = React.useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [Loader, setLoader] = React.useState(true);

  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
      setLoader(false);
    });
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter(({ title }) => {
    return title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (Loader) {
    return <Loading />;
  }

  return (
    <section className="homepage">
      <h2 className="sixth"> {selectLanguage({ id: "Catatan Arsip", en: "Archives Note" })}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} />
    </section>
  );
}

export default ArsipPage;
