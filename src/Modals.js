import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Modal() {

  const MySwal = withReactContent(Swal)
  

  return (
    <>
      <button
        className="rounded-full border border-secondary2 py-3 px-4 hover:bg-primary focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => 
          MySwal.fire({
          title: <strong>Opssss</strong>,
          html: <i>No more project availables</i>,
          icon: 'error'
        })}
      >
        <span className="text-base font-medium text-secondary2">Show More Project</span>  
      </button>
    </>
  );
}