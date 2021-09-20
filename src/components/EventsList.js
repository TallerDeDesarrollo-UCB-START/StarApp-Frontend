import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function EventList() {
  const { id } = useParams();
  const url = `https://5fc44b7b36bc7900163436cf.mockapi.io/api/Message/Eventos`;
  const [evento, setEvento] = useState({
    loading: false,
    data: null,
  });

  let content = null;

  useEffect(() => {
    setEvento({
      loading: true,
      data: null,
    });

    axios
      .get(url)
      .then((response) => {
        setEvento({
          loading: false,
          data: response,
        });
      })
      .catch(() => {
        setEvento({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  if (evento.data) {
    content = (
      <div>
        <h1>{evento.data.nombre}</h1>
        <div>
          <img src={evento.data.imgUrl} alt={evento.data.name} />
        </div>
        <div>
          <img src={evento.data.modalidad} />
        </div>
        <div>
          <img src={evento.data.fecha} />
        </div>
        <div>
          <img src={evento.data.lugar} />
        </div>
      </div>
    );
  }
  return <div>{content}</div>;
}
export default EventList;
