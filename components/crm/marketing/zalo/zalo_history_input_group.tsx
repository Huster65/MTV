import React from "react";
import styles from "../../marketing/marketing.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function EmailFormInputGroup({ isSelectedRow }: any) {
  const handleClickSelectoption = () => {};
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    // Cập nhật URL với query parameter 'searchTerm'
    router.push({ pathname: router.pathname, query: { searchTerm } });
  };
 
  
  // useEffect(()=>{
  //   console.log('searchTerm',searchTerm);
  //   },[searchTerm])

  return (
    <div className={styles.main__control}>
      <div
        className={`${styles.select_item} flex_align_center_item ${styles.select_item_time}`}
      >
        <label htmlFor="" className="">
          Ngày gửi:
        </label>
        <div className={`${styles.input_item_time} flex_between`}>
          <input
            type="date"
            name=""
            id="start_time"
            style={{ margin: "0px 10px" }}
            
          />
          -
          <input
            type="date"
            name=""
            id="end_time"
            style={{ margin: "0px 10px" }}
          />
        </div>
      </div>
      
    </div>
  );
}
