import { useState, useEffect } from "react";
import getPhotoUrl from "get-photo-url";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../dexie";
import Modal from "../modal";
import ClipLoader from "react-spinners/ClipLoader";
import PlusSqareIcon from '../Icons/PlusSquare'

const Gallery = (props) => {
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [photoList, setPhotoList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState("");


  const allPhotos = useLiveQuery(async () => {
    const dataReceived = await db.gallery.toArray();

    setTimeout(() => {
      setLoading(false);
    }, 3000);
    return dataReceived;
  }, []);

  useEffect(() => {
    setPhotoList(allPhotos);
  }, [toggle, allPhotos]);


  


  const addPhoto = async () => {
    db.gallery.add({
      url: await getPhotoUrl("#addPhotoInput"),
    });
  };

  const removePhoto = (id) => {
    db.gallery.delete(id);
  };

  

  const clearAll = () => {
    photoList?.forEach((photo) => {
      removePhoto(photo.id);
    });

    setPhotoList([]);
    setToggle((prev) => !prev);
  };

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        {/* <i className="add-photo-button fas fa-plus-square"></i> */}
        <PlusSqareIcon className="add-photo-button" />
      </label>
      <label htmlFor="removePhoto">
        <button id="deleteAll" onClick={(e) => clearAll()}>
          Delete All
        </button>
      </label>

      <section className="gallery">
        {photoList?.length <= 0 && (
          <div className="no-photo" 
          style={{
            margin: "auto",
            width: "100%",
            gridColumn: "2/3",
            display: "flex",
            marginTop: "40px",
            justifyContent: "center",
          }}
          >No photos Available</div>
        )}
        {loading ? (
          <div
            style={{
              margin: "auto",
              width: "100%",
              gridColumn: "2/3",
              display: "flex",
              marginTop: "40px",
              justifyContent: "center",
            }}
          >
            <ClipLoader color={"#060706"} loading={true} size={40} />
          </div>
        ) : (
          photoList?.sort((a,b) => b.id - a.id ).map((photo) => (
            <div className="item" key={photo.id}>
              <img src={photo.url} className="item-image" />
              <button
                className="delete-button"
                onClick={() => {
                  setOpenModal(true);
                  setId(photo.id);
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </section>

      <Modal
        removePhoto={removePhoto}
        setOpenModal={setOpenModal}
        openModal={openModal}
        id={id}
      />
    </>
  );
};

export default Gallery;
