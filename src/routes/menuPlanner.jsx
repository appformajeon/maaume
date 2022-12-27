
// import request from 'request';
// function getAPI() {
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './menuPlanner.css'
import Header from '../header';
import Footer from '../footer';
//     const key = 'a0936c9a416d4518871b9c12273ae914'

//     request('https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=' + key + '&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7310452', {json: true}, (err, res, body) => {
//         if (err) {return console.log(err);}
//         console.log(body.url);
//   console.log(body.explanation);
//     })
// }

// 음식 데이터를 HTML 형식으로 반환합니다.
function foodToHTML(food) {
    return (
        <>
            {food.map(f => (<>
                {f} <br />
            </>
            ))}
        </>
    )
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

// date 객체를 string로 반환합니다.
function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('');
}


export default function MenuPlanner() {
    const [json, setJson] = useState();
    const fetchPost = async () => {
        try {

            const key = 'a0936c9a416d4518871b9c12273ae914';
            const nowDate = new Date()
            const minDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - nowDate.getDay() + 1)
            const maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 6 - nowDate.getDay())
            const result = await axios('https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=' + key + '&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7310452&MLSV_FROM_YMD=' + formatDate(minDate) + '&MLSV_TO_YMD=' + formatDate(maxDate) + '')
            setJson(result.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPost();
    }, [])

    const getMenu = (result) => {
        var temp_menus = []
        try {
            if (!result)
                return temp_menus
            result.mealServiceDietInfo[1].row.forEach((value) => {
                const DDISH_NM = value.DDISH_NM;
                const MLSV_YMD = value.MLSV_YMD;
                const CAL_INFO = value.CAL_INFO;

                var menu = {
                    "food": DDISH_NM.split('<br/>'),
                    "time": new Date(MLSV_YMD.slice(0, 4) + '-' + MLSV_YMD.slice(4, 6) + '-' + MLSV_YMD.slice(6, 8)),
                    "kcal": CAL_INFO
                }
                console.log('시간' + menu.time)
                temp_menus.push(menu);
            });

        } catch (error) {
            console.log(error)
        }
        return temp_menus
    }
    const loadMenu = (result) => {
        console.log(result)
        const menus = getMenu(result)
        return (
            <>
                
                <Table bordered  responsive className='plan_table'>
                    <thead>
                        <tr>
                            <th>
                                날짜
                            </th>
                            {menus.map(d => (<th>
                                {d.time.getMonth() + 1}월 {d.time.getDate()}일
                            </th>))}
                        </tr>

                    </thead>
                    <tbody >
                        <tr>
                            <th>
                                급식
                            </th>
                            {menus.map(m => (<>
                                <th>
                                    {foodToHTML(m.food)}
                                </th>
                            </>))}
                        </tr>
                        <tr>
                        <th>
                            칼로리
                        </th>
                            {menus.map(m => (<>
                                <th>
                                    {m.kcal}
                                </th>
                            </>))}
                        </tr>

                    </tbody>
                </Table>
            </>
        )
    }
    return (
        <>
            <Container>
                <Header/>
                {loadMenu(json)}
            <Footer/>
            </Container>
        </>

    )
}


