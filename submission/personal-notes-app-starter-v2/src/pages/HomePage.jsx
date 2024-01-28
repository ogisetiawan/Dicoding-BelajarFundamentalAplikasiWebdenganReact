import React from "react";
import NoteList from "../components/Notes/NoteList";
import SearchBar from "../components/Helpers/SearchBar";
import ButtonFloating from "../components/Helpers/ButtonFloating";
import Loading from "../components/Helpers/Loading";
import LocaleContext from "../contexts/LocaleContext";
import { getActiveNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { selectLanguage } = React.useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [Loader, setLoader] = React.useState(true);

  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setLoader(false);
    });
  }, []);

  const navigate = useNavigate();
  function onAddButtonHandler() {
    navigate("/notes/new");
  }

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
    <>
      <h2 className="sixth"> {selectLanguage({ id: "Catatan Aktif", en: "Active Note" })}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} />
      <div className="homepage__action">
        <ButtonFloating
          title={selectLanguage({ id: "Tambah", en: "Add" })}
          onClick={onAddButtonHandler}
          icon={<FiPlus />}
        />
      </div>
    </>
  );
}
export default HomePage;
