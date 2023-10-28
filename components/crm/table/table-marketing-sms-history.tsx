import React, { useEffect, useState } from "react";
import { Table, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";
import MarketingSMSHistoryActionTable from "../marketing/sms/sms_history_action_table";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";


import styles from "../marketing/marketing.module.css";
import { useRouter } from 'next/router';

interface DataType {
  key: React.Key;
  id: number;
  module: string;
  trangthai: string;
  stt: number;
  userName: string;
  template: string;
  templateName: string;
  templateId: string;
  sender: string;
  date: string;
  telenumbersend: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "STT",
    width: 50,
    dataIndex: "id",
    key: "0",
    render: (text, record) => (
      <span>
          {record.id}
      </span>
    ),
  },
  {
    title: "Đối tượng gửi",
    width: 250,
    dataIndex: "userName",
    key: "1",
    render: (text, record) => (
     <Link href="sms/detail">{record.userName}</Link>
    ),
  },
  {
    title: "Điện thoại",
    width: 150,
    dataIndex: "phone_number",
    key: "2",
  },
  {
    title: "Ngày gửi",
    dataIndex: "created_at",
    key: "3",
    width: 180,
  },
  {
    title: "Template",
    key: "4",
    render: (text, record) => (
      <span>
          {record.templateId} - {record.templateName}
      </span>
    ),
  },
  {
    title: "Template-Id",
    width: 150,
    dataIndex: "message_id",
    key: "6",
  },
  {
    title: "Trạng thái",
    width: 150,
    dataIndex: "status",
    key: "5",
  },
  
  {
    title: "Người thực hiện",
    dataIndex: "sender",
    key: "7",
    width: 280,
    render: (text) => text || "Công ty Cổ phần Thanh toán Hưng Hà",
  },
  {
    title: "Chức năng",
    dataIndex: "operation",
    key: "8",
    width: 120,
    fixed:"right",
    render: () => 
      <MarketingSMSHistoryActionTable/>
  },
];



interface TableDataSMSFormProps {
  setSelected: (value: boolean) => void;
  setNumberSelected: any;
}

 

const TableDataSMSForm: React.FC<TableDataSMSFormProps> = ( any) => {
  const router = useRouter();
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTAwMjg2NjAsImlkVGltVmllYzM2NSI6MTExMTEzNTY4OCwiaWRRTEMiOjEwMDI2NDY0LCJpZFJhb05oYW5oMzY1IjoxMDAyNDUyMiwiZW1haWwiOm51bGwsInBob25lVEsiOiIwOTg0NjYwMDQ3IiwiY3JlYXRlZEF0IjoxNjk4Mjg1NjgzLCJ0eXBlIjoyLCJjb21faWQiOjEwMDAzMDg3LCJ1c2VyTmFtZSI6Ikhvw6BuZyBNaW5oIE5o4bqldCJ9LCJpYXQiOjE2OTg0NzU4OTEsImV4cCI6MTY5ODU2MjI5MX0.3jwRzdY11RLwrHYNKDH_ovidnFUPC1W46-duyANctJ8';
  const apiUrl = 'http://210.245.108.202:3007/api/crm/marketingZalo/getListHistory';

  const [searchText, setSearchText] = useState(() => {
    // Lấy giá trị tìm kiếm từ localStorage khi trang được tải
    const savedSearchText = localStorage.getItem("searchText");
    return savedSearchText || "";
  });

  const filteredData = datas.filter((item) =>
    item.userName
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        searchText
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
  );

  useEffect(() => {
    localStorage.setItem("searchText", searchText);
  }, [searchText]);

  console.log(searchText);
  
  useEffect(() => {
      async function fetchData() {
        try {
          const res = await axios.get(apiUrl,{
              headers: {
                'Authorization': `Bearer ${token}`,
              }
          }); 
          if (res.status === 200) {
            setDatas(res.data);
          } else {
            console.error('Lỗi khi lấy dữ liệu từ API');
          }
          // setDatas(res.data.data.figData)
          // console.log('data',res.data.data.figData)
          
       
          
          for (var i = 0; i < res.data.data.figData.length; i++) {
            res.data.data.figData[i].id = i + 1;  
          }
          // console.log('dd',res.data.data.figData);
          setDatas(prevData => {
            const newData = res.data.data.figData.map((item, index) => ({
              ...item,
              id: index + 1
            }));
            return newData;
          });
          
          
          
          
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu từ API', error);
        }
      }
      
      fetchData();
    }, []);
    const handleSearch = () => {
  
      router.push({ pathname: router.pathname, query: { searchTerm } });
    };
         
    
 
     
        
      
      
  
  return (
  
    
  <div>
    <div style={{ marginTop: "20px" }}>
      <div className={styles.main__control}>
        <div className={`${styles.main__control_btn} flex_between`}>
          <div className={styles.main__control_search}>
            <form>
              <input
                type="text"
                className={styles.input__search}
                name="search"
                value={searchText}
                placeholder="Tìm kiếm theo tên mẫu"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className={styles.kinh_lup}>
                <Image
                  width={14}
                  height={14}
                  className={styles.img__search}
                  src="/crm/search.svg"
                  alt="hungha365.com" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: "20px" }}>
      <Table
        columns={columns}
        dataSource={filteredData}
        bordered
        scroll={{ x: 1500, y: 400 }}
      />
    </div>
  </div>
  );
};

export default TableDataSMSForm;
