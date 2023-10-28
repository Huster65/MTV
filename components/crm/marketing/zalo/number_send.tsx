import React, { useState, useEffect } from "react";
import styles from "../../marketing/marketing.module.css";
import axios from "axios";

export default function NumberSend() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTAwMjg2NjAsImlkVGltVmllYzM2NSI6MTExMTEzNTY4OCwiaWRRTEMiOjEwMDI2NDY0LCJpZFJhb05oYW5oMzY1IjoxMDAyNDUyMiwiZW1haWwiOm51bGwsInBob25lVEsiOiIwOTg0NjYwMDQ3IiwiY3JlYXRlZEF0IjoxNjk4Mjg1NjgzLCJ0eXBlIjoyLCJjb21faWQiOjEwMDAzMDg3LCJ1c2VyTmFtZSI6Ikhvw6BuZyBNaW5oIE5o4bqldCJ9LCJpYXQiOjE2OTgzNjc3MTcsImV4cCI6MTY5ODQ1NDExN30.y0gqGpiag3rYXDzccvZ65FKN2tq6djioRoxLJSEpgK4';
    const apiUrl = 'http://210.245.108.202:3007/api/crm/marketingZalo/getQuota';
    const [numberSend, setNumberSend] = useState(100);
    const [maxNumberSend, setMaxNumberSend] = useState(200);

    useEffect(() => {
        async function fetchNumberSend() {
            try {
                const res = await axios.get(apiUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setNumberSend(res.data.data.data.remainingQuota);
                setMaxNumberSend(res.data.data.data.dailyQuota)
            } catch (error) {
                console.error('Lỗi khi gửi yêu cầu:', error);
            }
        }

        fetchNumberSend();
    }, []); 

    return (
        <div className={styles.numbersend}>Số lượng tin nhắn đã gủi: {numberSend} / {maxNumberSend}</div>
    );
}
