import {FC, useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/hooks";

export const AppInitialDataLoaderComponent: FC = () => {
  const dispatch = useAppDispatch();

  return (
      <div style={{display: "none"}}>
      </div>
  );
}