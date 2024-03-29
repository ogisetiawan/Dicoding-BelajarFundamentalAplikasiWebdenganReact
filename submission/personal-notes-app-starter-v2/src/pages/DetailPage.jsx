import React from "react";
import ButtonFloating from "../components/Helpers/ButtonFloating";
import NoteDetail from "../components/Notes/NoteDetail";
import Loading from "../components/Helpers/Loading";
import LocaleContext from "../contexts/LocaleContext";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/network-data";
import { FiTrash2 } from "react-icons/fi";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";

function DetailPage() {
  const { selectLanguage } = React.useContext(LocaleContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = React.useState({});
  const [Loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoader(false);
    });
  }, []);

  async function deleteNotenHandler() {
    await deleteNote(id);
    note.archived ? navigate("/archives") : navigate("/");
  }

  async function archiveNotenHandler() {
    await archiveNote(id);
    navigate("/");
  }

  async function unarchiveNoteHandler() {
    await unarchiveNote(id);
    navigate("/archives");
  }

  if (Loader) {
    return <Loading />;
  }

  if (note === null) {
    return (
      <section className="alert alert-warning">
        {selectLanguage({ id: `Ups, "${id}" tidak ditemukan!`, en: `Oops, "${id}" not found!` })}
    </section>
    );
  }

  return (
    <section>
      <NoteDetail {...note} />
      <div className="detail-page__action">
        <ButtonFloating
          title={
            note.archived
              ? selectLanguage({ id: "Aktifkan", en: "Activate" })
              : selectLanguage({ id: "Arsipkan", en: "Archive" })
          }
          onClick={note.archived ? unarchiveNoteHandler : archiveNotenHandler}
          icon={note.archived ? <BiArchiveOut /> : <BiArchiveIn />}
        />
        <ButtonFloating
          title={selectLanguage({ id: "Hapus", en: "Delete" })}
          onClick={deleteNotenHandler}
          icon={<FiTrash2 />}
        />
      </div>
    </section>
  );
}

export default DetailPage;
