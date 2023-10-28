import React, { useContext, useEffect, useRef, useState } from "react";
import styleHome from "@/components/crm/home/home.module.css";
import styles from "@/components/crm/marketing/marketing.module.css";
import { SidebarContext } from "@/components/crm/context/resizeContext";
import { useHeader } from "@/components/crm/hooks/useHeader";
import SMSDetailInputGroup from "@/components/crm/marketing/sms/sms_detail_input_group";
import Head from "next/head";

const AddFilesCustomerList: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const imgRef = useRef<HTMLInputElement>(null);
  const { setHeaderTitle, setShowBackButton, setCurrentPath }: any =
    useHeader();

  useEffect(() => {
    setHeaderTitle("SMS / Chi tiết");
    setShowBackButton(true);
    setCurrentPath("/marketing/sms");
  }, [setHeaderTitle, setShowBackButton, setCurrentPath]);

  const handleClickImg = () => {
    imgRef?.current?.click();
  };

  useEffect(() => {
    if (isOpen) {
      mainRef.current?.classList.add("content_resize");
    } else {
      mainRef.current?.classList.remove("content_resize");
    }
  }, [isOpen]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" initial-scale="1" />
        <meta name="robots" content="noindex,nofollow" />
        <title>Chi tiết SMS</title>
        <meta
          name="description"
          content="CRM của AI365 là một phần mềm chăm sóc khách hàng tự động, có tính linh hoạt cao, thích hợp ứng dụng vào mọi loại hình doanh nghiệp. Phần mềm thuộc hệ sinh thái gồm 200 phần mềm, đều được AI365 kết nối trên 1 nền tảng duy nhất. Mọi báo cáo khách hàng đều được kiểm soát qua chat365 vô cùng tiện lợi"
        />
        <meta
          name="Keywords"
          content="CRM của AI365 là một phần mềm chăm sóc khách hàng tự động, có tính linh hoạt cao, thích hợp ứng dụng vào mọi loại hình doanh nghiệp. Phần mềm thuộc hệ sinh thái gồm 200 phần mềm, đều được AI365 kết nối trên 1 nền tảng duy nhất. Mọi báo cáo khách hàng đều được kiểm soát qua chat365 vô cùng tiện lợi"
        />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Phần mềm CRM của AI365 – giải pháp tuyệt vời chăm sóc khách hàng tự động"
        />
        <meta
          property="og:description"
          content="CRM của AI365 là một phần mềm chăm sóc khách hàng tự động, có tính linh hoạt cao, thích hợp ứng dụng vào mọi loại hình doanh nghiệp. Phần mềm thuộc hệ sinh thái gồm 200 phần mềm, đều được AI365 kết nối trên 1 nền tảng duy nhất. Mọi báo cáo khách hàng đều được kiểm soát qua chat365 vô cùng tiện lợi"
        />
        <meta
          property="og:image"
          content="https://crm.timviec365.vn/assets/img/images-banners.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="CRM của AI365 là một phần mềm chăm sóc khách hàng tự động, có tính linh hoạt cao, thích hợp ứng dụng vào mọi loại hình doanh nghiệp. Phần mềm thuộc hệ sinh thái gồm 200 phần mềm, đều được AI365 kết nối trên 1 nền tảng duy nhất. Mọi báo cáo khách hàng đều được kiểm soát qua chat365 vô cùng tiện lợi"
        />
        <meta
          name="twitter:title"
          content="Phần mềm CRM của AI365 – giải pháp tuyệt vời chăm sóc khách hàng tự động"
        />
        <link rel="canonical" href="https://hungha365.com/crm" />

        {/* CSS */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-NXVQCHN"
        ></script>
      </Head>
      <div className={styleHome.main} ref={mainRef}>
        <SMSDetailInputGroup />
        <div className={styles.formInfoStep}>
          <div className={styles.main__title}>Thông tin sms</div>
          <div className={styles.main__content__body}>
            <div className={styles.main__body__item}>
              <p className={styles.main__body__type}>Thông tin sms</p>
              <div className={styles.row_system}>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Phân hệ gửi:
                    </div>
                    <div className={styles.main__body__item__value}>
                      Khách hàng
                    </div>
                  </div>
                </div>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Số điện thoại gửi:
                    </div>
                    <div className={styles.main__body__item__value}>
                      timviec365 (098765423)
                    </div>
                  </div>
                </div>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Đối tượng gửi:
                    </div>
                    <div className={styles.main__body__item__value}>
                      Nguyễn Trần Kim Phượng
                    </div>
                  </div>
                </div>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Số điện thoại nhận:
                    </div>
                    <div className={styles.main__body__item__value}>
                      098765423
                    </div>
                  </div>
                </div>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Mẫu sms:
                    </div>
                    <div className={styles.main__body__item__value}>
                      Chưa cập nhật
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.main__body__item}>
              <p className={styles.main__body__type}>Nội dung sms</p>
              <div className={styles.row_system}>
                <div className={styles.col_lg_12}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Nội dung sms:
                    </div>
                    <div className={styles.main__body__item__value}>
                      Wikipedia là một bách khoa toàn thư mở trực tuyến đa ngôn
                      ngữ được sáng lập và duy trì bởi một cộng đồng biên tập
                      viên tình nguyện và chạy trên nền tảng wiki.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.main__body__item}>
              <p className={styles.main__body__type}>Thông tin hệ thống</p>
              <div className={styles.row_system}>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Gửi ngay:
                    </div>
                    <div className={styles.main__body__item__value}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 7.36V8.004C14.9991 9.5135 14.5103 10.9823 13.6065 12.1913C12.7027 13.4003 11.4323 14.2847 9.98475 14.7127C8.5372 15.1407 6.99008 15.0893 5.57413 14.5662C4.15818 14.0431 2.94926 13.0763 2.12767 11.8099C1.30609 10.5436 0.915854 9.04565 1.01517 7.53942C1.11449 6.0332 1.69804 4.59943 2.6788 3.45196C3.65955 2.30448 4.98495 1.50477 6.45733 1.17211C7.92971 0.839444 9.47018 0.991643 10.849 1.60601"
                          stroke="#34B632"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M14.9999 2.40381L7.9999 9.41081L5.8999 7.31081"
                          stroke="#34B632"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Gửi vào lúc:
                    </div>
                    <div className={styles.main__body__item__value}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 7.36V8.004C14.9991 9.5135 14.5103 10.9823 13.6065 12.1913C12.7027 13.4003 11.4323 14.2847 9.98475 14.7127C8.5372 15.1407 6.99008 15.0893 5.57413 14.5662C4.15818 14.0431 2.94926 13.0763 2.12767 11.8099C1.30609 10.5436 0.915854 9.04565 1.01517 7.53942C1.11449 6.0332 1.69804 4.59943 2.6788 3.45196C3.65955 2.30448 4.98495 1.50477 6.45733 1.17211C7.92971 0.839444 9.47018 0.991643 10.849 1.60601"
                          stroke="#ccc"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M14.9999 2.40381L7.9999 9.41081L5.8999 7.31081"
                          stroke="#ccc"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Trạng thái gửi:
                    </div>
                    <div className={styles.main__body__item__value}>Đã gửi</div>
                  </div>
                </div>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Thời gian gửi:
                    </div>
                    <div className={styles.main__body__item__value}>
                      10:10 - 22/03/2022
                    </div>
                  </div>
                </div>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Người tạo:
                    </div>
                    <div className={styles.main__body__item__value}>
                      <img
                        className="img_person"
                        width="26"
                        height="26"
                        style={{ margin: "-8px 8px" }}
                        src="/crm/user_kh.png"
                      />
                      Nguyễn Văn Nam
                    </div>
                  </div>
                </div>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Ngày tạo:
                    </div>
                    <div className={styles.main__body__item__value}>
                      10:10 - 22/03/2022
                    </div>
                  </div>
                </div>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Người sửa:
                    </div>
                    <div className={styles.main__body__item__value}>
                      <img
                        className="img_person"
                        width="26"
                        height="26"
                        style={{ margin: "-8px 8px" }}
                        src="/crm/user_kh.png"
                      />
                      Nguyễn Văn Nam
                    </div>
                  </div>
                </div>
                <div className={styles.col_lg_6}>
                  <div className={styles.d_flex}>
                    <div className={styles.main__body__item__title}>
                      Ngày sửa:
                    </div>
                    <div className={styles.main__body__item__value}>
                      10:10 - 22/03/2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFilesCustomerList;
