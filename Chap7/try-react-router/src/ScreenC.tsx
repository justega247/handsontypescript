import React, { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}

const ScreenC: FC<ScreenCProps> = (props) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     props.history.push("/");
  //   }, 3000)
  // })

  const history = useHistory();
  const { userid } = useParams();

  const onClickGoBack = () => {
    // props.history.goBack();
    history.goBack();
  }

  return (
    <div>
      {/* <div>{`Your id is ${props.match.params.userid}`}</div> */}
      <div>{`Your id is ${userid}`}</div>
      <div>{props.message}</div>
      <div>
        <button onClick={onClickGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default ScreenC;
