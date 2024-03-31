import * as React from 'react';
import {AddDataPenduduk,ShowDataPeserta,ShowActiveTest } from './index';

const ShowCard = (props) => {
  const { type, opens, close, id} = props; 

  switch (type) {
    case "AddData":
      return (
          <AddDataPenduduk opens={opens} close={close} />
      );
    // case "ShowData":
    //   return (
    //     <ShowDataPeserta opens={opens} close={close} id={id} />
    //   );

    //   case "ActiveTest":
    //     return (
    //       <ShowActiveTest opens={opens} close={close} />
    //     );
    default:
      return (
        <div className="">
          
        </div>
      );
  }
}

export default ShowCard
