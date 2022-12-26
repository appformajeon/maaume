
// import request from 'request';
// function getAPI() {

import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//     const key = 'a0936c9a416d4518871b9c12273ae914'

//     request('https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=' + key + '&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7310452', {json: true}, (err, res, body) => {
//         if (err) {return console.log(err);}
//         console.log(body.url);
//   console.log(body.explanation);
//     })
// }


export default function MenuPlanner() {
    const key = ''
    const [data, setData] = useState([]);
    useEffect(() => {
        const dataFetch = async () => {
            const json = await (
                await fetch(
                    'https://open.neis.go.kr/hub/mealServiceDietInfo?KEY='+'key'+'&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7310452&MLSV_FROM_YMD=20221201&MLSV_TO_YMD=20221230'
                )
            ).json();
            var meal; // 급식 이름
            var mealDayFrom; // 급식 시작일
            var mealDayTo; // 급식 종료일
            var mealDay; // 급식 당일
            var calInfo; // 칼로리
            var temp = '';
            // for (var i = 0; i < json.mealServiceDietInfo[1].row.length; i++) {
            //     meal = json.mealServiceDietInfo[1].row[i].DDISH_NM;
            //     mealDay = json.mealServiceDietInfo[1].row[i].MLSV_YMD;
            //     calInfo = json.mealServiceDietInfo[1].row[i].CAL_INFO;

                
            //     console.log(meal.split('<br/>'))

            // }
            
            /**
             * 메뉴 객체 구조
             * {
             * "food": [],
             * "time": Date,
             * "kcal": int
             * }
             */

            const menus = [];
            json.mealServiceDietInfo[1].row.forEach((value) => {
                const DDISH_NM = value.DDISH_NM;
                const MLSV_YMD = value.MLSV_YMD;
                const CAL_INFO = value.CAL_INFO;

                var menu = {
                    "food": DDISH_NM.split('<br/>'),
                    "time": new Date(MLSV_YMD.slice(0,4) + '-' + MLSV_YMD.slice(4,6) + '-' + MLSV_YMD.slice(6,8)),
                    "kcal": CAL_INFO
                }

                menus.push(menu);
            });
            setData(menus)
            
        }

        dataFetch()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    {data.map(d => (<Col>
                    {d.time.getMonth()}월 {d.time.getDate()}일
                    </Col>))}
                </Row>
                <Row>
                    {data.map(d => (
                        <Col>
                        {d.food}
                        </Col>
                    ))}
                </Row>
                <Row>
                    {data.map(d => (<Col>
                    {d.kcal}</Col>))}
                </Row>
                
            </Container>
        </>
    )
}