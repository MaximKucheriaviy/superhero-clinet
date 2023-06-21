import { StyledInfoPage } from "./PageStyles";
import { useParams } from "react-router-dom";
import { getHeroByID } from "../service/backAPI";
import { useState, useEffect } from "react";

export const InfoPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(undefined);
  useEffect(() => {
    getHeroByID(id)
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(data);
  return (
    <StyledInfoPage>
      {data && (
        <div>
          <div className="mainInfo">
            <div className="imageThumb">
              {data.Images.length !== 0 && (
                <img src={data.Images[0].url} alt={data.nickname} />
              )}
            </div>
            <div>
              <h2>{data.nickname}</h2>
              <p className="realName desc">
                <span>Real name: </span>
                {data.real_name}
              </p>
              <p className="abilities desc">
                <span>Superpowers:</span>
                {` ${data.superpowers}`}
              </p>
            </div>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{data.origin_description}</p>
            <p className="desc">
              <span>Catch phrase:</span>
              {` ${data.catch_phrase}`}
            </p>
          </div>
        </div>
      )}
    </StyledInfoPage>
  );
};